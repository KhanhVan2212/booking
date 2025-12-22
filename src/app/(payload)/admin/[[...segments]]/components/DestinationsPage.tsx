"use client";

import { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, X, Upload } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  slug: string;
  price: string;
  imageUrl?: string;
  featuredImage?: any;
  description?: string;
  featured?: boolean;
  status: "published" | "draft";
  createdAt: string;
  updatedAt: string;
}

interface FormData {
  name: string;
  slug: string;
  price: string;
  imageUrl: string;
  imageFile: File | null;
  description: string;
  featured: boolean;
  status: "published" | "draft";
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadMode, setUploadMode] = useState<"url" | "file">("url");
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    slug: "",
    price: "",
    imageUrl: "",
    imageFile: null,
    description: "",
    featured: false,
    status: "published",
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/destinations?includeAll=true");
      const data = await response.json();

      if (data.success) {
        setDestinations(data.destinations);
      }
    } catch (error) {
      console.error("Error fetching destinations:", error);
      alert("Không thể tải danh sách địa điểm");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name),
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, imageFile: file, imageUrl: "" });
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      setUploading(true);
      const token = localStorage.getItem("payload-token");
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/media", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (data.doc && data.doc.id) {
        return data.doc.id;
      }
      return null;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const getImageUrl = (dest: Destination) => {
    if (dest.imageUrl) return dest.imageUrl;
    if (dest.featuredImage) {
      if (typeof dest.featuredImage === 'string') {
        return `/media/${dest.featuredImage}`;
      }
      if (dest.featuredImage.url) {
        return dest.featuredImage.url;
      }
      if (dest.featuredImage.filename) {
        return `/media/${dest.featuredImage.filename}`;
      }
    }
    return "/images/placeholder.jpg";
  };

  const openModal = (destination?: Destination) => {
    if (destination) {
      setEditingId(destination.id);
      setFormData({
        name: destination.name,
        slug: destination.slug,
        price: destination.price,
        imageUrl: destination.imageUrl || "",
        imageFile: null,
        description: destination.description || "",
        featured: destination.featured || false,
        status: destination.status,
      });
    } else {
      setEditingId(null);
      setFormData({
        name: "",
        slug: "",
        price: "",
        imageUrl: "",
        imageFile: null,
        description: "",
        featured: false,
        status: "published",
      });
    }
    setUploadMode("url");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("payload-token");

      let featuredImageId = null;

      // Nếu upload file
      if (uploadMode === "file" && formData.imageFile) {
        featuredImageId = await uploadImage(formData.imageFile);
        if (!featuredImageId) {
          alert("Không thể upload ảnh");
          return;
        }
      }

      const submitData: any = {
        name: formData.name,
        slug: formData.slug,
        price: formData.price,
        description: formData.description,
        featured: formData.featured,
        status: formData.status,
      };

      // Ưu tiên upload file, không thì dùng URL
      if (featuredImageId) {
        submitData.featuredImage = featuredImageId;
      } else if (formData.imageUrl) {
        submitData.imageUrl = formData.imageUrl;
      }

      const url = editingId
        ? `/api/destinations/${editingId}`
        : "/api/destinations";

      const method = editingId ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (data.success) {
        alert(editingId ? "Cập nhật thành công!" : "Tạo mới thành công!");
        closeModal();
        fetchDestinations();
      } else {
        alert(data.error || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error saving destination:", error);
      alert("Có lỗi xảy ra khi lưu địa điểm");
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Bạn có chắc muốn xóa địa điểm "${name}"?`)) {
      return;
    }

    try {
      const token = localStorage.getItem("payload-token");
      const response = await fetch(`/api/destinations/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        alert("Xóa thành công!");
        fetchDestinations();
      } else {
        alert(data.error || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error deleting destination:", error);
      alert("Có lỗi xảy ra khi xóa địa điểm");
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="text-gray-600">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Quản lý Địa điểm</h2>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={20} />
          Thêm địa điểm mới
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Hình ảnh
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Tên
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Slug
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Giá
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Trạng thái
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Nổi bật
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Thao tác
            </th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
          {destinations.map((dest) => (
            <tr key={dest.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <img
                  src={getImageUrl(dest)}
                  alt={dest.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                {dest.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {dest.slug}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {dest.price}
              </td>
              <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      dest.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {dest.status === "published" ? "Đã xuất bản" : "Nháp"}
                  </span>
              </td>
              <td className="px-6 py-4">
                {dest.featured ? (
                  <span className="text-yellow-500">⭐</span>
                ) : (
                  <span className="text-gray-300">☆</span>
                )}
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(dest)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(dest.id, dest.name)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        {destinations.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Chưa có địa điểm nào. Hãy thêm địa điểm đầu tiên!
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold">
                {editingId ? "Chỉnh sửa địa điểm" : "Thêm địa điểm mới"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên địa điểm *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ví dụ: Đà Nẵng"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug *
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="da-nang"
                />
                <p className="text-xs text-gray-500 mt-1">
                  URL thân thiện, tự động tạo từ tên
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Giá *
                </label>
                <input
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1.200.000 VNĐ"
                />
              </div>

              {/* Image Upload/URL Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hình ảnh *
                </label>

                <div className="flex gap-4 mb-3">
                  <button
                    type="button"
                    onClick={() => setUploadMode("url")}
                    className={`px-4 py-2 rounded-lg ${
                      uploadMode === "url"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Nhập URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setUploadMode("file")}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                      uploadMode === "file"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    <Upload size={16} />
                    Upload ảnh
                  </button>
                </div>

                {uploadMode === "url" ? (
                  <div>
                    <input
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, imageUrl: e.target.value, imageFile: null })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                    {formData.imageUrl && (
                      <img
                        src={formData.imageUrl}
                        alt="Preview"
                        className="mt-2 w-32 h-32 object-cover rounded"
                      />
                    )}
                  </div>
                ) : (
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {formData.imageFile && (
                      <p className="mt-2 text-sm text-green-600">
                        ✓ Đã chọn: {formData.imageFile.name}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mô tả
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Mô tả về địa điểm..."
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Địa điểm nổi bật
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trạng thái *
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as "published" | "draft",
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="published">Đã xuất bản</option>
                  <option value="draft">Nháp</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
                >
                  {uploading ? "Đang upload..." : editingId ? "Cập nhật" : "Tạo mới"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}