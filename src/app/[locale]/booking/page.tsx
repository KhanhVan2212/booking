"use client";

import React, { useState } from "react";
import {
  FaPlane,
  FaSuitcase,
  FaUser,
  FaCreditCard,
  FaArrowRight,
  FaShieldHalved,
} from "react-icons/fa6";
import Step from "./compoment/Step";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BookingPage() {
  // State giả lập việc chọn hành lý
  const [baggage, setBaggage] = useState(0); // 0 = 0kg
  const router = useRouter();
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* STEP INDICATOR (Thanh tiến trình) */}
      <Step />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* --- LEFT COLUMN: THÔNG TIN & FORM --- */}
          <div className="space-y-6 lg:col-span-2">
            {/* 1. THÔNG TIN CHUYẾN BAY ĐÃ CHỌN */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-6 py-3">
                <h2 className="flex items-center gap-2 font-bold text-slate-700">
                  <FaPlane className="text-sky-600" /> Chuyến đi • Hà Nội - TP.
                  HCM
                </h2>
                <span className="cursor-pointer text-sm font-semibold text-sky-600 hover:underline">
                  Thay đổi
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <Image
                    width={100}
                    height={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vietnam_Airlines_Logo_%282002-2015%29.svg/2560px-Vietnam_Airlines_Logo_%282002-2015%29.svg.png"
                    className="h-8 w-auto object-contain"
                    alt="Logo"
                  />
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="font-bold text-slate-800">
                        Vietnam Airlines
                      </h3>
                      <span className="rounded bg-sky-50 px-2 py-1 text-xs font-medium text-sky-600">
                        VN 216
                      </span>
                      <span className="text-xs text-slate-500">Phổ thông</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-800">
                          06:00
                        </div>
                        <div className="text-xs text-slate-500">HAN (T1)</div>
                      </div>
                      <div className="flex flex-col items-center px-4">
                        <span className="text-xs text-slate-400">2h 15m</span>
                        <div className="relative my-1 h-[1px] w-20 bg-slate-300">
                          <div className="absolute -top-1 right-0 h-2 w-2 rounded-full bg-slate-300"></div>
                        </div>
                        <span className="text-xs text-slate-400">
                          Bay thẳng
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-800">
                          08:15
                        </div>
                        <div className="text-xs text-slate-500">SGN (T2)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. THÔNG TIN LIÊN HỆ */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm text-sky-600">
                  <FaUser />
                </span>
                Thông tin liên hệ
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600">
                    Họ và tên đệm <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: NGUYEN VAN"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 font-medium uppercase outline-none placeholder:normal-case focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600">
                    Tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: A"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 font-medium uppercase outline-none placeholder:normal-case focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Nhập địa chỉ email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <p className="text-xs text-slate-500">
                    Vé điện tử sẽ được gửi về email này.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. TIỆN ÍCH BỔ SUNG (HÀNH LÝ) */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm text-orange-600">
                  <FaSuitcase />
                </span>
                Hành lý ký gửi
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { val: 0, label: "Không chọn", price: "0đ" },
                  { val: 20, label: "20kg hành lý", price: "180.000đ" },
                  { val: 25, label: "25kg hành lý", price: "250.000đ" },
                ].map((opt) => (
                  <div
                    key={opt.val}
                    onClick={() => setBaggage(opt.val)}
                    className={`relative cursor-pointer rounded-xl border p-4 transition ${baggage === opt.val ? "border-sky-600 bg-sky-50" : "border-slate-200 hover:border-sky-300"}`}
                  >
                    <div className="font-bold text-slate-800">{opt.label}</div>
                    <div className="text-sm font-semibold text-sky-600">
                      {opt.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. PHƯƠNG THỨC THANH TOÁN */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">
                  <FaCreditCard />
                </span>
                Thanh toán
              </h2>
              <div className="space-y-3">
                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
                  <input
                    type="radio"
                    name="payment"
                    className="h-5 w-5 accent-sky-600"
                    defaultChecked
                  />
                  <div className="flex h-6 w-10 items-center justify-center rounded bg-slate-200 text-xs font-bold text-slate-500">
                    VISA
                  </div>
                  <div className="flex-1 font-medium text-slate-700">
                    Thẻ thanh toán quốc tế
                  </div>
                </label>
                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
                  <input
                    type="radio"
                    name="payment"
                    className="h-5 w-5 accent-sky-600"
                  />
                  <div className="flex h-6 w-10 items-center justify-center rounded bg-blue-100 text-xs font-bold text-blue-600">
                    ATM
                  </div>
                  <div className="flex-1 font-medium text-slate-700">
                    Thẻ ATM nội địa / Internet Banking
                  </div>
                </label>
                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
                  <input
                    type="radio"
                    name="payment"
                    className="h-5 w-5 accent-sky-600"
                  />
                  <div className="flex h-6 w-10 items-center justify-center rounded bg-pink-100 text-xs font-bold text-pink-600">
                    MOMO
                  </div>
                  <div className="flex-1 font-medium text-slate-700">
                    Ví điện tử Momo
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TÓM TẮT GIÁ (STICKY) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-xl border border-slate-100 bg-white p-6 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-slate-800">
                Chi tiết giá
              </h3>

              <div className="mb-4 space-y-3 border-b border-slate-100 pb-4 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Vé người lớn (x1)</span>
                  <span className="font-medium text-slate-800">1.250.000đ</span>
                </div>
                <div className="flex justify-between">
                  <span>Thuế & Phí sân bay</span>
                  <span className="font-medium text-slate-800">350.000đ</span>
                </div>
                {baggage > 0 && (
                  <div className="flex justify-between text-sky-600">
                    <span>Hành lý ({baggage}kg)</span>
                    <span className="font-medium">
                      +{baggage === 20 ? "180.000đ" : "250.000đ"}
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-6 flex items-end justify-between">
                <span className="font-bold text-slate-800">Tổng cộng</span>
                <div className="text-right">
                  <span className="block text-2xl font-bold text-orange-600">
                    {(
                      1600000 +
                      (baggage === 20 ? 180000 : baggage === 25 ? 250000 : 0)
                    ).toLocaleString()}
                    đ
                  </span>
                  <span className="text-xs text-slate-400">
                    Đã bao gồm thuế & phí
                  </span>
                </div>
              </div>

              <button
                onClick={() => router.push(`/payment`)}
                className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 font-bold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Thanh toán ngay <FaArrowRight />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-slate-50 p-2 text-xs text-slate-400">
                <FaShieldHalved className="text-green-500" /> Giao dịch bảo mật
                & an toàn
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
