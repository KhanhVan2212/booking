// components/AllDestinations.tsx
"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

interface Destination {
  id: number;
  name: string;
  slug: string;
  region: "domestic" | "international";
  description: string;
  imageUrl: string;
  price: string;
}

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
    imageUrl:
      "https://images.unsplash.com/photo-1506665531195-3566afe2be3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 1.500.000 VNĐ",
  },
  {
    id: 3,
    name: "Sapa",
    slug: "sapa",
    region: "domestic",
    description: "Thành phố trong sương",
    imageUrl:
      "https://images.unsplash.com/photo-1570698472551-6826c854123c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 1.100.000 VNĐ",
  },
  // Miền Trung
  {
    id: 4,
    name: "Đà Nẵng",
    slug: "da-nang",
    region: "domestic",
    description: "Thành phố đáng sống",
    imageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 990.000 VNĐ",
  },
  {
    id: 5,
    name: "Hội An",
    slug: "hoi-an",
    region: "domestic",
    description: "Phố cổ bình yên",
    imageUrl:
      "https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 890.000 VNĐ",
  },
  {
    id: 6,
    name: "Huế",
    slug: "hue",
    region: "domestic",
    description: "Cố đô trầm mặc",
    imageUrl:
      "https://images.unsplash.com/photo-1587848692797-4cc521d55694?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Từ 1.050.000 VNĐ",
  },
  {
    id: 7,
    name: "Nha Trang",
    slug: "nha-trang",
    region: "domestic",
    description: "Hòn ngọc viễn đông",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
];

const AllDestinations = () => {
  const [filter, setFilter] = useState<"all" | "domestic" | "international">(
    "all",
  );

  const filteredDestinations = allDestinations.filter(
    (dest) => filter === "all" || dest.region === filter,
  );

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Filter Tabs */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-xl bg-slate-100 p-1">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${filter === "all" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter("domestic")}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${filter === "domestic" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Trong nước
          </button>
          <button
            onClick={() => setFilter("international")}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${filter === "international" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Quốc tế
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredDestinations.map((dest) => (
          <div key={dest.id} className="group cursor-pointer">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllDestinations;
