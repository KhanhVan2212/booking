// components/DestinationsHero.tsx
import React from "react";

const DestinationsHero = () => {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-50"></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          Khám phá <span className="text-red-500">Điểm đến mơ ước</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-200">
          Hãy lên kế hoạch cho chuyến đi tiếp theo của bạn với danh sách các
          điểm đến hấp dẫn nhất trong và ngoài nước.
        </p>
      </div>
    </div>
  );
};

export default DestinationsHero;
