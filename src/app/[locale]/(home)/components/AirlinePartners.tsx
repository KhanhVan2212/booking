// components/AirlinePartners.tsx
import Image from "next/image";
import React from "react";

const airlines = [
  {
    name: "Vietnam Airlines",
    logo: "/images/vietnamair.png", 
  },
  {
    name: "VietJet Air",
    logo: "/images/VietJetAir.png",
  },
  {
    name: "Bamboo Airways",
    logo: "/images/Bamboo-Airways.png",
  },
  {
    name: "Vietravel Airlines",
    logo: "/images/Vietravel-Airlines.png",
  },
];

const AirlinePartners = () => {
  // Nhân đôi danh sách để tạo hiệu ứng chạy vô tận liền mạch
  const scrollingAirlines = [...airlines, ...airlines];

  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-12">
      <div className="container mx-auto mb-6 px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Đối tác hàng không
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex w-full">
          {scrollingAirlines.map((item, index) => (
            <div
              key={index}
              className="flex h-20 w-[250px] items-center justify-center px-8"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={250}
                height={250}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Fade effect 2 bên */}
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default AirlinePartners;
