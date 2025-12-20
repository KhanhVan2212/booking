import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Helper để tạo URL placeholder nếu chưa có logo
const getLogo = (name: string, logo?: string) => {
  return (
    logo || `https://placehold.co/200x100?text=${encodeURIComponent(name)}`
  );
};

// Các mảng dữ liệu giữ nguyên
const domesticAirlines = [
  { name: "Vietnam Airlines", logo: "/images/vietnamair.png" },
  { name: "VietJet Air", logo: "/images/VietJetAir.png" },
  { name: "Bamboo Airways", logo: "/images/Bamboo-Airways.png" },
  { name: "Pacific Airlines", logo: "/images/Pacific-Airlines.png" },
  { name: "Phú Quốc Airlines", logo: "/images/Phu-Quoc-Airlines.png" },
];

const internationalAirlines = [
  { name: "Korean Air", logo: "/images/Korean-air.png" },
  { name: "Qantas", logo: "/images/Quantas.png" },
  { name: "China Southern", logo: "/images/China-Southern.png" },
  {
    name: "American Airlines",
    logo: "/images/American-Airlines.png",
    scale: 1.5,
  },
  { name: "Japan Airlines", logo: "/images/Japan-Airlines.png", scale: 1.5 },
  { name: "Air France", logo: "/images/Air-France.png" },
  { name: "Air China", logo: "/images/Air-China.png" },
  { name: "EVA Air", logo: "/images/EVA-Air.png" },
  {
    name: "Philippine Airlines",
    logo: "/images/Philippine-Airlines.png",
    scale: 1.5,
  },
  { name: "British Airways", logo: "/images/British-Airways.png" },
  { name: "Asiana Airlines", logo: "/images/Asiana-Airlines.png" },
  { name: "Lufthansa", logo: "/images/Lufthansa.png" },
  { name: "Aeroflot", logo: "/images/Aeroflot.png" },
  { name: "Singapore Airlines", logo: "/images/Singapore-Airlines.png" },
  { name: "China Airlines", logo: "/images/China-Airlines.png", scale: 1.5 },
  { name: "Air Canada", logo: "/images/Air-Canada.png" },
  { name: "Delta Airlines", logo: "/images/Delta-Airlines.png" },
  { name: "Cathay Pacific", logo: "/images/Cathay-Pacific.png", scale: 1.5 },
  { name: "Turkish Airlines", logo: "/images/Turkish-Airlines.png" },
  { name: "Emirates", logo: "/images/Emirates.png" },
];

const customerPartners = [
  { name: "Ngân hàng NN & PTNT VN", logo: "/images/agribank.jpg", scale: 1.5 },
  {
    name: "Ngân Hàng TMCP Đầu tư và Phát triển Việt Nam",
    logo: "/images/bidv.png",
    scale: 1.5,
  },
  { name: "Bộ Giáo Dục Và Đào Tạo", logo: "/images/gddt.png", scale: 1.5},
  { name: "Bộ tài chính", logo: "/images/btt.jpg", scale: 1.5 },
  {
    name: "Sở giáo dục và Đào tạo Hà Nội",
    logo: "/images/gddt-hn.png",
    scale: 1.5,
  },
  { name: "Tập đoàn điện lực Việt Nam", logo: "/images/evn.png", scale: 1.5 },
  { name: "BẢO HIỂM TIỀN GỬI VIỆT NAM", logo: "/images/div.png", scale: 1.5 },
  { name: "Tổng Công ty Bảo Hiểm BIDV", logo: "/images/bico.png", scale: 1.5},
  {
    name: "Tổng Công ty CP Bia rượu nước giải khát Hà Nội",
    logo: "/images/habeco.png",
    scale: 1.5,
  },
  { name: "Văn phòng Cục thuế", logo: "/images/tnn.jpg", scale: 1.5 },
  {
    name: "Trung tâm sản xuất phim truyền hình, đài THVN",
    logo: "/images/vfc.png",
  },
  {
    name: "Trung tâm quảng cáo và dịch vụ truyền thông (VOV AMS)",
    logo: "/images/vov.png",
  },
  { name: "Công Đoàn Xây dựng Việt Nam", logo: "/images/cdvn.png", scale: 1.5 },
  {
    name: "Tổng công ty thăm dò khai thác dầu khí",
    logo: "/images/pvep.png",
    scale: 1.5,
  },
  {
    name: "Viện vệ sinh dịch tễ trung ương",
    logo: "/images/nihe.jpg",
    scale: 1.5,
  },
  { name: "Bệnh Viện E", logo: "/images/hospital-e.png", scale: 1.5 },
  { name: "Bệnh Viện Việt Đức", logo: "/images/viet-duc.jpg", scale: 1.5 },
  { name: "Học viện quản lý giáo dục", logo: "/images/naem.jpg", scale: 1.5 },
  { name: "Trường Đại học thương mại", logo: "/images/tmu.jpg", scale: 1.5 },
  { name: "Trường ĐH Giáo dục", logo: "/images/ued.png", scale: 1.5 },
  {
    name: "Trường THPT chuyên ĐHSP",
    logo: "/images/thpt-dhsp.png",
    scale: 1.5,
  },
  { name: "CỤC CẢNH SÁT GIAO THÔNG", logo: "/images/csgt.png", scale: 1.5 },
];

// Component con để render một track logos (dùng chung cho cả 3 section)
const LogoTrack = ({
                     items,
                     direction = "left", // "left" hoặc "right"
                     speed = "50s", // thời gian một vòng lặp, điều chỉnh để thay đổi tốc độ
                   }: {
  items: typeof domesticAirlines;
  direction?: "left" | "right";
  speed?: string;
}) => {
  // Duplicate items để tạo seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade left & right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"></div>

      <div className="flex">
        <div
          className={`flex animate-scroll items-center gap-8 py-8 ${
            direction === "right" ? "animate-scroll-reverse" : ""
          } hover:[animation-play-state:paused]`}
          style={{ animationDuration: speed }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex h-24 w-[200px] flex-shrink-0 items-center justify-center px-4"
            >
              <div
                className="relative h-16 w-full overflow-hidden"
                style={{
                }}
              >
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
      </div>
    </div>
  );
};

const AirlinePartners = () => {
  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Domestic Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="mb-6 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Mạng lưới đường bay
            </span>
            <h3 className="text-xl font-bold text-slate-800">
              Đối tác Hàng không Nội địa
            </h3>
          </div>

          <LogoTrack items={domesticAirlines} direction="left" speed="40s" />
        </motion.div>

        {/* International Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-800">
              Đối tác Hàng không Quốc tế
            </h3>
          </div>

          <LogoTrack items={internationalAirlines} direction="right" speed="50s" />
        </motion.div>

        {/* Customer Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-800 pb-6">
              Đối tác Khách hàng
            </h3>
          </div>

          <LogoTrack items={customerPartners} direction="left" speed="60s" />
        </motion.div>
      </div>
    </section>
  );
};

export default AirlinePartners;