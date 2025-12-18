// components/AirlinePartners.tsx
import Image from "next/image";
import React from "react";
import { AirlinePartnersData } from "@/types/landing-page.types";

interface AirlinePartnersProps {
  data?: AirlinePartnersData;
}

// Helper để tạo URL placeholder nếu chưa có logo
const getLogo = (name: string, logo?: string) => {
  return (
    logo || `https://placehold.co/200x100?text=${encodeURIComponent(name)}`
  );
};

const defaultDomesticAirlines = [
  { name: "Vietnam Airlines", logo: "/images/vietnamair.png" },
  { name: "VietJet Air", logo: "/images/VietJetAir.png" },
  { name: "Bamboo Airways", logo: "/images/Bamboo-Airways.png" },
  { name: "Pacific Airlines", logo: "/images/Pacific-Airlines.png" },
  { name: "Phú Quốc Airlines", logo: "/images/Phu-Quoc-Airlines.png" },
];

const defaultInternationalAirlines = [
  { name: "Korean Air", logo: "/images/Korean-air.png" },
  { name: "Qantas", logo: "/images/Quantas.png" },
  { name: "China Southern", logo: "/images/China-Southern.png" },
  { name: "American Airlines", logo: "/images/American-Airlines.png" },
  { name: "Japan Airlines", logo: "/images/Japan-Airlines.png" },
  { name: "Air France", logo: "/images/Air-France.png" },
  { name: "Air China", logo: "/images/Air-China.png" },
  { name: "EVA Air", logo: "/images/EVA-Air.png" },
  { name: "Philippine Airlines", logo: "/images/Philippine-Airlines.png" },
  { name: "British Airways", logo: "/images/British-Airways.png" },
  { name: "Asiana Airlines", logo: "/images/Asiana-Airlines.png" },
  { name: "Lufthansa", logo: "/images/Lufthansa.png" },
  { name: "Aeroflot", logo: "/images/Aeroflot.png" },
  { name: "Singapore Airlines", logo: "/images/Singapore-Airlines.png" },
  { name: "China Airlines", logo: "/images/China-Airlines.png" },
  { name: "Air Canada", logo: "/images/Air-Canada.png" },
  { name: "Delta Airlines", logo: "/images/Delta-Airlines.png" },
  { name: "Cathay Pacific", logo: "/images/Cathay-Pacific.png" },
  { name: "Turkish Airlines", logo: "/images/Turkish-Airlines.png" },
  { name: "Emirates", logo: "/images/Emirates.png" },
];

const AirlinePartners: React.FC<AirlinePartnersProps> = ({ data }) => {
  if (data) {
    // CMS mode
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
          <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </section>
    );
  }

  // Default mode (main branch)
  const scrollingDomestic = [
    ...defaultDomesticAirlines,
    ...defaultDomesticAirlines,
    ...defaultDomesticAirlines,
  ];
  const scrollingInternational = [...defaultInternationalAirlines];

  const renderScrollingRow = (
    items: typeof defaultDomesticAirlines,
    direction: "left" | "right",
  ) => (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex w-full ${direction === "left" ? "animate-scroll" : "animate-scroll-reverse"}`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex h-24 w-[200px] flex-shrink-0 items-center justify-center px-4"
          >
            <div className="relative h-16 w-full">
              <Image
                src={getLogo(item.name, item.logo)}
                alt={item.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );

  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <div className="mb-6 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Mạng lưới đường bay
            </span>
            <h3 className="text-xl font-bold text-slate-800">
              Đối tác Hàng không Nội địa
            </h3>
          </div>
          {renderScrollingRow(scrollingDomestic, "left")}
        </div>

        <div>
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-800">
              Đối tác Hàng không Quốc tế
            </h3>
          </div>
          {renderScrollingRow(scrollingInternational, "right")}
        </div>
      </div>
    </section>
  );
};

export default AirlinePartners;