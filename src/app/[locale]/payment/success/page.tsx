// app/payment/success/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FaCircleCheck, FaPlane, FaDownload, FaHouse, FaArrowRight } from 'react-icons/fa6';

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 max-w-2xl w-full text-center animate-fade-in-up">
            
            {/* Icon */}
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCircleCheck className="text-4xl" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Thanh toán thành công!</h1>
            <p className="text-slate-500 mb-8 text-lg">
                Vé điện tử đã được gửi đến email <span className="font-semibold text-slate-800">example@gmail.com</span>
            </p>

            {/* Booking Code Box */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-6 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-600"></div>
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">Mã đặt chỗ của bạn</p>
                <div className="text-4xl font-bold text-sky-600 tracking-widest font-mono">XJF892</div>
            </div>

            {/* Flight Summary Mini */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white border border-slate-200 rounded-xl p-4 mb-8 text-left">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="bg-sky-50 p-3 rounded-lg text-sky-600">
                        <FaPlane />
                    </div>
                    <div>
                        <div className="font-bold text-slate-800">Hà Nội (HAN) <FaArrowRight className="inline text-xs mx-1 text-slate-400"/> TP. HCM (SGN)</div>
                        <div className="text-sm text-slate-500">24 Th10, 2023 • 06:00 - 08:15</div>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-xs text-slate-400 block">Tổng thanh toán</span>
                    <span className="font-bold text-orange-600 text-lg">1.850.000đ</span>
                </div>
            </div>

            {/* Actions Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/history" className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2">
                    <FaTicket className="inline" /> Quản lý đặt chỗ
                </Link>
                <Link href="/" className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2">
                    <FaHouse /> Về trang chủ
                </Link>
            </div>

        </div>

        <p className="mt-8 text-slate-400 text-sm">
            Cần hỗ trợ? Liên hệ <a href="#" className="text-sky-600 hover:underline">1900 1234</a>
        </p>

      </div>
    </main>
  );
}
// Note: Bạn cần import FaTicket ở trên hoặc thay bằng icon khác nếu lỗi
import { FaTicket } from 'react-icons/fa6';