// app/admin/components/BlogsPage.tsx
"use client";

import { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, X } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl?: string;
  featuredImage?: any;
  excerpt?: string;
  content: any;
  author: string;
  readTime: string;
  tags?: Array<{ tag: string }>;
  featured: boolean;
  status: "published" | "draft";
}

interface FormData {
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  contentText: string;
  author: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  status: "published" | "draft";
}

const CATEGORIES = [
  { label: "Địa điểm", value: "dia-diem" },
  { label: "Kinh nghiệm", value: "kinh-nghiem" },
  { label: "Ẩm thực", value: "am-thuc" },
  { label: "Cẩm nang", value: "cam-nang" },
  { label: "Tin tức", value: "tin-tuc" },
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newTag, setNewTag] = useState("");
  const [formData, setFormData] = useState<FormData>({
    title: "",
    slug: "",
    category: "kinh-nghiem",
    imageUrl: "",
    excerpt: "",
    contentText: "",
    author: "Admin",
    readTime: "5 phút",
    tags: [],
    featured: false,
    status: "published",
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/blogs?includeAll=true");
      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      alert("Không thể tải danh sách blog");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (title: string) => {
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };

  const addTag = () => {
    if (newTag.trim()) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()]
      });
      setNewTag("");
    }
  };

  const removeTag = (index: number) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== index)
    });
  };

  const openModal = (blog?: Blog) => {
    if (blog) {
      setEditingId(blog.id);

      let contentText = "";
      if (blog.content) {
        if (typeof blog.content === "string") {
          contentText = blog.content;
        } else if (blog.content.root?.children) {
          contentText = blog.content.root.children
            .map((node: any) => {
              if (node.children) {
                return node.children.map((child: any) => child.text || "").join("");
              }
              return "";
            })
            .join("\n\n");
        }
      }

      setFormData({
        title: blog.title,
        slug: blog.slug,
        category: blog.category,
        imageUrl: blog.imageUrl || "",
        excerpt: blog.excerpt || "",
        contentText: contentText,
        author: blog.author,
        readTime: blog.readTime,
        tags: blog.tags?.map(t => t.tag) || [],
        featured: blog.featured,
        status: blog.status,
      });
    } else {
      setEditingId(null);
      setFormData({
        title: "",
        slug: "",
        category: "kinh-nghiem",
        imageUrl: "",
        excerpt: "",
        contentText: "",
        author: "Admin",
        readTime: "5 phút",
        tags: [],
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

      const lexicalContent = {
        root: {
          type: "root",
          format: "",
          indent: 0,
          version: 1,
          children: formData.contentText.split("\n\n").map(para => ({
            type: "paragraph",
            format: "",
            indent: 0,
            version: 1,
            children: [
              {
                type: "text",
                text: para,
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
        title: formData.title,
        slug: formData.slug,
        category: formData.category,
        imageUrl: formData.imageUrl,
        excerpt: formData.excerpt,
        content: lexicalContent,
        author: formData.author,
        readTime: formData.readTime,
        featured: formData.featured,
        status: formData.status,
      };

      if (formData.tags && formData.tags.length > 0) {
        submitData.tags = formData.tags.map(tag => ({ tag }));
      }

      const url = editingId ? `/api/blogs/${editingId}` : "/api/blogs";
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

      if (data.success || data.blog) {
        alert(editingId ? "Cập nhật thành công!" : "Tạo mới thành công!");
        setShowModal(false);
        fetchBlogs();
      } else {
        alert(data.error || data.message || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Có lỗi xảy ra khi lưu");
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Xóa bài viết "${title}"?`)) return;

    try {
      const token = localStorage.getItem("payload-token");
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        alert("Xóa thành công!");
        fetchBlogs();
      } else {
        alert(data.error || "Lỗi khi xóa");
      }
    } catch (error) {
      alert("Có lỗi xảy ra");
    }
  };

  const getImageUrl = (blog: Blog): string => {
    if (blog.imageUrl) return blog.imageUrl;
    if (blog.featuredImage) {
      if (typeof blog.featuredImage === "string") return `/media/${blog.featuredImage}`;
      if (blog.featuredImage.url) return blog.featuredImage.url;
    }
    return "/images/placeholder.jpg";
  };

  const getCategoryLabel = (value: string) => {
    return CATEGORIES.find(c => c.value === value)?.label || value;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Quản lý Blog</h2>
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Tiêu đề</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Danh mục</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Tác giả</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Trạng thái</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Thao tác</th>
              </tr>
              </thead>
              <tbody className="divide-y">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img src={getImageUrl(blog)} alt={blog.title} className="w-16 h-12 object-cover rounded" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{blog.title}</div>
                    <div className="text-xs text-gray-500">{blog.readTime}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-800">
                      {getCategoryLabel(blog.category)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{blog.author}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded ${blog.status === "published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>
                      {blog.status === "published" ? "Xuất bản" : "Nháp"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => openModal(blog)} className="text-blue-600 hover:text-blue-800">
                        <Pencil size={16} />
                      </button>
                      <button onClick={() => handleDelete(blog.id, blog.title)} className="text-red-600 hover:text-red-800">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>

            {blogs.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg">Chưa có bài viết nào.</p>
                <p className="mt-2">Hãy thêm bài viết đầu tiên!</p>
              </div>
            )}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {editingId ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}
                </h3>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Thông tin cơ bản */}
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <h4 className="font-bold text-blue-900 mb-3">📝 Thông tin cơ bản</h4>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Tiêu đề *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="VD: 10 Địa điểm check-in không thể bỏ qua..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Slug</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="10-dia-diem-check-in..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Danh mục *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        {CATEGORIES.map(cat => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Thời gian đọc</label>
                      <input
                        type="text"
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="5 phút"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Tác giả</label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Admin"
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

                  <div>
                    <label className="block text-sm font-semibold mb-1">Mô tả ngắn</label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={2}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Mô tả ngắn hiển thị ở danh sách..."
                    />
                  </div>
                </div>

                {/* Nội dung */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-3">📄 Nội dung bài viết *</h4>
                  <textarea
                    required
                    value={formData.contentText}
                    onChange={(e) => setFormData({ ...formData, contentText: e.target.value })}
                    rows={12}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 resize-none font-mono text-sm"
                    placeholder="Viết nội dung bài viết đầy đủ...

Mỗi đoạn cách nhau bởi một dòng trống."
                  />
                </div>

                {/* Tags */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-3">🏷️ Tags</h4>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="Nhập tag..."
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Settings */}
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
                    type="submit"
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
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}