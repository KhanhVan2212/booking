// app/admin/components/AdminDashboard.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DestinationsPage from "./DestinationsPage";
import BlogsPage from "./BlogsPage";

type Tab = "dashboard" | "destinations" | "blogs";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    destinations: 0,
    blogs: 0,
  });
  const router = useRouter();

  useEffect(() => {
    const userStr = localStorage.getItem("payload-user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }

    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [destResponse, blogsResponse] = await Promise.all([
        fetch("/api/destinations"),
        fetch("/api/blogs")
      ]);

      const destData = await destResponse.json();
      const blogsData = await blogsResponse.json();

      setStats({
        destinations: destData.totalDocs || 0,
        blogs: blogsData.totalDocs || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("payload-token");
    localStorage.removeItem("payload-user");
    router.push("/admin");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">Hà Anh CMS Admin</h1>
            <div className="flex items-center gap-4">
              {user && (
                <span className="text-sm text-gray-600">
                  {user.email}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <nav className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "dashboard"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("destinations")}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "destinations"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Destinations
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "blogs"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Blogs
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === "dashboard" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-red-600 mb-1">Total Destinations</div>
                      <div className="text-3xl font-bold text-red-700">
                        {stats.destinations}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-purple-600 mb-1">Total Blogs</div>
                      <div className="text-3xl font-bold text-purple-700">
                        {stats.blogs}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-blue-600 mb-1">Total Content</div>
                      <div className="text-3xl font-bold text-blue-700">
                        {stats.destinations + stats.blogs}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setActiveTab("destinations")}
                    className="p-4 bg-white border-2 border-red-200 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-left"
                  >
                    <div className="font-semibold text-red-700 mb-1">Manage Destinations</div>
                    <div className="text-sm text-gray-600">Add, edit, or delete travel destinations</div>
                  </button>

                  <button
                    onClick={() => setActiveTab("blogs")}
                    className="p-4 bg-white border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition text-left"
                  >
                    <div className="font-semibold text-purple-700 mb-1">Manage Blogs</div>
                    <div className="text-sm text-gray-600">Create and publish blog posts</div>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">System Info</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Logged in as:</span>
                    <span className="font-medium">{user?.email || "N/A"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CMS Version:</span>
                    <span className="font-medium">1.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated:</span>
                    <span className="font-medium">{new Date().toLocaleDateString("vi-VN")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "destinations" && <DestinationsPage />}
          {activeTab === "blogs" && <BlogsPage />}
        </div>
      </div>
    </div>
  );
}