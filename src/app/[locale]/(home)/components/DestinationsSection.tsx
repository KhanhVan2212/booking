// components/DestinationsSection.tsx
"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Destination {
  id: string;
  name: string;
  slug: string;
  region: "domestic" | "international";
  description?: string;
  imageUrl?: string;
  featuredImage?: any;
  price: string;
}

const DestinationsSection = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/destinations?featured=true&limit=4");
        const data = await response.json();

        if (data.success && data.destinations) {
          setDestinations(data.destinations);
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const getImageUrl = (dest: Destination): string => {
    if (dest.imageUrl) return dest.imageUrl;
    if (dest.featuredImage) {
      if (typeof dest.featuredImage === "string") return `/media/${dest.featuredImage}`;
      if (dest.featuredImage.url) return dest.featuredImage.url;
    }
    return "/images/placeholder.jpg";
  };

  if (loading) {
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải địa điểm nổi bật...</p>
        </div>
      </section>
    );
  }

  if (destinations.length === 0) {
    return null; // Không hiển thị gì nếu không có destinations
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold text-slate-800">
          Điểm đến nổi bật
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Khám phá những địa điểm du lịch hấp dẫn nhất với giá vé tốt nhất
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {/* Link theo ID thay vì slug */}
            <Link href={`/destinations/${dest.id}`}>
              <div className="relative h-80 overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md">
                <Image
                  src={getImageUrl(dest)}
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
                    <FaLocationDot className="text-red-500" />
                    {dest.description || "Khám phá ngay"}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Link
          href="/destinations"
          className="inline-block rounded-xl bg-red-600 px-8 py-4 font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700"
        >
          Xem tất cả địa điểm
        </Link>
      </motion.div>
    </section>
  );
};

export default DestinationsSection;