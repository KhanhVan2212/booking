'use client';

import React from 'react';
import Link from 'next/link';
import { 
    FaPlane, FaDownload, FaPrint, FaShareNodes, FaArrowLeft, 
    FaCircleCheck, FaSuitcase, FaUtensils, FaBan, FaPhone 
} from 'react-icons/fa6';

export default function BookingDetailPage() {
  return (
    <main className="min-h-screen bg-slate-100 pb-20 print:bg-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* Breadcrumb / Back Button (Ẩn khi in) */}
        <div className="mb-6 print:hidden">
            <Link href="/history" className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 transition font-medium">
                <FaArrowLeft /> Quay lại danh sách
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* --- LEFT COLUMN: THE TICKET (MAIN) --- */}
            <div className="lg:col-span-2">
                
                {/* Header Actions (Mobile only) */}
                <div className="flex justify-between items-center lg:hidden mb-4">
                    <h1 className="text-xl font-bold text-slate-800">Vé điện tử</h1>
                    <div className="flex gap-2">
                         <button className="p-2 bg-white rounded-full shadow text-sky-600"><FaDownload /></button>
                         <button className="p-2 bg-white rounded-full shadow text-slate-600"><FaShareNodes /></button>
                    </div>
                </div>

                {/* --- TICKET CARD UI START --- */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative print:shadow-none print:border print:border-slate-300">
                    
                    {/* 1. Ticket Header (Brand & Status) */}
                    <div className="bg-sky-600 p-6 text-white flex justify-between items-center">
                        <div className="flex items-center gap-3">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vietnam_Airlines_Logo_%282002-2015%29.svg/2560px-Vietnam_Airlines_Logo_%282002-2015%29.svg.png" 
                                  className="h-8 w-auto brightness-0 invert opacity-90" alt="Logo" />
                             <span className="font-bold text-lg tracking-wide hidden sm:block">Vietnam Airlines</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-sky-200 text-xs uppercase tracking-wider">Trạng thái</span>
                            <span className="font-bold flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                <FaCircleCheck /> Đã thanh toán
                            </span>
                        </div>
                    </div>

                    {/* 2. Main Flight Info */}
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
                            
                            {/* Depart */}
                            <div>
                                <div className="text-4xl font-bold text-slate-800">HAN</div>
                                <div className="text-sm text-slate-500 font-medium mt-1">Hà Nội</div>
                                <div className="text-sky-600 font-bold text-lg mt-2">06:00</div>
                                <div className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded mt-1 inline-block">Nhà ga T1</div>
                            </div>

                            {/* Duration & Flight No */}
                            <div className="flex flex-col items-center w-full md:w-auto">
                                <div className="text-sm text-slate-500 font-bold mb-1">VN 216</div>
                                <div className="flex items-center w-32 md:w-48">
                                    <div className="h-[2px] bg-slate-200 flex-1"></div>
                                    <FaPlane className="text-sky-500 mx-2 transform rotate-90 md:rotate-0" />
                                    <div className="h-[2px] bg-slate-200 flex-1"></div>
                                </div>
                                <div className="text-xs text-slate-400 mt-1">2 giờ 15 phút</div>
                                <div className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-2">Bay thẳng</div>
                            </div>

                            {/* Arrive */}
                            <div>
                                <div className="text-4xl font-bold text-slate-800">SGN</div>
                                <div className="text-sm text-slate-500 font-medium mt-1">TP. Hồ Chí Minh</div>
                                <div className="text-sky-600 font-bold text-lg mt-2">08:15</div>
                                <div className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded mt-1 inline-block">Nhà ga T2</div>
                            </div>
                        </div>

                        {/* Date Info */}
                        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center md:justify-between items-center">
                            <div className="text-slate-500 font-medium">Ngày khởi hành:</div>
                            <div className="text-xl font-bold text-slate-800">Thứ Hai, 24 Tháng 10, 2023</div>
                        </div>
                    </div>

                    {/* --- CUT-OUT EFFECT (Hiệu ứng xé vé) --- */}
                    <div className="relative h-8 bg-slate-100 flex items-center justify-center print:bg-transparent">
                        <div className="absolute left-[-16px] w-8 h-8 bg-slate-100 rounded-full print:hidden"></div> {/* Left Notch */}
                        <div className="w-full border-t-2 border-dashed border-slate-300 mx-4"></div>
                        <div className="absolute right-[-16px] w-8 h-8 bg-slate-100 rounded-full print:hidden"></div> {/* Right Notch */}
                    </div>

                    {/* 3. Passenger & QR Section */}
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Passenger Details */}
                        <div className="md:col-span-2 grid grid-cols-2 gap-y-6 gap-x-4">
                            <div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Hành khách</div>
                                <div className="font-bold text-slate-800 text-lg uppercase">Nguyen Van A</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Hạng vé</div>
                                <div className="font-bold text-slate-800">Phổ thông</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Ghế ngồi</div>
                                <div className="font-bold text-sky-600 text-lg">12A</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Cổng (Gate)</div>
                                <div className="font-bold text-slate-800">--</div>
                            </div>
                            
                            {/* Extras */}
                            <div className="col-span-2 flex gap-4 mt-2">
                                <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                    <FaSuitcase /> 20kg Ký gửi
                                </span>
                                <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                    <FaUtensils /> Suất ăn nóng
                                </span>
                            </div>
                        </div>

                        {/* QR Code Area */}
                        <div className="flex flex-col items-center justify-center border-l border-slate-100 pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SKYBOOKER-XJF892" 
                                 alt="QR Code" className="w-32 h-32 mb-2 mix-blend-multiply" />
                            <div className="text-xs text-slate-400 mb-1">Mã đặt chỗ</div>
                            <div className="text-xl font-bold text-slate-800 font-mono tracking-widest">XJF892</div>
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
            <div className="lg:col-span-1 space-y-6 print:hidden">
                
                {/* Action Buttons */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-800 mb-4">Thao tác</h3>
                    <div className="space-y-3">
                        <button 
                            onClick={() => window.print()} 
                            className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 rounded-lg transition"
                        >
                            <FaPrint /> In vé điện tử
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold py-3 rounded-lg transition border border-sky-200">
                            <FaDownload /> Tải về PDF
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-red-600 font-semibold py-3 rounded-lg transition border border-red-200">
                            <FaBan /> Hủy đặt chỗ
                        </button>
                    </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-800 mb-4">Chi tiết thanh toán</h3>
                    <div className="space-y-3 text-sm border-b border-slate-100 pb-4 mb-4">
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
                    <div className="flex justify-between items-end">
                        <span className="font-bold text-slate-800">Tổng cộng</span>
                        <span className="font-bold text-xl text-orange-600">1.850.000đ</span>
                    </div>
                     <div className="mt-4 flex gap-2 items-start bg-yellow-50 p-3 rounded text-xs text-yellow-700">
                        <span className="mt-0.5">⚠️</span> 
                        <p>Hóa đơn đỏ (VAT) sẽ được gửi tới email của bạn trong vòng 24h làm việc.</p>
                    </div>
                </div>

                {/* Support */}
                <div className="bg-sky-600 rounded-xl p-6 text-white text-center shadow-lg shadow-sky-600/20">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                        <FaPhone />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Cần hỗ trợ gấp?</h3>
                    <p className="text-sky-100 text-sm mb-4">Chúng tôi sẵn sàng hỗ trợ 24/7</p>
                    <a href="tel:19001234" className="inline-block bg-white text-sky-600 font-bold py-2 px-6 rounded-full hover:bg-sky-50 transition">
                        Gọi 1900 1234
                    </a>
                </div>

            </div>
        </div>
      </div>
    </main>
  );
}