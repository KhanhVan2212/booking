// components/AirlinePartners.tsx
import Image from "next/image";
import React from "react";
import { AirlinePartnersData } from "@/types/landing-page.types";

interface AirlinePartnersProps {
  data: AirlinePartnersData;
}

const AirlinePartners: React.FC<AirlinePartnersProps> = ({ data }) => {
  // Nhân đôi danh sách để tạo hiệu ứng chạy vô tận liền mạch
  const scrollingAirlines = [...data.airlines, ...data.airlines];

  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-12">
      <div className="container mx-auto mb-6 px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
          {data.badge}
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex w-full">
          {scrollingAirlines.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
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
