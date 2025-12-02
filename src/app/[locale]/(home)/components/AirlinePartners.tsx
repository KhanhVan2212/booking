// components/AirlinePartners.tsx
import Image from "next/image";
import React from "react";

const airlines = [
  {
    name: "Vietnam Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vietnam_Airlines_Logo_%282002-2015%29.svg/2560px-Vietnam_Airlines_Logo_%282002-2015%29.svg.png",
  },
  {
    name: "VietJet Air",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/VietJet_Air_logo.svg/1200px-VietJet_Air_logo.svg.png",
  },
  {
    name: "Bamboo Airways",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bamboo_Airways_logo_2019.svg/2560px-Bamboo_Airways_logo_2019.svg.png",
  },
  {
    name: "Pacific Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pacific_Airlines_logo_2020.svg/1200px-Pacific_Airlines_logo_2020.svg.png",
  },
  {
    name: "Vietravel Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vietravel_Airlines_logo.svg/1200px-Vietravel_Airlines_logo.svg.png",
  },
];

const AirlinePartners = () => {
  // Nhân đôi danh sách để tạo hiệu ứng chạy vô tận liền mạch
  const scrollingAirlines = [...airlines, ...airlines];

  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-12">
      <div className="container mx-auto mb-6 px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Đối tác hàng không chính thức
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex w-[calc(250px*10)]">
          {scrollingAirlines.map((item, index) => (
            <div
              key={index}
              className="flex h-20 w-[250px] items-center justify-center px-8 opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
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
