"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DestinationsPage from "./DestinationsPage"; // Chỉ import component cần thiết
import SettingsPage from "./SettingsPage";
import Image from "next/image";

type Tab = "dashboard" | "destinations" | "settings";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    destinations: 0,
  });
  const router = useRouter();

  useEffect(() => {
    const userStr = localStorage.getItem("payload-user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }

    // Fetch stats cho destinations
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/destinations");
      const data = await response.json();
      if (data.success) {
        setStats({ destinations: data.totalDocs });
      }
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
      <header className="border-b bg-white py-2 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
            <div className="flex items-center gap-2 sm:gap-4">
              {user && (
                <span className="hidden text-sm text-gray-600 sm:block">
                  {user.email}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="rounded border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 hover:text-red-700 sm:px-4 sm:py-2 sm:text-sm"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Tabs - Chỉ giữ Dashboard và Destinations */}
        <div className="mb-6 rounded-lg bg-white shadow">
          <nav className="flex overflow-x-auto border-b">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`whitespace-nowrap px-6 py-3 text-sm font-medium ${
                activeTab === "dashboard"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Bảng điều khiển
            </button>
            <button
              onClick={() => setActiveTab("destinations")}
              className={`whitespace-nowrap px-6 py-3 text-sm font-medium ${
                activeTab === "destinations"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Địa điểm
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`whitespace-nowrap px-6 py-3 text-sm font-medium ${
                activeTab === "settings"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Cài đặt chung
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="rounded-lg bg-white shadow">
          {activeTab === "dashboard" && (
            <div className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Tổng quan</h2>

              {/* Thống kê */}
              <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                  <div className="text-sm font-medium text-red-600">
                    Địa điểm du lịch
                  </div>
                  <div className="mt-2 text-3xl font-bold text-gray-900">
                    {stats.destinations || "0"}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Hành động nhanh */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setActiveTab("destinations")}
                      className="flex flex-col items-center justify-center gap-2 rounded-lg bg-blue-50 p-4 text-blue-700 transition hover:bg-blue-100"
                    >
                      <span className="font-semibold">Quản lý Địa điểm</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("settings")}
                      className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-50 p-4 text-gray-700 transition hover:bg-gray-100"
                    >
                      <span className="font-semibold">Cài đặt chung</span>
                    </button>
                  </div>
                </div>

                {/* Thông tin hệ thống */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    ℹ️ Thông tin hệ thống
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="text-gray-600">Database</span>
                      <span className="font-medium text-green-600">
                        MongoDB Atlas
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="text-gray-600">Storage</span>
                      <span className="font-medium text-orange-600">
                        Cloudinary (10GB Free)
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="text-gray-600">CMS Version</span>
                      <span className="font-medium text-blue-600">
                        Payload 3.0 + Next.js 15
                      </span>
                    </div>
                    <div className="rounded bg-blue-50 p-3 text-sm text-blue-800">
                      ☁️ Mọi thay đổi được lưu trữ an toàn trên cloud
                    </div>
                  </div>
                </div>

                {/* Hướng dẫn sử dụng */}
                <div className="col-span-1 rounded-xl border bg-white p-6 shadow-sm lg:col-span-2">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    📚 Hướng dẫn sử dụng
                  </h3>
                  <div className="prose max-w-none text-gray-600">
                    <ul className="list-disc space-y-2 pl-5">
                      <li>
                        <strong>Quản lý Địa điểm:</strong> Thêm, sửa, xóa các
                        tour du lịch. Upload hình ảnh trực tiếp từ máy tính.
                      </li>
                      <li>
                        <strong>Cài đặt chung:</strong> Thay đổi thông tin công
                        ty như Hotline, Email, Địa chỉ văn phòng.
                      </li>
                      <li>
                        <strong>Media:</strong> Quản lý tất cả hình ảnh đã
                        upload lên hệ thống.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "destinations" && <DestinationsPage />}

          {activeTab === "settings" && <SettingsPage />}
        </div>
      </div>
    </div>
  );
}
