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
              <h2 className="mb-4 text-2xl font-bold">Bảng điều khiển</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-red-50 p-4">
                  <div className="text-sm text-gray-600">
                    Tổng số địa điểm
                  </div>
                  <div className="text-2xl font-bold text-red-600">
                    {stats.destinations || "-"}
                  </div>
                </div>
                {/* Bạn có thể thêm các card thống kê khác ở đây nếu cần */}
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
