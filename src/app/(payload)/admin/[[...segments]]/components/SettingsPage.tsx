"use client";

import { useState, useEffect } from "react";

import { toast } from "sonner";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    hotline: "",
    hotlineDesc: "",
    email: "",
    emailDesc: "",
    headquarters: "",
    office: "",
  });
  const [loadingSettings, setLoadingSettings] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoadingSettings(true);
      const response = await fetch("/api/globals/settings");
      const data = await response.json();
      if (data && !data.errors) {
        setSettings({
          hotline: data.hotline || "",
          hotlineDesc: data.hotlineDesc || "",
          email: data.email || "",
          emailDesc: data.emailDesc || "",
          headquarters: data.headquarters || "",
          office: data.office || "",
        });
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
      toast.error("Không thể tải cài đặt");
    } finally {
      setLoadingSettings(false);
    }
  };

  const saveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("payload-token");
      const response = await fetch("/api/globals/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });
      const data = await response.json();
      console.log("Save Settings Response:", data); // Debug log

      if (data && (data.id || data.hotline)) {
        toast.success("Lưu cài đặt thành công!");
      } else {
        toast.error("Lỗi khi lưu cài đặt: " + (data.error || "Unknown"));
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra");
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold">Cài đặt chung</h2>
      {loadingSettings ? (
        <p>Đang tải...</p>
      ) : (
        <form onSubmit={saveSettings} className="max-w-3xl space-y-6">
          {/* Hotline */}
          <div className="rounded-lg bg-red-50 p-4">
            <h3 className="mb-4 font-bold text-red-900">📞 Hotline</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  value={settings.hotline}
                  onChange={(e) =>
                    setSettings({ ...settings, hotline: e.target.value })
                  }
                  className="w-full rounded border px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Mô tả (VD: Hỗ trợ 24/7)
                </label>
                <input
                  type="text"
                  value={settings.hotlineDesc}
                  onChange={(e) =>
                    setSettings({ ...settings, hotlineDesc: e.target.value })
                  }
                  className="w-full rounded border px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="mb-4 font-bold text-blue-900">✉️ Email</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Địa chỉ Email
                </label>
                <input
                  type="text"
                  value={settings.email}
                  onChange={(e) =>
                    setSettings({ ...settings, email: e.target.value })
                  }
                  className="w-full rounded border px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Mô tả</label>
                <input
                  type="text"
                  value={settings.emailDesc}
                  onChange={(e) =>
                    setSettings({ ...settings, emailDesc: e.target.value })
                  }
                  className="w-full rounded border px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="mb-4 font-bold text-gray-900">📍 Địa chỉ</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Trụ sở chính
                </label>
                <textarea
                  rows={2}
                  value={settings.headquarters}
                  onChange={(e) =>
                    setSettings({ ...settings, headquarters: e.target.value })
                  }
                  className="w-full rounded border px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Văn phòng giao dịch
                </label>
                <textarea
                  rows={2}
                  value={settings.office}
                  onChange={(e) =>
                    setSettings({ ...settings, office: e.target.value })
                  }
                  className="w-full rounded border px-3 py-2"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
          >
            Lưu thay đổi
          </button>
        </form>
      )}
    </div>
  );
}
