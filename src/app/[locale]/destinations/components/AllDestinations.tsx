// components/AllDestinations.tsx
"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Destination {
  id: number;
  name: string;
  slug: string;
  region: "domestic" | "international";
  description: string;
  imageUrl: string;
  price: string;
}

// Dummy Data
const allDestinations: Destination[] = [
  // Miền Bắc
  {
    id: 1,
    name: "Hà Nội",
    slug: "ha-noi",
    region: "domestic",
    description: "Thủ đô ngàn năm văn hiến",
    imageUrl:
      "https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 1.200.000 VNĐ",
  },
  {
    id: 2,
    name: "Hạ Long",
    slug: "ha-long",
    region: "domestic",
    description: "Kỳ quan thiên nhiên thế giới",
    imageUrl: "/images/du-lich-ha-long.webp",
    price: "Từ 1.500.000 VNĐ",
  },
  {
    id: 3,
    name: "Sapa",
    slug: "sapa",
    region: "domestic",
    description: "Thành phố trong sương",
    imageUrl: "/images/du-lich-sapa.png",
    price: "Từ 1.100.000 VNĐ",
  },
  // Miền Trung
  {
    id: 4,
    name: "Đà Nẵng",
    slug: "da-nang",
    region: "domestic",
    description: "Thành phố đáng sống",
    imageUrl: "/images/du-lich-da-nang.jpg",
    price: "Từ 990.000 VNĐ",
  },
  {
    id: 5,
    name: "Hội An",
    slug: "hoi-an",
    region: "domestic",
    description: "Phố cổ bình yên",
    imageUrl: "/images/du-lich-hoi-an.png",
    price: "Từ 890.000 VNĐ",
  },
  {
    id: 6,
    name: "Huế",
    slug: "hue",
    region: "domestic",
    description: "Cố đô trầm mặc",
    imageUrl: "/images/du-lich-hue.jpg",
    price: "Từ 1.050.000 VNĐ",
  },
  {
    id: 7,
    name: "Nha Trang",
    slug: "nha-trang",
    region: "domestic",
    description: "Hòn ngọc viễn đông",
    imageUrl: "/images/du-lich-nha-trang.jpg",
    price: "Từ 1.300.000 VNĐ",
  },
  // Miền Nam
  {
    id: 8,
    name: "Hồ Chí Minh",
    slug: "ho-chi-minh",
    region: "domestic",
    description: "Thành phố mang tên Bác",
    imageUrl:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 1.200.000 VNĐ",
  },
  {
    id: 9,
    name: "Phú Quốc",
    slug: "phu-quoc",
    region: "domestic",
    description: "Đảo ngọc thiên đường",
    imageUrl: "/images/du-lich-phu-quoc.png",
    price: "Từ 1.600.000 VNĐ",
  },
  // Quốc tế
  {
    id: 10,
    name: "Bangkok",
    slug: "bangkok",
    region: "international",
    description: "Thái Lan",
    imageUrl:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 2.500.000 VNĐ",
  },
  {
    id: 11,
    name: "Singapore",
    slug: "singapore",
    region: "international",
    description: "Đảo quốc sư tử",
    imageUrl:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 3.200.000 VNĐ",
  },
  {
    id: 12,
    name: "Seoul",
    slug: "seoul",
    region: "international",
    description: "Hàn Quốc",
    imageUrl:
      "https://images.unsplash.com/photo-1578637387939-43c525550085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 5.500.000 VNĐ",
  },
  {
    id: 13,
    name: "Tokyo",
    slug: "tokyo",
    region: "international",
    description: "Nhật Bản",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 8.900.000 VNĐ",
  },
  {
    id: 14,
    name: "Đài Bắc",
    slug: "taipei",
    region: "international",
    description: "Đài Loan",
    imageUrl:
      "https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 4.200.000 VNĐ",
  },
  {
    id: 15,
    name: "Osaka",
    slug: "osaka",
    region: "international",
    description: "Nhật Bản",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 9.200.000 VNĐ",
  },
  {
    id: 16,
    name: "Busan",
    slug: "busan",
    region: "international",
    description: "Hàn Quốc",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 5.100.000 VNĐ",
  },
  {
    id: 17,
    name: "Bali",
    slug: "bali",
    region: "international",
    description: "Indonesia",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 3.800.000 VNĐ",
  },
  {
    id: 18,
    name: "Phuket",
    slug: "phuket",
    region: "international",
    description: "Thái Lan",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 3.100.000 VNĐ",
  },
];

const ITEMS_PER_PAGE = 12;

const AllDestinations = () => {
  const [filter, setFilter] = useState<"all" | "domestic" | "international">(
    "all",
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDestinations = allDestinations.filter(
    (dest) => filter === "all" || dest.region === filter,
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDisplayDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleFilterChange = (
    newFilter: "all" | "domestic" | "international",
  ) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="mb-8 flex justify-center"
      >
        <div className="inline-flex rounded-xl bg-slate-100 p-1">
          <button
            onClick={() => handleFilterChange("all")}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${filter === "all" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Tất cả
          </button>
          <button
            onClick={() => handleFilterChange("domestic")}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${filter === "domestic" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Trong nước
          </button>
          <button
            onClick={() => handleFilterChange("international")}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${filter === "international" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Quốc tế
          </button>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentDisplayDestinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <Link href={`/destinations/${dest.slug}`}>
              <div className="relative h-72 overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md">
                <Image
                  src={dest.imageUrl}
                  alt={dest.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition group-hover:opacity-100"></div>

                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">
                  {dest.region === "domestic" ? "Trong nước" : "Quốc tế"}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <div className="mb-2 flex items-center gap-1 text-xs opacity-90">
                    <FaLocationDot className="text-red-500" />{" "}
                    {dest.description}
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-white/20 pt-3">
                    <span className="text-sm">Giá vé khứ hồi</span>
                    <span className="font-bold text-red-400">{dest.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex h-10 items-center justify-center rounded-lg border px-4 transition-colors ${
              currentPage === 1
                ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-red-600"
            }`}
          >
            Trước
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`h-10 w-10 rounded-lg shadow-sm transition-all ${
                currentPage === page
                  ? "bg-red-600 text-white shadow-lg hover:bg-red-700"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-10 items-center justify-center rounded-lg border px-4 transition-colors ${
              currentPage === totalPages
                ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-red-600"
            }`}
          >
            Tiếp
          </button>
        </div>
      )}
    </section>
  );
};

export default AllDestinations;
