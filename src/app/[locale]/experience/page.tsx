'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    FaChair, FaUtensils, FaWifi, FaTv, FaWineGlass, 
    FaBriefcase, FaArrowRight, FaStar 
} from 'react-icons/fa6';

// --- DATA CÁC HẠNG GHẾ ---
const cabinClasses = [
    {
        id: 'economy',
        name: 'Hạng Phổ Thông',
        tagline: 'Thoải mái & Tiện lợi',
        desc: 'Tận hưởng hành trình bay thoải mái với ghế ngồi được thiết kế công thái học, chỗ để chân rộng rãi và hệ thống giải trí đa dạng. Phù hợp cho mọi chuyến đi.',
        features: ['Ghế ngả 110 độ', 'Màn hình giải trí 10 inch', 'Suất ăn nóng tiêu chuẩn', 'Hành lý 23kg'],
        image: 'https://images.unsplash.com/photo-1542296332-2e44a996aaad?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 'premium',
        name: 'Phổ Thông Đặc Biệt',
        tagline: 'Thêm không gian, thêm niềm vui',
        desc: 'Nâng tầm trải nghiệm với không gian riêng tư hơn, ghế ngồi rộng hơn và ưu tiên làm thủ tục check-in. Lựa chọn hoàn hảo cho những chuyến bay dài.',
        features: ['Ưu tiên Check-in', 'Ghế rộng hơn 20%', 'Đồ uống chào mừng', 'Hành lý 32kg'],
        image: 'https://images.unsplash.com/photo-1520183802803-06f731a2059f?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 'business',
        name: 'Hạng Thương Gia',
        tagline: 'Đẳng cấp & Riêng tư',
        desc: 'Trải nghiệm sự sang trọng tuyệt đối với ghế ngả phẳng thành giường, lối đi riêng và ẩm thực thượng hạng chuẩn nhà hàng 5 sao.',
        features: ['Ghế ngả giường phẳng', 'Phòng chờ hạng sang', 'Ẩm thực 5 sao', 'Lối đi riêng'],
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop' 
        // Lưu ý: Ảnh này mang tính minh họa chung, thực tế nên dùng ảnh cabin business cụ thể
    }
];

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <div className="relative h-[500px]">
          
          <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2000&auto=format&fit=crop" 
                alt="Experience Hero" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 relative h-full flex flex-col justify-center pt-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                Hơn cả một chuyến bay, <br/>
                là <span className="text-sky-400">trải nghiệm cảm xúc</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-xl mb-8 animate-fade-in-up delay-100">
                SkyBooker cam kết mang đến sự thoải mái, tiện nghi và dịch vụ tận tâm nhất trên mỗi hành trình của bạn.
            </p>
          </div>
      </div>

      {/* 2. CABIN CLASSES (TAB INTERACTIVE) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <span className="text-sky-600 font-bold uppercase tracking-wider text-sm">Hạng ghế</span>
                <h2 className="text-3xl font-bold text-slate-800 mt-2">Lựa chọn phong cách bay của bạn</h2>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar">
                <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 inline-flex">
                    {cabinClasses.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                                activeTab === index 
                                ? 'bg-sky-600 text-white shadow-md' 
                                : 'text-slate-500 hover:text-sky-600 hover:bg-sky-50'
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Side */}
                    <div className="h-64 lg:h-auto relative overflow-hidden group">
                        <img 
                            src={cabinClasses[activeTab].image} 
                            alt={cabinClasses[activeTab].name}
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* Text Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-orange-500 mb-4">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-2">{cabinClasses[activeTab].name}</h3>
                        <p className="text-sky-600 font-medium text-lg mb-6">{cabinClasses[activeTab].tagline}</p>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            {cabinClasses[activeTab].desc}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {cabinClasses[activeTab].features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                                        <FaChair className="text-sm" /> {/* Có thể đổi icon linh hoạt nếu muốn */}
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <Link href="/" className="inline-flex items-center gap-2 text-white bg-slate-900 hover:bg-slate-800 px-8 py-3 rounded-xl font-bold w-fit transition">
                            Đặt vé ngay <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. AMENITIES (GRID) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Text Content */}
                <div>
                    <span className="text-sky-600 font-bold uppercase tracking-wider text-sm">Tiện ích trên không</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-6">Giải trí & Kết nối không giới hạn</h2>
                    <p className="text-slate-500 text-lg mb-8">
                        Thời gian bay sẽ trôi qua thật nhanh với hệ thống giải trí hàng đầu và kết nối internet tốc độ cao ngay trên độ cao 10.000m.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl">
                                <FaTv />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">SkyCinema</h4>
                                <p className="text-slate-500 mt-1">Kho phim bom tấn, phim truyền hình và âm nhạc mới nhất được cập nhật liên tục.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl">
                                <FaWifi />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Wi-Fi Tốc độ cao</h4>
                                <p className="text-slate-500 mt-1">Giữ kết nối với bạn bè, check mail hoặc lướt mạng xã hội suốt hành trình.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl">
                                <FaBriefcase />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800">Cổng sạc & Làm việc</h4>
                                <p className="text-slate-500 mt-1">Mỗi ghế ngồi đều trang bị cổng sạc USB và ổ cắm điện đa năng.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1540339832862-43d696ab153a?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8" alt="Entertainment" />
                    <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Wifi" />
                </div>
            </div>
        </div>
      </section>

      {/* 4. DINING (PARALLAX OR BIG IMAGE) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-900/20 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                     <div className="absolute -inset-4 bg-sky-500/20 rounded-full blur-2xl"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1000&auto=format&fit=crop" 
                        alt="Fine Dining" 
                        className="rounded-full w-[400px] h-[400px] object-cover mx-auto relative shadow-2xl border-8 border-white/5"
                    />
                </div>
                <div className="order-1 lg:order-2">
                    <span className="text-sky-400 font-bold uppercase tracking-wider text-sm">Ẩm thực trên mây</span>
                    <h2 className="text-4xl font-bold mt-2 mb-6">Hương vị tinh tế <br/> chuẩn nhà hàng 5 sao</h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Được chế biến bởi các đầu bếp hàng đầu, thực đơn của SkyBooker là sự kết hợp hoàn hảo giữa ẩm thực truyền thống Việt Nam và tinh hoa ẩm thực thế giới.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <FaUtensils className="text-3xl text-sky-400 mb-4" />
                            <h4 className="text-xl font-bold">Thực đơn đa dạng</h4>
                            <p className="text-slate-400 text-sm mt-2">Tùy chọn suất ăn chay, ăn kiêng và thực đơn cho trẻ em.</p>
                        </div>
                        <div>
                            <FaWineGlass className="text-3xl text-sky-400 mb-4" />
                            <h4 className="text-xl font-bold">Đồ uống thượng hạng</h4>
                            <p className="text-slate-400 text-sm mt-2">Bộ sưu tập rượu vang, cocktail và cà phê pha máy cao cấp.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. CTA BOTTOM */}
      <section className="py-20 bg-sky-50">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Sẵn sàng cho chuyến đi tiếp theo?</h2>
              <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
                  Hãy để SkyBooker đồng hành cùng bạn trên mọi nẻo đường. Đặt vé ngay hôm nay để nhận ưu đãi hấp dẫn.
              </p>
              <Link href="/" className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-sky-600/30 transition transform hover:-translate-y-1">
                  Tìm chuyến bay ngay
              </Link>
          </div>
      </section>

    </main>
  );
}