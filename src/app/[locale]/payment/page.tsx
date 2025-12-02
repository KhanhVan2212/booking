"use client";

import React, { useState, useEffect } from "react";
import {
  FaPlane,
  FaCreditCard,
  FaQrcode,
  FaBuildingColumns,
  FaWallet,
  FaLock,
  FaCheck,
  FaTicket,
  FaClock,
  FaArrowRight,
  FaShieldHalved,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "qr" | "atm">(
    "card",
  );
  const [timeLeft, setTimeLeft] = useState(600); // 10 phút đếm ngược

  // Giả lập đồng hồ đếm ngược
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="sticky top-[72px] z-30 border-b border-slate-200 bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 text-green-600">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs">
                <FaCheck />
              </span>
              Chọn chuyến bay
            </div>
            <div className="h-[2px] w-8 bg-green-600"></div>
            <div className="flex items-center gap-2 text-green-600">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs">
                <FaCheck />
              </span>
              Điền thông tin
            </div>
            <div className="h-[2px] w-8 bg-sky-600"></div>
            <div className="flex items-center gap-2 text-sky-600">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs text-white">
                3
              </span>
              Thanh toán
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Warning Banner */}
        <div className="mx-auto mb-6 flex max-w-5xl items-center justify-between rounded-lg border border-orange-200 bg-orange-50 p-4 text-orange-800">
          <div className="flex items-center gap-2">
            <FaClock />
            <span className="font-medium">
              Hoàn tất thanh toán trong{" "}
              <span className="text-lg font-bold">{formatTime(timeLeft)}</span>{" "}
              để giữ giá vé tốt nhất.
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {/* --- LEFT COLUMN: CỔNG THANH TOÁN --- */}
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-800">
              Phương thức thanh toán
            </h2>

            {/* Payment Method Selection */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col border-b border-slate-200 md:flex-row">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-4 font-medium transition ${paymentMethod === "card" ? "border-b-2 border-sky-600 bg-sky-50 text-sky-600" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  <FaCreditCard /> Thẻ quốc tế
                </button>
                <button
                  onClick={() => setPaymentMethod("qr")}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-4 font-medium transition ${paymentMethod === "qr" ? "border-b-2 border-sky-600 bg-sky-50 text-sky-600" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  <FaQrcode /> VietQR / Momo
                </button>
                <button
                  onClick={() => setPaymentMethod("atm")}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-4 font-medium transition ${paymentMethod === "atm" ? "border-b-2 border-sky-600 bg-sky-50 text-sky-600" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  <FaBuildingColumns /> Thẻ ATM
                </button>
              </div>

              {/* CONTENT: CREDIT CARD FORM */}
              {paymentMethod === "card" && (
                <div className="animate-fade-in p-8">
                  <div className="mb-6 flex gap-4">
                    <Image
                      width={80}
                      height={32}
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                      className="h-8 rounded border px-2"
                      alt="Visa"
                    />
                    <Image
                      width={80}
                      height={20}
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                      className="h-8 rounded border px-2"
                      alt="Mastercard"
                    />
                    <Image
                      width={80}
                      height={20}
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/JCB_logo.svg"
                      className="h-8 rounded border px-2"
                      alt="JCB"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-slate-700">
                        Số thẻ
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 font-mono outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <FaCreditCard className="absolute left-3 top-3.5 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-slate-700">
                        Tên chủ thẻ
                      </label>
                      <input
                        type="text"
                        placeholder="NGUYEN VAN A"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 uppercase outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1 block text-sm font-semibold text-slate-700">
                          Ngày hết hạn
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-center font-mono outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-semibold text-slate-700">
                          CVV/CVC
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            placeholder="***"
                            maxLength={3}
                            className="w-full rounded-lg border border-slate-300 py-3 pl-4 pr-10 text-center font-mono outline-none focus:ring-2 focus:ring-sky-500"
                          />
                          <FaLock className="absolute right-3 top-3.5 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-start gap-2 rounded bg-slate-50 p-3 text-sm text-slate-500">
                    <FaShieldHalved className="mt-0.5 text-green-600" />
                    <p>
                      Thông tin thẻ của bạn được mã hóa an toàn 100%. Chúng tôi
                      không lưu trữ thông tin thẻ.
                    </p>
                  </div>
                </div>
              )}

              {/* CONTENT: QR CODE */}
              {paymentMethod === "qr" && (
                <div className="animate-fade-in p-8 text-center">
                  <p className="mb-4 text-slate-600">
                    Mở ứng dụng ngân hàng hoặc ví điện tử để quét mã
                  </p>
                  <div className="relative mb-4 inline-block rounded-xl border-2 border-sky-500 p-2">
                    {/* Placeholder QR */}
                    <Image
                      width={200}
                      height={200}
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                      className="h-48 w-48"
                      alt="QR Code"
                    />
                    <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-white/80 opacity-0 transition duration-300 hover:opacity-100">
                      <span className="font-bold text-sky-600">
                        Nhấn để phóng to
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 text-sm font-semibold text-slate-600">
                    <span className="flex items-center gap-1">
                      <FaBuildingColumns /> VietQR
                    </span>
                    <span className="flex items-center gap-1 text-pink-600">
                      <FaWallet /> Momo
                    </span>
                    <span className="flex items-center gap-1 text-blue-600">
                      <FaWallet /> ZaloPay
                    </span>
                  </div>
                </div>
              )}

              {/* CONTENT: ATM */}
              {paymentMethod === "atm" && (
                <div className="animate-fade-in p-8">
                  <p className="mb-4 text-sm text-slate-500">
                    Chọn ngân hàng nội địa để tiếp tục:
                  </p>
                  <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div
                        key={i}
                        className="flex h-16 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs font-bold text-slate-400 transition hover:border-sky-500 hover:shadow-md"
                      >
                        LOGO BANK
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Back Button */}
            <button className="flex items-center gap-2 font-semibold text-slate-500 transition hover:text-sky-600">
              <FaArrowRight className="rotate-180" /> Quay lại bước điền thông
              tin
            </button>
          </div>

          {/* --- RIGHT COLUMN: SUMMARY (STICKY) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-4">
              {/* Flight Info Card */}
              <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-lg">
                <h3 className="mb-4 border-b border-slate-100 pb-2 text-lg font-bold text-slate-800">
                  Tóm tắt chuyến đi
                </h3>

                <div className="mb-4 flex items-center gap-3">
                  <div className="text-2xl font-bold text-slate-800">HAN</div>
                  <FaPlane className="text-sm text-sky-400" />
                  <div className="text-2xl font-bold text-slate-800">SGN</div>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Chuyến bay</span>
                    <span className="font-semibold text-slate-800">VN 216</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ngày đi</span>
                    <span className="font-semibold text-slate-800">
                      24/10/2023
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Giờ bay</span>
                    <span className="font-semibold text-slate-800">
                      06:00 - 08:15
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hành khách</span>
                    <span className="font-semibold text-slate-800">
                      1 Người lớn
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Mã giảm giá
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="VOUCHER"
                      className="w-full rounded-lg border border-slate-200 py-2 pl-8 pr-2 text-sm uppercase outline-none focus:ring-1 focus:ring-sky-500"
                    />
                    <FaTicket className="absolute left-2.5 top-2.5 text-slate-400" />
                  </div>
                  <button className="rounded-lg bg-slate-100 px-4 text-sm font-semibold text-slate-600 transition hover:bg-slate-200">
                    Áp dụng
                  </button>
                </div>
              </div>

              {/* Final Total & Pay Button */}
              <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-lg">
                <div className="mb-2 flex justify-between">
                  <span className="text-slate-600">Tổng tiền</span>
                  <span className="text-lg font-bold text-slate-800 line-through decoration-slate-400 decoration-1">
                    2.030.000đ
                  </span>
                </div>
                <div className="mb-6 flex items-end justify-between">
                  <span className="font-semibold text-slate-600">
                    Thanh toán
                  </span>
                  <span className="text-3xl font-bold text-orange-600">
                    1.850.000đ
                  </span>
                </div>

                <button
                  onClick={() => router.push("/payment/success")}
                  className="w-full transform rounded-xl bg-orange-600 py-4 font-bold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-orange-700"
                >
                  Thanh toán ngay
                </button>
                <p className="mt-3 text-center text-xs text-slate-400">
                  Bằng việc thanh toán, bạn đồng ý với{" "}
                  <a href="#" className="underline hover:text-sky-600">
                    điều khoản & điều kiện
                  </a>{" "}
                  của chúng tôi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
