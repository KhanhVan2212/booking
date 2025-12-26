"use client";

import { useState, useEffect } from "react";
import {
  Pencil,
  Trash2,
  Plus,
  X,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import { toast } from "sonner";

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
  departures?: Array<{
    airline: string;
    route: string;
    stop: string;
    country: string;
    from?: string;
  }>;
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
  departures: Array<{
    airline: string;
    route: string;
    stop: string;
    country: string;
  }>;
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);
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
    departures: [],
  });

  const [newDeparture, setNewDeparture] = useState({
    airline: "",
    route: "",
    stop: "",
    country: "",
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
      toast.error("Không thể tải danh sách địa điểm");
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);
      uploadFormData.append("alt", formData.name || file.name);

      const response = await fetch("/api/upload-cloudinary", {
        method: "POST",
        body: uploadFormData,
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ ...formData, imageUrl: data.doc.url });
        toast.success("Upload ảnh thành công!");
      } else {
        toast.error(data.error || "Upload thất bại");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Có lỗi xảy ra khi upload ảnh");
    } finally {
      setUploading(false);
    }
  };

  const handleGalleryFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (files.length > 5) {
      toast.error("Chỉ được chọn tối đa 5 ảnh một lần!");
      return;
    }

    try {
      setGalleryUploading(true);
      const newUrls: string[] = [];
      let successCount = 0;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const uploadFormData = new FormData();
        uploadFormData.append("file", file);
        uploadFormData.append("alt", formData.name || file.name);

        try {
          const response = await fetch("/api/upload-cloudinary", {
            method: "POST",
            body: uploadFormData,
          });

          const data = await response.json();

          if (data.success) {
            newUrls.push(data.doc.url);
            successCount++;
          }
        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error);
        }
      }

      if (newUrls.length > 0) {
        setFormData((prev) => ({
          ...prev,
          galleryUrls: [...prev.galleryUrls, ...newUrls],
        }));
        toast.success(
          `Đã upload thành công ${successCount}/${files.length} ảnh!`,
        );
      } else {
        toast.error("Không upload được ảnh nào");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Có lỗi xảy ra khi upload ảnh");
    } finally {
      setGalleryUploading(false);
      // Reset input
      e.target.value = "";
    }
  };

  const addGalleryImage = () => {
    if (newGalleryUrl.trim()) {
      setFormData({
        ...formData,
        galleryUrls: [...formData.galleryUrls, newGalleryUrl.trim()],
      });
      setNewGalleryUrl("");
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData({
      ...formData,
      galleryUrls: formData.galleryUrls.filter((_, i) => i !== index),
    });
  };

  const addReason = () => {
    if (newReason.trim()) {
      setFormData({
        ...formData,
        reasons: [...formData.reasons, newReason.trim()],
      });
      setNewReason("");
    }
  };

  const removeReason = (index: number) => {
    setFormData({
      ...formData,
      reasons: formData.reasons.filter((_, i) => i !== index),
    });
  };

  const addDeparture = () => {
    if (newDeparture.airline && newDeparture.stop) {
      setFormData({
        ...formData,
        departures: [...formData.departures, { ...newDeparture }],
      });
      setNewDeparture({ airline: "", route: "", stop: "", country: "" });
    }
  };

  const removeDeparture = (index: number) => {
    setFormData({
      ...formData,
      departures: formData.departures.filter((_, i) => i !== index),
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
                return node.children
                  .map((child: any) => child.text || "")
                  .join("");
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
        reasons: destination.reasons?.map((r) => r.reason) || [],
        tips: destination.tips || "",
        galleryUrls:
          destination.gallery?.map((g) => g.imageUrl || "").filter(Boolean) ||
          [],
        featured: destination.featured || false,
        status: destination.status,
        departures: destination.departures || [],
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
        departures: [],
      });
      setNewDeparture({ airline: "", route: "", stop: "", country: "" });
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
          children: formData.contentText.split("\n").map((line) => ({
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
                version: 1,
              },
            ],
            direction: "ltr",
          })),
          direction: "ltr",
        },
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
        submitData.reasons = formData.reasons.map((reason) => ({ reason }));
      }

      // Chỉ thêm tips nếu có
      if (formData.tips && formData.tips.trim()) {
        submitData.tips = formData.tips;
      }

      // Chỉ thêm gallery nếu có
      if (formData.galleryUrls && formData.galleryUrls.length > 0) {
        submitData.gallery = formData.galleryUrls.map((url) => ({
          imageUrl: url,
        }));
      }

      // Add departures
      if (formData.departures && formData.departures.length > 0) {
        submitData.departures = formData.departures;
      }

      console.log("Submitting data:", JSON.stringify(submitData, null, 2)); // Debug log đẹp hơn

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
      console.log("Response data:", JSON.stringify(data, null, 2)); // Debug log đẹp hơn

      if (data.success || data.doc || data.destination) {
        toast.success(
          editingId ? "Cập nhật thành công!" : "Tạo mới thành công!",
        );
        setShowModal(false);
        fetchDestinations();
      } else {
        console.error("Server error:", data);
        toast.error(data.error || data.message || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error saving destination:", error);
      toast.error(
        "Có lỗi xảy ra khi lưu: " +
          (error instanceof Error ? error.message : "Unknown error"),
      );
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
        toast.success("Xóa thành công!");
        fetchDestinations();
      } else {
        toast.error(data.error || "Lỗi khi xóa");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra");
    }
  };

  const getImageUrl = (dest: Destination): string => {
    if (dest.imageUrl) return dest.imageUrl;
    if (dest.featuredImage) {
      if (typeof dest.featuredImage === "string")
        return `/media/${dest.featuredImage}`;
      if (dest.featuredImage.url) return dest.featuredImage.url;
    }
    return "/images/placeholder.jpg";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold text-gray-900">Quản lý Địa điểm</h2>
          <button
            onClick={() => openModal()}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 sm:w-auto"
          >
            <Plus size={18} />
            Thêm mới
          </button>
        </div>

        {loading ? (
          <div className="rounded-lg bg-white p-12 text-center shadow">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600">Đang tải dữ liệu...</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Hình
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Tên
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Khu vực
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Giá
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Trạng thái
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {destinations.map((dest) => (
                    <tr key={dest.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <img
                          src={getImageUrl(dest)}
                          alt={dest.name}
                          className="h-12 w-12 rounded object-cover"
                        />
                      </td>
                      <td className="px-4 py-3 font-medium">{dest.name}</td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`rounded px-2 py-1 text-xs ${dest.region === "domestic" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}
                        >
                          {dest.region === "domestic"
                            ? "Trong nước"
                            : "Quốc tế"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{dest.price}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded px-2 py-1 text-xs ${dest.status === "published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}
                        >
                          {dest.status === "published" ? "Xuất bản" : "Nháp"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openModal(dest)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(dest.id, dest.name)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {destinations.length === 0 && (
              <div className="py-16 text-center text-gray-500">
                <p className="text-lg">Chưa có địa điểm nào.</p>
                <p className="mt-2">Hãy thêm địa điểm đầu tiên!</p>
              </div>
            )}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white">
              <div className="sticky top-0 flex items-center justify-between border-b bg-white px-6 py-4">
                <h3 className="text-xl font-bold">
                  {editingId ? "Chỉnh sửa" : "Thêm mới"}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6 p-6">
                {/* Thông tin cơ bản */}
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="mb-3 font-bold text-blue-900">
                    📌 Thông tin cơ bản
                  </h4>

                  <div className="space-y-3">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-semibold">
                          Tên địa điểm *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleNameChange(e.target.value)}
                          className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                          placeholder="VD: Đà Nẵng"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-semibold">
                          Slug
                        </label>
                        <input
                          type="text"
                          value={formData.slug}
                          onChange={(e) =>
                            setFormData({ ...formData, slug: e.target.value })
                          }
                          className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                          placeholder="da-nang"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-semibold">
                          Khu vực *
                        </label>
                        <select
                          value={formData.region}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              region: e.target.value as any,
                            })
                          }
                          className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="domestic">Trong nước</option>
                          <option value="international">Quốc tế</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-semibold">
                          Giá vé *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.price}
                          onChange={(e) =>
                            setFormData({ ...formData, price: e.target.value })
                          }
                          className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                          placeholder="Từ 1.200.000 VNĐ"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-semibold">
                        Mô tả ngắn
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        rows={2}
                        className="w-full resize-none rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="Mô tả ngắn hiển thị ở danh sách..."
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-semibold">
                        URL ảnh đại diện
                      </label>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                          <input
                            type="url"
                            value={formData.imageUrl}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                imageUrl: e.target.value,
                              })
                            }
                            className="flex-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="https://..."
                          />
                          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <Upload size={18} />
                            <span className="hidden sm:inline">Upload</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleFileUpload}
                              disabled={uploading}
                            />
                          </label>
                        </div>

                        {uploading && (
                          <div className="flex items-center gap-2 text-sm text-blue-600">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                            Đang upload ảnh...
                          </div>
                        )}

                        {formData.imageUrl ? (
                          <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-gray-50">
                            <img
                              src={formData.imageUrl}
                              alt="Preview"
                              className="h-full w-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, imageUrl: "" })
                              }
                              className="absolute right-2 top-2 rounded-full bg-white p-1 text-red-500 shadow hover:bg-red-50"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex aspect-video w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-gray-400">
                            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                              <ImageIcon size={24} />
                            </div>
                            <p className="text-sm">Chưa có ảnh</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thông tin chi tiết */}
                <div className="rounded-lg bg-orange-50 p-4">
                  <h4 className="mb-3 font-bold text-orange-900">
                    ℹ️ Thông tin chi tiết
                  </h4>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-sm font-semibold">
                        Thời gian lý tưởng
                      </label>
                      <input
                        type="text"
                        value={formData.bestTime}
                        onChange={(e) =>
                          setFormData({ ...formData, bestTime: e.target.value })
                        }
                        className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500"
                        placeholder="Tháng 3 - Tháng 8"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold">
                        Thời gian bay
                      </label>
                      <input
                        type="text"
                        value={formData.flightTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            flightTime: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500"
                        placeholder="1 giờ 15 phút"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold">
                        Vị trí
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500"
                        placeholder="Miền Trung Việt Nam"
                      />
                    </div>
                  </div>
                </div>

                {/* Nội dung chi tiết */}
                <div className="rounded-lg bg-green-50 p-4">
                  <h4 className="mb-3 font-bold text-green-900">
                    📝 Nội dung chi tiết
                  </h4>

                  <textarea
                    value={formData.contentText}
                    onChange={(e) =>
                      setFormData({ ...formData, contentText: e.target.value })
                    }
                    rows={6}
                    className="w-full resize-none rounded-lg border px-3 py-2 focus:ring-2 focus:ring-green-500"
                    placeholder="Viết mô tả đầy đủ về địa điểm..."
                  />
                  <p className="mt-1 text-xs text-green-700">
                    Hiển thị trong trang chi tiết
                  </p>
                </div>

                {/* Lý do nên đi */}
                <div className="rounded-lg bg-purple-50 p-4">
                  <h4 className="mb-3 font-bold text-purple-900">
                    ⭐ Lý do nên đi
                  </h4>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newReason}
                        onChange={(e) => setNewReason(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && (e.preventDefault(), addReason())
                        }
                        className="flex-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-purple-500"
                        placeholder="Nhập lý do..."
                      />
                      <button
                        type="button"
                        onClick={addReason}
                        className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    {formData.reasons.length > 0 && (
                      <ul className="space-y-2">
                        {formData.reasons.map((reason, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 rounded bg-white p-2"
                          >
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
                <div className="rounded-lg bg-yellow-50 p-4">
                  <h4 className="mb-3 font-bold text-yellow-900">
                    💡 Mẹo du lịch
                  </h4>

                  <textarea
                    value={formData.tips}
                    onChange={(e) =>
                      setFormData({ ...formData, tips: e.target.value })
                    }
                    rows={4}
                    className="w-full resize-none rounded-lg border px-3 py-2 focus:ring-2 focus:ring-yellow-500"
                    placeholder="Các lời khuyên hữu ích cho du khách..."
                  />
                </div>

                {/* Flight Board */}
                <div className="rounded-lg bg-cyan-50 p-4">
                  <h4 className="mb-3 font-bold text-cyan-900">
                    ✈️ Bảng chuyến bay (Flight Board)
                  </h4>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-5">
                      <input
                        type="text"
                        value={newDeparture.airline}
                        onChange={(e) =>
                          setNewDeparture({
                            ...newDeparture,
                            airline: e.target.value,
                          })
                        }
                        className="rounded-lg border px-3 py-2 focus:ring-2 focus:ring-cyan-500"
                        placeholder="Hãng bay (VN Airline)"
                      />
                      <input
                        type="text"
                        value={newDeparture.route}
                        onChange={(e) =>
                          setNewDeparture({
                            ...newDeparture,
                            route: e.target.value,
                          })
                        }
                        className="rounded-lg border px-3 py-2 focus:ring-2 focus:ring-cyan-500"
                        placeholder="Hành trình (HN -> HCM)"
                      />
                      <input
                        type="text"
                        value={newDeparture.stop}
                        onChange={(e) =>
                          setNewDeparture({
                            ...newDeparture,
                            stop: e.target.value,
                          })
                        }
                        className="rounded-lg border px-3 py-2 focus:ring-2 focus:ring-cyan-500"
                        placeholder="Điểm đến (TP.HCM)"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newDeparture.country}
                          onChange={(e) =>
                            setNewDeparture({
                              ...newDeparture,
                              country: e.target.value,
                            })
                          }
                          className="flex-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-cyan-500"
                          placeholder="Quốc gia"
                        />
                        <button
                          type="button"
                          onClick={addDeparture}
                          className="rounded-lg bg-cyan-600 px-3 py-2 text-white hover:bg-cyan-700"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>

                    {formData.departures.length > 0 && (
                      <div className="overflow-hidden rounded-lg border bg-white">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-3 py-2 text-left">Hãng bay</th>
                              <th className="px-3 py-2 text-left">
                                Hành trình
                              </th>
                              <th className="px-3 py-2 text-left">Điểm đến</th>
                              <th className="px-3 py-2 text-left">Quốc gia</th>
                              <th className="w-10 px-3 py-2"></th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {formData.departures.map((dep, index) => (
                              <tr key={index}>
                                <td className="px-3 py-2">{dep.airline}</td>
                                <td className="px-3 py-2">{dep.route}</td>
                                <td className="px-3 py-2">{dep.stop}</td>
                                <td className="px-3 py-2">{dep.country}</td>
                                <td className="px-3 py-2">
                                  <button
                                    type="button"
                                    onClick={() => removeDeparture(index)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <X size={14} />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>

                {/* Gallery */}
                <div className="rounded-lg bg-pink-50 p-4">
                  <h4 className="mb-3 font-bold text-pink-900">
                    🖼️ Thư viện ảnh
                  </h4>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={newGalleryUrl}
                        onChange={(e) => setNewGalleryUrl(e.target.value)}
                        className="flex-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-pink-500"
                        placeholder="Nhập URL ảnh"
                      />
                      <button
                        type="button"
                        onClick={addGalleryImage}
                        className="rounded-lg bg-pink-600 px-4 py-2 text-white hover:bg-pink-700"
                      >
                        <Plus size={18} />
                      </button>
                      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
                        <Upload size={18} />
                        <span className="hidden sm:inline">Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handleGalleryFileUpload}
                          disabled={galleryUploading}
                        />
                      </label>
                    </div>

                    {galleryUploading && (
                      <div className="flex items-center gap-2 text-sm text-pink-600">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-pink-600 border-t-transparent"></div>
                        Đang upload ảnh vào thư viện...
                      </div>
                    )}

                    {formData.galleryUrls.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {formData.galleryUrls.map((url, index) => (
                          <div key={index} className="group relative">
                            <img
                              src={url}
                              alt={`Gallery ${index + 1}`}
                              className="h-24 w-full rounded-lg object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(index)}
                              className="absolute right-1 top-1 rounded-full bg-red-500 p-1 text-white opacity-0 transition group-hover:opacity-100"
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
                      onChange={(e) =>
                        setFormData({ ...formData, featured: e.target.checked })
                      }
                      className="h-5 w-5 rounded text-blue-600"
                    />
                    <label htmlFor="featured" className="font-semibold">
                      ⭐ Nổi bật trang chủ
                    </label>
                  </div>

                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as any,
                      })
                    }
                    className="rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="published">Xuất bản</option>
                    <option value="draft">Nháp</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    {editingId ? "Cập nhật" : "Tạo mới"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="rounded-lg bg-gray-200 px-6 py-3 font-semibold hover:bg-gray-300"
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
