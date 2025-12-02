"use client";

import React from "react";
import Link from "next/link";
import {
  FaPlane,
  FaDownload,
  FaPrint,
  FaShareNodes,
  FaArrowLeft,
  FaCircleCheck,
  FaSuitcase,
  FaUtensils,
  FaBan,
  FaPhone,
} from "react-icons/fa6";
import Image from "next/image";

export default function BookingDetailPage() {
  return (
    <main className="min-h-screen bg-slate-100 pb-20 print:bg-white">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {/* Breadcrumb / Back Button (Ẩn khi in) */}
        <div className="mb-6 print:hidden">
          <Link
            href="/history"
            className="inline-flex items-center gap-2 font-medium text-slate-500 transition hover:text-sky-600"
          >
            <FaArrowLeft /> Quay lại danh sách
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* --- LEFT COLUMN: THE TICKET (MAIN) --- */}
          <div className="lg:col-span-2">
            {/* Header Actions (Mobile only) */}
            <div className="mb-4 flex items-center justify-between lg:hidden">
              <h1 className="text-xl font-bold text-slate-800">Vé điện tử</h1>
              <div className="flex gap-2">
                <button className="rounded-full bg-white p-2 text-sky-600 shadow">
                  <FaDownload />
                </button>
                <button className="rounded-full bg-white p-2 text-slate-600 shadow">
                  <FaShareNodes />
                </button>
              </div>
            </div>

            {/* --- TICKET CARD UI START --- */}
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl print:border print:border-slate-300 print:shadow-none">
              {/* 1. Ticket Header (Brand & Status) */}
              <div className="flex items-center justify-between bg-sky-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Image
                    width={100}
                    height={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vietnam_Airlines_Logo_%282002-2015%29.svg/2560px-Vietnam_Airlines_Logo_%282002-2015%29.svg.png"
                    className="h-8 w-auto opacity-90 brightness-0 invert"
                    alt="Logo"
                  />
                  <span className="hidden text-lg font-bold tracking-wide sm:block">
                    Vietnam Airlines
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs uppercase tracking-wider text-sky-200">
                    Trạng thái
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm font-bold backdrop-blur-sm">
                    <FaCircleCheck /> Đã thanh toán
                  </span>
                </div>
              </div>

              {/* 2. Main Flight Info */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                  {/* Depart */}
                  <div>
                    <div className="text-4xl font-bold text-slate-800">HAN</div>
                    <div className="mt-1 text-sm font-medium text-slate-500">
                      Hà Nội
                    </div>
                    <div className="mt-2 text-lg font-bold text-sky-600">
                      06:00
                    </div>
                    <div className="mt-1 inline-block rounded bg-slate-100 px-2 py-1 text-xs text-slate-400">
                      Nhà ga T1
                    </div>
                  </div>

                  {/* Duration & Flight No */}
                  <div className="flex w-full flex-col items-center md:w-auto">
                    <div className="mb-1 text-sm font-bold text-slate-500">
                      VN 216
                    </div>
                    <div className="flex w-32 items-center md:w-48">
                      <div className="h-[2px] flex-1 bg-slate-200"></div>
                      <FaPlane className="mx-2 rotate-90 transform text-sky-500 md:rotate-0" />
                      <div className="h-[2px] flex-1 bg-slate-200"></div>
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      2 giờ 15 phút
                    </div>
                    <div className="mt-2 rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-600">
                      Bay thẳng
                    </div>
                  </div>

                  {/* Arrive */}
                  <div>
                    <div className="text-4xl font-bold text-slate-800">SGN</div>
                    <div className="mt-1 text-sm font-medium text-slate-500">
                      TP. Hồ Chí Minh
                    </div>
                    <div className="mt-2 text-lg font-bold text-sky-600">
                      08:15
                    </div>
                    <div className="mt-1 inline-block rounded bg-slate-100 px-2 py-1 text-xs text-slate-400">
                      Nhà ga T2
                    </div>
                  </div>
                </div>

                {/* Date Info */}
                <div className="mt-8 flex items-center justify-center border-t border-slate-100 pt-6 md:justify-between">
                  <div className="font-medium text-slate-500">
                    Ngày khởi hành:
                  </div>
                  <div className="text-xl font-bold text-slate-800">
                    Thứ Hai, 24 Tháng 10, 2023
                  </div>
                </div>
              </div>

              {/* --- CUT-OUT EFFECT (Hiệu ứng xé vé) --- */}
              <div className="relative flex h-8 items-center justify-center bg-slate-100 print:bg-transparent">
                <div className="absolute left-[-16px] h-8 w-8 rounded-full bg-slate-100 print:hidden"></div>{" "}
                {/* Left Notch */}
                <div className="mx-4 w-full border-t-2 border-dashed border-slate-300"></div>
                <div className="absolute right-[-16px] h-8 w-8 rounded-full bg-slate-100 print:hidden"></div>{" "}
                {/* Right Notch */}
              </div>

              {/* 3. Passenger & QR Section */}
              <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3 md:p-8">
                {/* Passenger Details */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:col-span-2">
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-slate-400">
                      Hành khách
                    </div>
                    <div className="text-lg font-bold uppercase text-slate-800">
                      Nguyen Van A
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-slate-400">
                      Hạng vé
                    </div>
                    <div className="font-bold text-slate-800">Phổ thông</div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-slate-400">
                      Ghế ngồi
                    </div>
                    <div className="text-lg font-bold text-sky-600">12A</div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-slate-400">
                      Cổng (Gate)
                    </div>
                    <div className="font-bold text-slate-800">--</div>
                  </div>

                  {/* Extras */}
                  <div className="col-span-2 mt-2 flex gap-4">
                    <span className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
                      <FaSuitcase /> 20kg Ký gửi
                    </span>
                    <span className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
                      <FaUtensils /> Suất ăn nóng
                    </span>
                  </div>
                </div>

                {/* QR Code Area */}
                <div className="flex flex-col items-center justify-center border-l border-t border-slate-100 pl-0 pt-8 md:border-t-0 md:pl-8 md:pt-0">
                  <Image
                    width={150}
                    height={150}
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SKYBOOKER-XJF892"
                    alt="QR Code"
                    className="mb-2 h-32 w-32 mix-blend-multiply"
                  />
                  <div className="mb-1 text-xs text-slate-400">Mã đặt chỗ</div>
                  <div className="font-mono text-xl font-bold tracking-widest text-slate-800">
                    XJF892
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="bg-slate-50 p-4 text-center text-xs text-slate-400 print:hidden">
                Vui lòng có mặt tại sân bay ít nhất 90 phút trước giờ khởi hành.
              </div>
            </div>
            {/* --- TICKET CARD UI END --- */}
          </div>

          {/* --- RIGHT COLUMN: ACTIONS & BILLING --- */}
          <div className="space-y-6 lg:col-span-1 print:hidden">
            {/* Action Buttons */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-bold text-slate-800">Thao tác</h3>
              <div className="space-y-3">
                <button
                  onClick={() => window.print()}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 py-3 font-semibold text-white transition hover:bg-slate-900"
                >
                  <FaPrint /> In vé điện tử
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-sky-200 bg-sky-50 py-3 font-semibold text-sky-700 transition hover:bg-sky-100">
                  <FaDownload /> Tải về PDF
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-white py-3 font-semibold text-red-600 transition hover:bg-red-50">
                  <FaBan /> Hủy đặt chỗ
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-bold text-slate-800">
                Chi tiết thanh toán
              </h3>
              <div className="mb-4 space-y-3 border-b border-slate-100 pb-4 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Giá vé gốc</span>
                  <span>1.250.000đ</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Thuế & Phí</span>
                  <span>350.000đ</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Hành lý (20kg)</span>
                  <span>180.000đ</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Suất ăn</span>
                  <span>70.000đ</span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <span className="font-bold text-slate-800">Tổng cộng</span>
                <span className="text-xl font-bold text-orange-600">
                  1.850.000đ
                </span>
              </div>
              <div className="mt-4 flex items-start gap-2 rounded bg-yellow-50 p-3 text-xs text-yellow-700">
                <span className="mt-0.5">⚠️</span>
                <p>
                  Hóa đơn đỏ (VAT) sẽ được gửi tới email của bạn trong vòng 24h
                  làm việc.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="rounded-xl bg-sky-600 p-6 text-center text-white shadow-lg shadow-sky-600/20">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
                <FaPhone />
              </div>
              <h3 className="mb-1 text-lg font-bold">Cần hỗ trợ gấp?</h3>
              <p className="mb-4 text-sm text-sky-100">
                Chúng tôi sẵn sàng hỗ trợ 24/7
              </p>
              <a
                href="tel:19001234"
                className="inline-block rounded-full bg-white px-6 py-2 font-bold text-sky-600 transition hover:bg-sky-50"
              >
                Gọi 1900 1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
