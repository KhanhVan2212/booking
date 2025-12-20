"use client";

import { useState, useEffect } from "react";

interface Destination {
  id: string;
  name: string;
  slug: string;
  price: string;
  description?: string;
  status: "draft" | "published";
  featured: boolean;
  bestTime?: string;
  flightTime?: string;
  featuredImage?: any;
  createdAt: string;
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingDest, setEditingDest] = useState<Destination | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    price: "",
    description: "",
    bestTime: "Tháng 3 - Tháng 8",
    flightTime: "1 giờ 15 phút",
    status: "draft" as "draft" | "published",
    featured: false,
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("payload-token");

      const response = await fetch("/api/payload/api/destinations?limit=100", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      const data = await response.json();

      if (data.docs) {
        setDestinations(data.docs);
      }
    } catch (err) {
      setError("Không thể tải danh sách destinations");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const token = localStorage.getItem("payload-token");
      const url = editingDest
        ? `/api/payload/api/destinations/${editingDest.id}`
        : "/api/payload/api/destinations";

      const response = await fetch(url, {
        method: editingDest ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(false);
        setEditingDest(null);
        setFormData({
          name: "",
          slug: "",
          price: "",
          description: "",
          bestTime: "Tháng 3 - Tháng 8",
          flightTime: "1 giờ 15 phút",
          status: "draft",
          featured: false,
        });
        fetchDestinations();
      } else {
        setError(data.message || "Có lỗi xảy ra");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi lưu destination");
      console.error("Submit error:", err);
    }
  };

  const handleEdit = (dest: Destination) => {
    setEditingDest(dest);
    setFormData({
      name: dest.name,
      slug: dest.slug,
      price: dest.price,
      description: dest.description || "",
      bestTime: dest.bestTime || "Tháng 3 - Tháng 8",
      flightTime: dest.flightTime || "1 giờ 15 phút",
      status: dest.status,
      featured: dest.featured,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa destination này?")) return;

    try {
      const token = localStorage.getItem("payload-token");
      const response = await fetch(`/api/payload/api/destinations/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      if (response.ok) {
        fetchDestinations();
      } else {
        setError("Không thể xóa destination");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi xóa");
      console.error("Delete error:", err);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Quản lý Destinations</h2>
        <button
          onClick={() => {
            setEditingDest(null);
            setFormData({
              name: "",
              slug: "",
              price: "",
              description: "",
              bestTime: "Tháng 3 - Tháng 8",
              flightTime: "1 giờ 15 phút",
              status: "draft",
              featured: false,
            });
            setShowModal(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Thêm Destination
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
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
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
              Thao tác
            </th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {destinations.map((dest) => (
            <tr key={dest.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900">{dest.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dest.slug}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {dest.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      dest.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {dest.status === "published" ? "Xuất bản" : "Nháp"}
                  </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {dest.featured ? (
                  <span className="text-yellow-600">⭐</span>
                ) : (
                  <span className="text-gray-300">☆</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleEdit(dest)}
                  className="text-blue-600 hover:text-blue-900 mr-3"
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(dest.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        {destinations.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Chưa có destination nào. Hãy thêm mới!
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">
                {editingDest ? "Sửa Destination" : "Thêm Destination mới"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Tên điểm đến *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      const name = e.target.value;
                      setFormData({
                        ...formData,
                        name,
                        slug: generateSlug(name),
                      });
                    }}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="VD: Đà Nẵng"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Slug (URL) *
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="VD: da-nang"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Giá vé *
                  </label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="VD: 1.200.000 VNĐ"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Mô tả ngắn
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Mô tả ngắn về điểm đến..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Thời gian lý tưởng
                    </label>
                    <input
                      type="text"
                      value={formData.bestTime}
                      onChange={(e) =>
                        setFormData({ ...formData, bestTime: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Thời gian bay
                    </label>
                    <input
                      type="text"
                      value={formData.flightTime}
                      onChange={(e) =>
                        setFormData({ ...formData, flightTime: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Trạng thái
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as "draft" | "published",
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="draft">Nháp</option>
                    <option value="published">Xuất bản</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="mr-2"
                  />
                  <label htmlFor="featured" className="text-sm font-medium">
                    Hiển thị ở trang chủ (Featured)
                  </label>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEditingDest(null);
                    }}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {editingDest ? "Cập nhật" : "Thêm mới"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}