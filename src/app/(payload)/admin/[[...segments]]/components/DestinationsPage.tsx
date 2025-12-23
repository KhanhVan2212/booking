"use client";

import { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, X } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  slug: string;
  price: string;
  region: "domestic" | "international";
  imageUrl?: string;
  featuredImage?: any;
  description?: string;
  detailInfo?: {
    bestTime?: string;
    flightTime?: string;
    location?: string;
  };
  content?: any; // Rich text
  reasons?: Array<{ reason: string; id?: string }>;
  tips?: string;
  gallery?: Array<{
    imageUrl?: string;
    image?: any;
    caption?: string;
    id?: string;
  }>;
  featured?: boolean;
  status: "published" | "draft";
}

interface FormData {
  name: string;
  slug: string;
  price: string;
  region: "domestic" | "international";
  imageUrl: string;
  description: string;
  bestTime: string;
  flightTime: string;
  location: string;
  contentText: string;
  reasons: string[];
  tips: string;
  galleryUrls: string[];
  featured: boolean;
  status: "published" | "draft";
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newGalleryUrl, setNewGalleryUrl] = useState("");
  const [newReason, setNewReason] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    slug: "",
    price: "",
    region: "domestic",
    imageUrl: "",
    description: "",
    bestTime: "Tháng 3 - Tháng 8",
    flightTime: "",
    location: "",
    contentText: "",
    reasons: [],
    tips: "",
    galleryUrls: [],
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
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const handleNameChange = (name: string) => {
    setFormData({ ...formData, name, slug: generateSlug(name) });
  };

  const addGalleryImage = () => {
    if (newGalleryUrl.trim()) {
      setFormData({
        ...formData,
        galleryUrls: [...formData.galleryUrls, newGalleryUrl.trim()]
      });
      setNewGalleryUrl("");
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData({
      ...formData,
      galleryUrls: formData.galleryUrls.filter((_, i) => i !== index)
    });
  };

  const addReason = () => {
    if (newReason.trim()) {
      setFormData({
        ...formData,
        reasons: [...formData.reasons, newReason.trim()]
      });
      setNewReason("");
    }
  };

  const removeReason = (index: number) => {
    setFormData({
      ...formData,
      reasons: formData.reasons.filter((_, i) => i !== index)
    });
  };

  const openModal = (destination?: Destination) => {
    if (destination) {
      setEditingId(destination.id);

      // Extract content text properly
      let contentText = "";
      if (destination.content) {
        if (typeof destination.content === "string") {
          contentText = destination.content;
        } else if (destination.content.root?.children) {
          // Extract text from Lexical format
          contentText = destination.content.root.children
            .map((node: any) => {
              if (node.children) {
                return node.children.map((child: any) => child.text || "").join("");
              }
              return "";
            })
            .join("\n");
        }
      }

      setFormData({
        name: destination.name,
        slug: destination.slug,
        price: destination.price,
        region: destination.region,
        imageUrl: destination.imageUrl || "",
        description: destination.description || "",
        bestTime: destination.detailInfo?.bestTime || "Tháng 3 - Tháng 8",
        flightTime: destination.detailInfo?.flightTime || "",
        location: destination.detailInfo?.location || "",
        contentText: contentText,
        reasons: destination.reasons?.map(r => r.reason) || [],
        tips: destination.tips || "",
        galleryUrls: destination.gallery?.map(g => g.imageUrl || "").filter(Boolean) || [],
        featured: destination.featured || false,
        status: destination.status,
      });
    } else {
      setEditingId(null);
      setFormData({
        name: "",
        slug: "",
        price: "",
        region: "domestic",
        imageUrl: "",
        description: "",
        bestTime: "Tháng 3 - Tháng 8",
        flightTime: "",
        location: "",
        contentText: "",
        reasons: [],
        tips: "",
        galleryUrls: [],
        featured: false,
        status: "published",
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("payload-token");

      // Convert plain text to Lexical format for rich text
      const lexicalContent = {
        root: {
          type: "root",
          format: "",
          indent: 0,
          version: 1,
          children: formData.contentText.split("\n").map(line => ({
            type: "paragraph",
            format: "",
            indent: 0,
            version: 1,
            children: [
              {
                type: "text",
                text: line,
                format: 0,
                mode: "normal",
                style: "",
                detail: 0,
                version: 1
              }
            ],
            direction: "ltr"
          })),
          direction: "ltr"
        }
      };

      const submitData: any = {
        name: formData.name,
        slug: formData.slug,
        price: formData.price,
        region: formData.region,
        imageUrl: formData.imageUrl,
        description: formData.description,
        detailInfo: {
          bestTime: formData.bestTime,
          flightTime: formData.flightTime,
          location: formData.location,
        },
        content: lexicalContent,
        featured: formData.featured,
        status: formData.status,
      };

      // Chỉ thêm reasons nếu có
      if (formData.reasons && formData.reasons.length > 0) {
        submitData.reasons = formData.reasons.map(reason => ({ reason }));
      }

      // Chỉ thêm tips nếu có
      if (formData.tips && formData.tips.trim()) {
        submitData.tips = formData.tips;
      }

      // Chỉ thêm gallery nếu có
      if (formData.galleryUrls && formData.galleryUrls.length > 0) {
        submitData.gallery = formData.galleryUrls.map(url => ({ imageUrl: url }));
      }

      console.log("Submitting data:", JSON.stringify(submitData, null, 2)); // Debug log đẹp hơn

      const url = editingId ? `/api/destinations/${editingId}` : "/api/destinations";
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
      console.log("Response data:", JSON.stringify(data, null, 2)); // Debug log đẹp hơn

      if (data.success || data.doc || data.destination) {
        alert(editingId ? "Cập nhật thành công!" : "Tạo mới thành công!");
        setShowModal(false);
        fetchDestinations();
      } else {
        console.error("Server error:", data);
        alert(data.error || data.message || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error saving destination:", error);
      alert("Có lỗi xảy ra khi lưu: " + (error instanceof Error ? error.message : "Unknown error"));
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Xóa địa điểm "${name}"?`)) return;

    try {
      const token = localStorage.getItem("payload-token");
      const response = await fetch(`/api/destinations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        alert("Xóa thành công!");
        fetchDestinations();
      } else {
        alert(data.error || "Lỗi khi xóa");
      }
    } catch (error) {
      alert("Có lỗi xảy ra");
    }
  };

  const getImageUrl = (dest: Destination): string => {
    if (dest.imageUrl) return dest.imageUrl;
    if (dest.featuredImage) {
      if (typeof dest.featuredImage === "string") return `/media/${dest.featuredImage}`;
      if (dest.featuredImage.url) return dest.featuredImage.url;
    }
    return "/images/placeholder.jpg";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Quản lý Địa điểm</h2>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus size={18} />
            Thêm mới
          </button>
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải dữ liệu...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Hình</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Tên</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Khu vực</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Giá</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Trạng thái</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Thao tác</th>
              </tr>
              </thead>
              <tbody className="divide-y">
              {destinations.map((dest) => (
                <tr key={dest.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img src={getImageUrl(dest)} alt={dest.name} className="w-12 h-12 object-cover rounded" />
                  </td>
                  <td className="px-4 py-3 font-medium">{dest.name}</td>
                  <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 text-xs rounded ${dest.region === "domestic" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
                        {dest.region === "domestic" ? "Trong nước" : "Quốc tế"}
                      </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{dest.price}</td>
                  <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded ${dest.status === "published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>
                        {dest.status === "published" ? "Xuất bản" : "Nháp"}
                      </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => openModal(dest)} className="text-blue-600 hover:text-blue-800">
                        <Pencil size={16} />
                      </button>
                      <button onClick={() => handleDelete(dest.id, dest.name)} className="text-red-600 hover:text-red-800">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>

            {destinations.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg">Chưa có địa điểm nào.</p>
                <p className="mt-2">Hãy thêm địa điểm đầu tiên!</p>
              </div>
            )}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {editingId ? "Chỉnh sửa" : "Thêm mới"}
                </h3>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Thông tin cơ bản */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-3">📌 Thông tin cơ bản</h4>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold mb-1">Tên địa điểm *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleNameChange(e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="VD: Đà Nẵng"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1">Slug</label>
                        <input
                          type="text"
                          value={formData.slug}
                          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="da-nang"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold mb-1">Khu vực *</label>
                        <select
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value as any })}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="domestic">Trong nước</option>
                          <option value="international">Quốc tế</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1">Giá vé *</label>
                        <input
                          type="text"
                          required
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="Từ 1.200.000 VNĐ"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1">Mô tả ngắn</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={2}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Mô tả ngắn hiển thị ở danh sách..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1">URL ảnh đại diện</label>
                      <input
                        type="url"
                        value={formData.imageUrl}
                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="https://..."
                      />
                      {formData.imageUrl && (
                        <img src={formData.imageUrl} alt="Preview" className="mt-2 w-full h-32 object-cover rounded-lg" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Thông tin chi tiết */}
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-900 mb-3">ℹ️ Thông tin chi tiết</h4>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Thời gian lý tưởng</label>
                      <input
                        type="text"
                        value={formData.bestTime}
                        onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                        placeholder="Tháng 3 - Tháng 8"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Thời gian bay</label>
                      <input
                        type="text"
                        value={formData.flightTime}
                        onChange={(e) => setFormData({ ...formData, flightTime: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                        placeholder="1 giờ 15 phút"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Vị trí</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                        placeholder="Miền Trung Việt Nam"
                      />
                    </div>
                  </div>
                </div>

                {/* Nội dung chi tiết */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-3">📝 Nội dung chi tiết</h4>

                  <textarea
                    value={formData.contentText}
                    onChange={(e) => setFormData({ ...formData, contentText: e.target.value })}
                    rows={6}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 resize-none"
                    placeholder="Viết mô tả đầy đủ về địa điểm..."
                  />
                  <p className="text-xs text-green-700 mt-1">Hiển thị trong trang chi tiết</p>
                </div>

                {/* Lý do nên đi */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-3">⭐ Lý do nên đi</h4>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newReason}
                        onChange={(e) => setNewReason(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addReason())}
                        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                        placeholder="Nhập lý do..."
                      />
                      <button
                        type="button"
                        onClick={addReason}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    {formData.reasons.length > 0 && (
                      <ul className="space-y-2">
                        {formData.reasons.map((reason, index) => (
                          <li key={index} className="flex items-center gap-2 bg-white p-2 rounded">
                            <span className="flex-1">{reason}</span>
                            <button
                              type="button"
                              onClick={() => removeReason(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X size={16} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Mẹo du lịch */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-3">💡 Mẹo du lịch</h4>

                  <textarea
                    value={formData.tips}
                    onChange={(e) => setFormData({ ...formData, tips: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 resize-none"
                    placeholder="Các lời khuyên hữu ích cho du khách..."
                  />
                </div>

                {/* Gallery */}
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-3">🖼️ Thư viện ảnh</h4>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={newGalleryUrl}
                        onChange={(e) => setNewGalleryUrl(e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                        placeholder="Nhập URL ảnh"
                      />
                      <button
                        type="button"
                        onClick={addGalleryImage}
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    {formData.galleryUrls.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {formData.galleryUrls.map((url, index) => (
                          <div key={index} className="relative group">
                            <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-24 object-cover rounded-lg" />
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Cài đặt */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <label htmlFor="featured" className="font-semibold">⭐ Nổi bật trang chủ</label>
                  </div>

                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="published">Xuất bản</option>
                    <option value="draft">Nháp</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
                  >
                    {editingId ? "Cập nhật" : "Tạo mới"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 font-semibold"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}