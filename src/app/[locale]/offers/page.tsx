'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    FaTags, FaPlane, FaCreditCard, FaHotel, FaCopy, FaCheck, FaArrowRight, FaPercent 
} from 'react-icons/fa6';

// --- MOCK DATA ---
const categories = [
    { id: 'all', name: 'Tất cả', icon: <FaTags /> },
    { id: 'flight', name: 'Vé máy bay', icon: <FaPlane /> },
    { id: 'bank', name: 'Đối tác ngân hàng', icon: <FaCreditCard /> },
    { id: 'hotel', name: 'Combo du lịch', icon: <FaHotel /> },
];

const offersData = [
    {
        id: 1,
        type: 'flight',
        title: 'Chào Thu Vàng - Giảm ngay 50%',
        desc: 'Áp dụng cho tất cả các chặng bay nội địa Vietnam Airlines. Thời gian bay từ tháng 9 - tháng 11.',
        code: 'THUVANG50',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
        expiry: '30/11/2023',
        tag: 'HOT'
    },
    {
        id: 2,
        type: 'bank',
        title: 'Hoàn tiền 200K cho chủ thẻ VISA',
        desc: 'Nhập mã khi thanh toán bằng thẻ VISA quốc tế cho hóa đơn từ 2 triệu đồng.',
        code: 'VISASKY',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
        expiry: '31/12/2023',
        tag: null
    },
    {
        id: 3,
        type: 'flight',
        title: 'Bay Quốc Tế - Đi là thích',
        desc: 'Giảm 15% cho các chặng bay đi Nhật Bản, Hàn Quốc và Đài Loan. Không giới hạn hãng bay.',
        code: 'QUOCTE15',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
        expiry: '15/10/2023',
        tag: 'Mới'
    },
    {
        id: 4,
        type: 'hotel',
        title: 'Combo Đà Nẵng 3N2Đ chỉ 2.990k',
        desc: 'Bao gồm vé máy bay khứ hồi VietJet Air + Khách sạn 4 sao gần biển Mỹ Khê.',
        code: 'COMBO299',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1000&auto=format&fit=crop',
        expiry: 'Số lượng có hạn',
        tag: null
    },
    {
        id: 5,
        type: 'bank',
        title: 'Thứ 6 vui vẻ cùng VIB',
        desc: 'Giảm 10% tối đa 500k khi thanh toán bằng thẻ tín dụng VIB vào mỗi thứ 6 hàng tuần.',
        code: 'VIBFRIDAY',
        image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1000&auto=format&fit=crop',
        expiry: 'Vô thời hạn',
        tag: null
    },
    {
        id: 6,
        type: 'flight',
        title: 'Ưu đãi nhóm: Đi 4 tính tiền 3',
        desc: 'Áp dụng cho nhóm 4 người đặt vé hạng Phổ thông tiêu chuẩn chặng bay Hà Nội - Phú Quốc.',
        code: 'GROUP4',
        image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1000&auto=format&fit=crop',
        expiry: '20/12/2023',
        tag: 'Tiết kiệm'
    }
];

// --- COMPONENT: COPY BUTTON ---
const CopyButton = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button 
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all border ${
                copied 
                ? 'bg-green-50 text-green-600 border-green-200' 
                : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200'
            }`}
        >
            {copied ? <><FaCheck /> Đã sao chép</> : <><FaCopy /> {code}</>}
        </button>
    );
};

export default function OffersPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter Logic
  const filteredOffers = activeCategory === 'all' 
    ? offersData 
    : offersData.filter(item => item.type === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-800 text-white py-16 md:py-24 relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>

          <div className="container mx-auto px-6 relative z-10 text-center">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/30 text-sky-100 animate-fade-in-up">
                    <FaPercent className="inline mr-1 text-xs" /> Ưu đãi độc quyền
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
                    Săn vé rẻ, <br/> <span className="text-sky-300">Vi vu thỏa thích</span>
                </h1>
                <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                    Tổng hợp các mã giảm giá, khuyến mãi vé máy bay và khách sạn mới nhất. Cập nhật hàng ngày giúp bạn tiết kiệm tối đa cho mọi chuyến đi.
                </p>
                
                {/* Search Bar giả lập để tìm ưu đãi */}
                <div className="max-w-xl mx-auto relative animate-fade-in-up delay-300">
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm ưu đãi (VD: Vietjet, Visa...)" 
                        className="w-full py-4 pl-6 pr-14 rounded-full text-slate-800 outline-none shadow-xl focus:ring-4 focus:ring-sky-400/30 transition"
                    />
                    <button className="absolute right-2 top-2 w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white hover:bg-sky-700 transition">
                        <FaArrowRight />
                    </button>
                </div>
          </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto px-6 py-12 -mt-10 relative z-20">
          
          {/* Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-md transition-all transform hover:-translate-y-1 ${
                            activeCategory === cat.id 
                            ? 'bg-white text-sky-600 ring-2 ring-sky-600' 
                            : 'bg-white text-slate-500 hover:text-sky-600'
                        }`}
                    >
                        {cat.icon} {cat.name}
                    </button>
                ))}
          </div>

          {/* Grid Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOffers.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                        {/* Image */}
                        <div className="h-48 relative overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            
                            {/* Tags */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                {item.tag && (
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                                        item.tag === 'HOT' ? 'bg-red-600' : 'bg-orange-500'
                                    }`}>
                                        {item.tag}
                                    </span>
                                )}
                                <span className="bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    {item.type === 'flight' ? <FaPlane /> : item.type === 'hotel' ? <FaHotel /> : <FaCreditCard />}
                                    {item.type === 'flight' ? 'Vé máy bay' : item.type === 'hotel' ? 'Combo' : 'Ngân hàng'}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-sky-600 transition">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-3">
                                {item.desc}
                            </p>

                            {/* Code Area */}
                            <div className="bg-slate-50 rounded-xl p-4 border border-dashed border-slate-200">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-slate-400 uppercase">Mã ưu đãi</span>
                                    <span className="text-xs text-slate-400">HSD: {item.expiry}</span>
                                </div>
                                <div className="flex justify-between items-center gap-3">
                                    <span className="text-lg font-mono font-bold text-sky-700 tracking-wider">
                                        {item.code}
                                    </span>
                                    <CopyButton code={item.code} />
                                </div>
                            </div>
                        </div>

                        {/* Footer Action */}
                        <div className="px-6 pb-6 pt-0">
                            <Link href="/" className="block w-full text-center bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl transition">
                                Dùng ngay
                            </Link>
                        </div>
                    </div>
                ))}
          </div>

          {/* Empty State */}
          {filteredOffers.length === 0 && (
              <div className="text-center py-20">
                  <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      <FaTags />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700">Chưa có ưu đãi nào</h3>
                  <p className="text-slate-500">Hiện tại mục này đang được cập nhật. Vui lòng quay lại sau.</p>
              </div>
          )}

      </div>

      {/* 3. NEWSLETTER SECTION */}
      <section className="bg-white py-16 border-t border-slate-100">
          <div className="container mx-auto px-6 text-center">
              <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl animate-bounce">
                      Gift
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Không bỏ lỡ bất kỳ ưu đãi nào!</h2>
                  <p className="text-slate-500 mb-8">
                      Đăng ký nhận bản tin để là người đầu tiên biết về các chương trình khuyến mãi vé máy bay 0 đồng và voucher khách sạn.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder="Nhập địa chỉ email của bạn" 
                        className="flex-1 px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none"
                      />
                      <button className="bg-slate-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-900 transition whitespace-nowrap">
                          Đăng ký nhận tin
                      </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-4">
                      Chúng tôi cam kết không spam. Bạn có thể hủy đăng ký bất cứ lúc nào.
                  </p>
              </div>
          </div>
      </section>

    </main>
  );
}