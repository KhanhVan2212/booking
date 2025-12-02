// app/history/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaPlane,
  FaClock,
  FaTicket,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCircleCheck,
  FaMagnifyingGlass,
  FaPassport,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa6";
import Image from "next/image";
import StatusBadge from "./components/StatusBadge";
import BookingCard from "./components/BookingCard";

// --- MOCK DATA ---
const myBookings = [
  {
    id: "XJF892",
    status: "upcoming",
    from: "Hà Nội (HAN)",
    to: "TP. Hồ Chí Minh (SGN)",
    date: "24 Th10, 2023",
    time: "06:00",
    airline: "Vietnam Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vietnam_Airlines_Logo_%282002-2015%29.svg/2560px-Vietnam_Airlines_Logo_%282002-2015%29.svg.png",
    price: "1.850.000đ",
  },
  {
    id: "AB9921",
    status: "completed",
    from: "Đà Nẵng (DAD)",
    to: "Hà Nội (HAN)",
    date: "15 Th08, 2023",
    time: "14:30",
    airline: "VietJet Air",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/VietJet_Air_logo.svg/1200px-VietJet_Air_logo.svg.png",
    price: "980.000đ",
  },
  {
    id: "CC8812",
    status: "cancelled",
    from: "Hà Nội (HAN)",
    to: "Phú Quốc (PQC)",
    date: "01 Th06, 2023",
    time: "09:15",
    airline: "Bamboo Airways",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bamboo_Airways_logo_2019.svg/2560px-Bamboo_Airways_logo_2019.svg.png",
    price: "1.500.000đ",
  },
];


export default function BookingHistoryPage() {
  const [viewMode, setViewMode] = useState<"my-bookings" | "lookup">(
    "my-bookings",
  );
  const [activeFilter, setActiveFilter] = useState("all");

  // State cho phần tra cứu
  const [searchCode, setSearchCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [foundBooking, setFoundBooking] = useState<any>(null);

  // Logic lọc cho "My Bookings"
  const filteredBookings =
    activeFilter === "all"
      ? myBookings
      : myBookings.filter((b) => b.status === activeFilter);

  // Giả lập tra cứu
  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setFoundBooking(null);

    // Giả vờ API call mất 1.5 giây
    setTimeout(() => {
      setIsSearching(false);
      // Tìm thử trong mock data xem có khớp ID không
      const result = myBookings.find((b) => b.id === searchCode.toUpperCase());
      if (result) {
        setFoundBooking(result);
      } else {
        alert("Không tìm thấy mã đặt chỗ này (Thử nhập XJF892)");
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {/* --- 1. MAIN SWITCH TAB --- */}
        <div className="mb-8 flex justify-center">
          <div className="relative inline-flex rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setViewMode("my-bookings")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                viewMode === "my-bookings"
                  ? "bg-sky-600 text-white shadow-md"
                  : "text-slate-500 hover:text-sky-600"
              }`}
            >
              <FaTicket /> Chuyến đi của tôi
            </button>
            <button
              onClick={() => setViewMode("lookup")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                viewMode === "lookup"
                  ? "bg-sky-600 text-white shadow-md"
                  : "text-slate-500 hover:text-sky-600"
              }`}
            >
              <FaMagnifyingGlass /> Tra cứu đặt chỗ
            </button>
          </div>
        </div>

        {/* --- 2. VIEW MODE: MY BOOKINGS --- */}
        {viewMode === "my-bookings" && (
          <div className="animate-fade-in">
            {/* Filters */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Danh sách vé đã mua
              </h2>
              <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
                {["all", "upcoming", "completed", "cancelled"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                      activeFilter === tab
                        ? "bg-sky-100 text-sky-700"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {tab === "all"
                      ? "Tất cả"
                      : tab === "upcoming"
                        ? "Sắp đi"
                        : tab === "completed"
                          ? "Đã đi"
                          : "Đã hủy"}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-6">
              {filteredBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
              {filteredBookings.length === 0 && (
                <div className="py-12 text-center text-slate-400">
                  Không có dữ liệu.
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- 3. VIEW MODE: LOOKUP FORM --- */}
        {viewMode === "lookup" && (
          <div className="animate-fade-in mx-auto max-w-2xl">
            {/* Lookup Form Card */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-2xl text-sky-600">
                  <FaMagnifyingGlass />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Tra cứu thông tin vé
                </h2>
                <p className="mt-2 text-slate-500">
                  Nhập mã đặt chỗ và thông tin cá nhân để tìm kiếm.
                </p>
              </div>

              <form onSubmit={handleLookup} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Mã đặt chỗ <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchCode}
                        onChange={(e) =>
                          setSearchCode(e.target.value.toUpperCase())
                        }
                        placeholder="VD: XJF892"
                        className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 font-mono uppercase outline-none placeholder:normal-case focus:ring-2 focus:ring-sky-500"
                        required
                      />
                      <FaTicket className="absolute left-3.5 top-3.5 text-slate-400" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email đặt vé hoặc Họ tên{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="VD: nguyenvana@gmail.com"
                        className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-sky-500"
                        required
                      />
                      <FaEnvelope className="absolute left-3.5 top-3.5 text-slate-400" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSearching}
                  className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-sky-600 py-3.5 font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSearching ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Đang tìm kiếm...
                    </>
                  ) : (
                    <>
                      Tra cứu ngay <FaArrowRight />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Result Section */}
            {foundBooking && (
              <div className="animate-fade-in-up mt-8">
                <div className="mb-4 flex items-center gap-2 rounded-lg border border-green-100 bg-green-50 p-3 font-bold text-green-600">
                  <FaCircleCheck /> Đã tìm thấy 1 kết quả phù hợp:
                </div>
                <BookingCard booking={foundBooking} />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
