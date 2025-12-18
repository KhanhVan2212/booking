// components/SearchForm.tsx
"use client";

import { Link } from "@/i18n/navigation";
import React, { useState, useRef, useEffect } from "react";
import {
  FaArrowRightArrowLeft,
  FaPlane,
  FaHotel,
  FaPlaneDeparture,
  FaLocationDot,
  FaCalendar,
  FaMagnifyingGlass,
  FaUser,
  FaChair,
  FaPlus,
  FaMinus,
  FaCheck,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function SearchForm() {
  // --- STATE QUẢN LÝ ---
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [locations, setLocations] = useState({ from: "", to: "" });

  // State hành khách & Hạng vé
  const [passengers, setPassengers] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });
  const [seatClass, setSeatClass] = useState<"economy" | "business">("economy");
  const [showPassengerPopup, setShowPassengerPopup] = useState(false);

  // Ref để xử lý click outside (đóng popup khi click ra ngoài)
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPassengerPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- LOGIC HANDLE ---
  const handleSwapLocations = () => {
    setLocations({ from: locations.to, to: locations.from });
  };

  const updatePassenger = (
    type: "adult" | "child" | "infant",
    operation: "inc" | "dec",
  ) => {
    setPassengers((prev) => {
      const newValue = operation === "inc" ? prev[type] + 1 : prev[type] - 1;
      // Validate: Người lớn >= 1, các loại khác >= 0
      if (type === "adult" && newValue < 1) return prev;
      if (newValue < 0) return prev;
      return { ...prev, [type]: newValue };
    });
  };

  // Tính tổng hành khách để hiển thị tóm tắt
  const totalPassengers =
    passengers.adult + passengers.child + passengers.infant;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      className="container relative z-20 mx-auto -mt-32 px-4"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl md:p-8">
        {/* 1. TABS (VÉ MÁY BAY / KHÁCH SẠN) */}
        <div className="mb-6 flex gap-6 border-b border-slate-200 pb-4">
          <label className="-mb-4.5 flex cursor-pointer items-center gap-2 border-b-2 border-red-600 pb-4 font-semibold text-red-600 transition-colors">
            <input
              type="radio"
              name="serviceType"
              defaultChecked
              className="hidden"
            />
            <FaPlane /> Vé máy bay
          </label>
        </div>

        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-12">
          {/* 2. LOẠI VÉ (Một chiều / Khứ hồi) */}
          <div className="mb-2 flex gap-6 text-sm font-medium text-slate-600 md:col-span-12">
            <label className="flex cursor-pointer items-center gap-2 transition hover:text-red-600">
              <input
                type="radio"
                name="tripType"
                className="h-4 w-4 accent-red-600"
                checked={tripType === "one-way"}
                onChange={() => setTripType("one-way")}
              />
              Một chiều
            </label>
            <label className="flex cursor-pointer items-center gap-2 transition hover:text-red-600">
              <input
                type="radio"
                name="tripType"
                className="h-4 w-4 accent-red-600"
                checked={tripType === "round-trip"}
                onChange={() => setTripType("round-trip")}
              />
              Khứ hồi
            </label>
          </div>

          {/* 3. FORM INPUTS */}

          {/* Điểm đi */}
          <div className="group relative md:col-span-3">
            <label className="mb-1 ml-1 block text-xs font-bold uppercase text-slate-500">
              Điểm đi
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-3.5 text-slate-400 group-focus-within:text-red-500">
                <FaPlaneDeparture />
              </div>
              <input
                type="text"
                value={locations.from}
                onChange={(e) =>
                  setLocations({ ...locations, from: e.target.value })
                }
                placeholder="Hà Nội (HAN)"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 font-semibold text-slate-700 outline-none transition focus:bg-white focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Nút Đảo chiều (Swap) */}
          <div className="relative z-10 hidden items-center justify-center pb-2 md:col-span-1 md:flex">
            <button
              type="button"
              onClick={handleSwapLocations}
              className="transform rounded-full border border-slate-200 bg-slate-100 p-2.5 text-slate-500 shadow-sm transition duration-300 hover:border-red-200 hover:bg-red-100 hover:text-red-600 active:rotate-180"
              title="Đảo chiều"
            >
              <FaArrowRightArrowLeft />
            </button>
          </div>

          {/* Điểm đến */}
          <div className="group relative md:col-span-3">
            <label className="mb-1 ml-1 block text-xs font-bold uppercase text-slate-500">
              Điểm đến
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-3.5 text-slate-400 group-focus-within:text-red-500">
                <FaLocationDot />
              </div>
              <input
                type="text"
                value={locations.to}
                onChange={(e) =>
                  setLocations({ ...locations, to: e.target.value })
                }
                placeholder="Hồ Chí Minh (SGN)"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 font-semibold text-slate-700 outline-none transition focus:bg-white focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Ngày đi & Về (Dynamic Layout) */}
          {/* Nếu là 1 chiều: Chiếm 3 cột. Nếu khứ hồi: Chiếm 3 cột nhưng chia đôi bên trong */}
          <div className="grid grid-cols-2 gap-2 md:col-span-5">
            {/* Ngày đi (Luôn hiện) */}
            <div
              className={`${tripType === "one-way" ? "col-span-2" : "col-span-1"} group relative`}
            >
              <label className="mb-1 ml-1 block text-xs font-bold uppercase text-slate-500">
                Ngày đi
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-3.5 text-sm text-slate-400 group-focus-within:text-red-500">
                  <FaCalendar />
                </div>
                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-2 text-sm font-semibold text-slate-700 outline-none transition focus:bg-white focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Ngày về (Chỉ hiện khi Khứ hồi) */}
            {tripType === "round-trip" && (
              <div className="animate-fade-in-right group relative col-span-1">
                <label className="mb-1 ml-1 block text-xs font-bold uppercase text-slate-500">
                  Ngày về
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-3.5 text-sm text-slate-400 group-focus-within:text-red-500">
                    <FaCalendar />
                  </div>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-2 text-sm font-semibold text-slate-700 outline-none transition focus:bg-white focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Nút Tìm kiếm */}
        </div>

        {/* 4. HÀNH KHÁCH & HẠNG VÉ (POPOVER INTERACTIVE) */}
        <div className="relative mt-4" ref={popupRef}>
          {/* Trigger Button */}
          <div className="flex flex-col justify-between md:flex-row">
            <button
              type="button"
              onClick={() => setShowPassengerPopup(!showPassengerPopup)}
              className="flex select-none items-center gap-4 rounded-lg border border-transparent px-4 py-2 text-sm text-slate-600 transition hover:border-slate-200 hover:bg-slate-50"
            >
              <div className="flex items-center gap-2">
                <FaUser className="text-red-500" />
                <span className="font-semibold">
                  {totalPassengers} Hành khách
                </span>
                <span className="text-xs text-slate-400">
                  ({passengers.adult} Lớn, {passengers.child} Trẻ,{" "}
                  {passengers.infant} Bé)
                </span>
              </div>
              <div className="h-4 w-[1px] bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <FaChair className="text-red-500" />
                <span className="font-semibold">
                  {seatClass === "economy" ? "Phổ thông" : "Thương gia"}
                </span>
              </div>
            </button>
            <div className="">
              <Link href="/contact">
                <button className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-red-600 px-10 py-3.5 font-bold text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-0.5 hover:bg-red-700">
                  <FaMagnifyingGlass /> Liên hệ
                </button>
              </Link>
            </div>
          </div>

          {/* POPUP CONTENT */}
          {showPassengerPopup && (
            <div className="animate-fade-in-up absolute left-0 top-12 z-50 w-80 rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl md:w-96">
              {/* Hạng vé Tab */}
              <div className="mb-6 flex rounded-lg bg-slate-100 p-1">
                <button
                  onClick={() => setSeatClass("economy")}
                  className={`flex-1 rounded-md py-2 text-sm font-semibold transition ${seatClass === "economy" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  Phổ thông
                </button>
                <button
                  onClick={() => setSeatClass("business")}
                  className={`flex-1 rounded-md py-2 text-sm font-semibold transition ${seatClass === "business" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  Thương gia
                </button>
              </div>

              {/* Bộ đếm hành khách */}
              <div className="space-y-4">
                {/* Người lớn */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-bold text-slate-700">
                      Người lớn <FaUser className="text-xs text-slate-400" />
                    </div>
                    <div className="text-xs text-slate-400">
                      Từ 12 tuổi trở lên
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updatePassenger("adult", "dec")}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${passengers.adult <= 1 ? "cursor-not-allowed border-slate-200 text-slate-300" : "border-slate-300 text-red-600 hover:border-red-500 hover:bg-red-50"}`}
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="w-6 text-center font-bold text-slate-700">
                      {passengers.adult}
                    </span>
                    <button
                      onClick={() => updatePassenger("adult", "inc")}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-red-600 transition hover:border-red-500 hover:bg-red-50"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                {/* Trẻ em */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-700">Trẻ em</div>
                    <div className="text-xs text-slate-400">Từ 2 - 11 tuổi</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updatePassenger("child", "dec")}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${passengers.child <= 0 ? "cursor-not-allowed border-slate-200 text-slate-300" : "border-slate-300 text-red-600 hover:border-red-500 hover:bg-red-50"}`}
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="w-6 text-center font-bold text-slate-700">
                      {passengers.child}
                    </span>
                    <button
                      onClick={() => updatePassenger("child", "inc")}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-red-600 transition hover:border-red-500 hover:bg-red-50"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                {/* Em bé */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-700">Em bé</div>
                    <div className="text-xs text-slate-400">Dưới 2 tuổi</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updatePassenger("infant", "dec")}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${passengers.infant <= 0 ? "cursor-not-allowed border-slate-200 text-slate-300" : "border-slate-300 text-red-600 hover:border-red-500 hover:bg-red-50"}`}
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="w-6 text-center font-bold text-slate-700">
                      {passengers.infant}
                    </span>
                    <button
                      onClick={() => updatePassenger("infant", "inc")}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-red-600 transition hover:border-red-500 hover:bg-red-50"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Nút Xong */}
              <div className="mt-6 flex justify-end border-t border-slate-100 pt-4">
                <button
                  onClick={() => setShowPassengerPopup(false)}
                  className="rounded-lg bg-red-600 px-6 py-2 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Xong
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
