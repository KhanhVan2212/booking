// components/FlightHero.tsx
import React from "react";

const FlightHero = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay tối màu */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-50"></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 pb-20 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          Bay dễ dàng <br />{" "}
          <span className="text-red-500">Khám phá thế giới rộng lớn</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200">
          Đặt vé máy bay trực tuyến nhanh chóng với giá tốt nhất. Trải nghiệm
          những chuyến bay an toàn và tiện lợi.
        </p>
      </div>
    </div>
  );
};

export default FlightHero;
