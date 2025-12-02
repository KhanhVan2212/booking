// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-[600px] bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        {/* Overlay tối màu */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-50"></div>
        
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10 pb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Khám phá thế giới <br /> <span className="text-sky-400">theo cách của bạn</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
                Tìm kiếm và đặt vé máy bay giá rẻ nhất với hệ thống so sánh giá thông minh từ hơn 500 hãng hàng không.
            </p>
        </div>
    </div>
  );
};

export default HeroSection;