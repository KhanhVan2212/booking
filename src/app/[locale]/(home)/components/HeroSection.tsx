// components/HeroSection.tsx
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/backgrounds/banner-home.avif')",
      }}
    >
      {/* Overlay tối màu */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-50"></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 pb-20 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-6xl">
          Chắp cánh hành trình <br />{" "}
          <span className="text-red-500">Vươn mình thăng hoa</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200">
          Tìm kiếm và đặt vé máy bay giá rẻ nhất với hệ thống so sánh giá thông
          minh từ hơn 500 hãng hàng không.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
