// components/DestinationsSection.tsx
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

// Định nghĩa kiểu dữ liệu cho một địa điểm
interface Destination {
  id: number;
  name: string;
  slug: string; // Added slug
  price: string;
  imageUrl: string;
}

const destinationsData: Destination[] = [
  {
    id: 1,
    name: "Đà Nẵng",
    slug: "da-nang",
    price: "1.200.000 VNĐ",
    imageUrl:
      "/images/du-lich-da-nang.jpg",
  },
  {
    id: 2,
    name: "Hội An",
    slug: "hoi-an",
    price: "890.000 VNĐ",
    imageUrl:
      "/images/du-lich-hoi-an.png",
  },
  {
    id: 3,
    name: "Phú Quốc",
    slug: "phu-quoc",
    price: "1.500.000 VNĐ",
    imageUrl:
      "/images/du-lich-phu-quoc.png",
  },
  {
    id: 4,
    name: "Đà Lạt",
    slug: "da-lat",
    price: "950.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const DestinationsSection = () => {
  return (
    <section className="container mx-auto px-6 py-16" id="destinations">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mb-8 flex items-end justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Điểm đến phổ biến
          </h2>
          <p className="mt-2 text-slate-500">
            Các chuyến bay được tìm kiếm nhiều nhất trong 24h qua
          </p>
        </div>
        <Link
          href="/destinations"
          className="flex items-center gap-1 font-semibold text-red-600 hover:underline"
        >
          Xem tất cả <FaArrowRight />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {destinationsData.map((dest,index) => (
          <Link
            key={dest.id}
            href={`/destinations/${dest.slug}`}
            className="group cursor-pointer"
          >
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative h-64 overflow-hidden rounded-2xl shadow-md"
            >
              {/* Lưu ý: Để tối ưu, nên dùng next/image thay cho thẻ img thường */}
              <Image
                src={dest.imageUrl}
                alt={dest.name}
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{dest.name}</h3>
                <p className="text-sm opacity-90">Từ {dest.price}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
