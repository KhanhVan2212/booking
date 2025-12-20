"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UsersPage from "./UsersPage";
import PagesPage from "./PagesPage";
import PostsPage from "./PostsPage";
import MediaPage from "./MediaPage";

type Tab = "dashboard" | "users" | "pages" | "posts" | "media";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const userStr = localStorage.getItem("payload-user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

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
          <nav className="flex border-b">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "dashboard"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "users"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab("pages")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "pages"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Pages
            </button>
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "posts"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Posts
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "media"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Media
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === "dashboard" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Total Users</div>
                  <div className="text-2xl font-bold text-blue-600">-</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Total Pages</div>
                  <div className="text-2xl font-bold text-green-600">-</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Total Posts</div>
                  <div className="text-2xl font-bold text-purple-600">-</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Total Media</div>
                  <div className="text-2xl font-bold text-orange-600">-</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "users" && <UsersPage />}
          {activeTab === "pages" && <PagesPage />}
          {activeTab === "posts" && <PostsPage />}
          {activeTab === "media" && <MediaPage />}
        </div>
      </div>
    </div>
  );
}

