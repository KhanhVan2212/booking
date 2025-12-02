'use client';

import React, { useState, useEffect } from 'react';
import { 
    FaPlane, FaCreditCard, FaQrcode, FaBuildingColumns, FaWallet, 
    FaLock, FaCheck, FaTicket, FaClock, FaArrowRight, FaShieldHalved 
} from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'qr' | 'atm'>('card');
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
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white border-b border-slate-200 py-4 shadow-sm sticky top-[72px] z-30">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 text-sm font-medium">
                <div className="flex items-center gap-2 text-green-600">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs"><FaCheck /></span>
                    Chọn chuyến bay
                </div>
                <div className="w-8 h-[2px] bg-green-600"></div>
                <div className="flex items-center gap-2 text-green-600">
                     <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs"><FaCheck /></span>
                    Điền thông tin
                </div>
                <div className="w-8 h-[2px] bg-sky-600"></div>
                <div className="flex items-center gap-2 text-sky-600">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">3</span>
                    Thanh toán
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        {/* Warning Banner */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 flex items-center justify-between text-orange-800 max-w-5xl mx-auto">
            <div className="flex items-center gap-2">
                <FaClock /> 
                <span className="font-medium">Hoàn tất thanh toán trong <span className="font-bold text-lg">{formatTime(timeLeft)}</span> để giữ giá vé tốt nhất.</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* --- LEFT COLUMN: CỔNG THANH TOÁN --- */}
          <div className="lg:col-span-2 space-y-6">
            
            <h2 className="text-xl font-bold text-slate-800">Phương thức thanh toán</h2>

            {/* Payment Method Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 font-medium transition ${paymentMethod === 'card' ? 'bg-sky-50 text-sky-600 border-b-2 border-sky-600' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        <FaCreditCard /> Thẻ quốc tế
                    </button>
                    <button 
                        onClick={() => setPaymentMethod('qr')}
                        className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 font-medium transition ${paymentMethod === 'qr' ? 'bg-sky-50 text-sky-600 border-b-2 border-sky-600' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        <FaQrcode /> VietQR / Momo
                    </button>
                    <button 
                        onClick={() => setPaymentMethod('atm')}
                        className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 font-medium transition ${paymentMethod === 'atm' ? 'bg-sky-50 text-sky-600 border-b-2 border-sky-600' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        <FaBuildingColumns /> Thẻ ATM
                    </button>
                </div>

                {/* CONTENT: CREDIT CARD FORM */}
                {paymentMethod === 'card' && (
                    <div className="p-8 animate-fade-in">
                        <div className="flex gap-4 mb-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-8 border rounded px-2" alt="Visa" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8 border rounded px-2" alt="Mastercard" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/JCB_logo.svg" className="h-8 border rounded px-2" alt="JCB" />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Số thẻ</label>
                                <div className="relative">
                                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none font-mono" />
                                    <FaCreditCard className="absolute left-3 top-3.5 text-slate-400" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Tên chủ thẻ</label>
                                <input type="text" placeholder="NGUYEN VAN A" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none uppercase" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Ngày hết hạn</label>
                                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none font-mono text-center" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">CVV/CVC</label>
                                    <div className="relative">
                                        <input type="password" placeholder="***" maxLength={3} className="w-full pl-4 pr-10 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none font-mono text-center" />
                                        <FaLock className="absolute right-3 top-3.5 text-slate-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-start gap-2 text-sm text-slate-500 bg-slate-50 p-3 rounded">
                            <FaShieldHalved className="text-green-600 mt-0.5" />
                            <p>Thông tin thẻ của bạn được mã hóa an toàn 100%. Chúng tôi không lưu trữ thông tin thẻ.</p>
                        </div>
                    </div>
                )}

                {/* CONTENT: QR CODE */}
                {paymentMethod === 'qr' && (
                    <div className="p-8 text-center animate-fade-in">
                        <p className="text-slate-600 mb-4">Mở ứng dụng ngân hàng hoặc ví điện tử để quét mã</p>
                        <div className="border-2 border-sky-500 rounded-xl inline-block p-2 mb-4 relative">
                             {/* Placeholder QR */}
                             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="w-48 h-48" alt="QR Code" />
                             <div className="absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 hover:opacity-100 transition duration-300 cursor-pointer">
                                 <span className="font-bold text-sky-600">Nhấn để phóng to</span>
                             </div>
                        </div>
                        <div className="flex justify-center gap-4 text-sm font-semibold text-slate-600">
                             <span className="flex items-center gap-1"><FaBuildingColumns /> VietQR</span>
                             <span className="flex items-center gap-1 text-pink-600"><FaWallet /> Momo</span>
                             <span className="flex items-center gap-1 text-blue-600"><FaWallet /> ZaloPay</span>
                        </div>
                    </div>
                )}
                
                {/* CONTENT: ATM */}
                {paymentMethod === 'atm' && (
                    <div className="p-8 animate-fade-in">
                         <p className="text-sm text-slate-500 mb-4">Chọn ngân hàng nội địa để tiếp tục:</p>
                         <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                             {[1,2,3,4,5,6,7,8].map(i => (
                                 <div key={i} className="border border-slate-200 rounded-lg p-2 hover:border-sky-500 hover:shadow-md cursor-pointer transition flex items-center justify-center h-16 bg-slate-50 text-xs font-bold text-slate-400">
                                     LOGO BANK
                                 </div>
                             ))}
                         </div>
                    </div>
                )}
            </div>

            {/* Back Button */}
            <button className="text-slate-500 font-semibold hover:text-sky-600 transition flex items-center gap-2">
                <FaArrowRight className="rotate-180" /> Quay lại bước điền thông tin
            </button>
          </div>

          {/* --- RIGHT COLUMN: SUMMARY (STICKY) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-4">
                
                {/* Flight Info Card */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-5">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Tóm tắt chuyến đi</h3>
                    
                    <div className="flex items-center gap-3 mb-4">
                        <div className="font-bold text-2xl text-slate-800">HAN</div>
                        <FaPlane className="text-sky-400 text-sm" />
                        <div className="font-bold text-2xl text-slate-800">SGN</div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex justify-between">
                            <span>Chuyến bay</span>
                            <span className="font-semibold text-slate-800">VN 216</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Ngày đi</span>
                            <span className="font-semibold text-slate-800">24/10/2023</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Giờ bay</span>
                            <span className="font-semibold text-slate-800">06:00 - 08:15</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Hành khách</span>
                            <span className="font-semibold text-slate-800">1 Người lớn</span>
                        </div>
                    </div>
                </div>

                {/* Promo Code */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                    <label className="text-sm font-semibold text-slate-700 block mb-2">Mã giảm giá</label>
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                             <input type="text" placeholder="VOUCHER" className="w-full pl-8 pr-2 py-2 border border-slate-200 rounded-lg text-sm uppercase focus:ring-1 focus:ring-sky-500 outline-none" />
                             <FaTicket className="absolute left-2.5 top-2.5 text-slate-400" />
                        </div>
                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-semibold px-4 rounded-lg transition">
                            Áp dụng
                        </button>
                    </div>
                </div>

                {/* Final Total & Pay Button */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
                    <div className="flex justify-between mb-2">
                        <span className="text-slate-600">Tổng tiền</span>
                        <span className="text-lg font-bold text-slate-800 line-through decoration-slate-400 decoration-1">2.030.000đ</span>
                    </div>
                    <div className="flex justify-between items-end mb-6">
                        <span className="text-slate-600 font-semibold">Thanh toán</span>
                        <span className="text-3xl font-bold text-orange-600">1.850.000đ</span>
                    </div>
                    
                    <button onClick={() => router.push('/payment/success')} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/20 transition transform hover:-translate-y-0.5">
                        Thanh toán ngay
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-3">
                        Bằng việc thanh toán, bạn đồng ý với <a href="#" className="underline hover:text-sky-600">điều khoản & điều kiện</a> của chúng tôi.
                    </p>
                </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}