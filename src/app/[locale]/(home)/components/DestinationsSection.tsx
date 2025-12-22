"use client";

import Link from 'next/link';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

// Định nghĩa kiểu dữ liệu cho một địa điểm
interface Destination {
  id: string;
  name: string;
  slug: string;
  price: string;
  imageUrl: string;
  featured?: boolean;
}

const DestinationsSection = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      // Lấy destinations featured hoặc limit 4 cái đầu tiên
      const response = await fetch('/api/destinations?featured=true&limit=4');
      const data = await response.json();

      if (data.success) {
        setDestinations(data.destinations);
      }
    } catch (error) {
      console.error('Error fetching destinations:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="container mx-auto px-6 py-16" id="destinations">
        <div className="text-center text-gray-600">Đang tải...</div>
      </section>
    );
  }

  if (destinations.length === 0) {
    return null; // Không hiển thị section nếu không có destinations
  }

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
        {destinations.map((dest, index) => (
          <Link
            key={dest.id}
            href={`/destinations/${dest.slug}`}
            className="group cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative h-64 overflow-hidden rounded-2xl shadow-md"
            >
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