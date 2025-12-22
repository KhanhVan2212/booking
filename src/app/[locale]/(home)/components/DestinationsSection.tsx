"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Media {
  id: string;
  url: string;
  filename: string;
  alt?: string;
}

interface Destination {
  id: string;
  name: string;
  slug: string;
  price: string;
  image?: string | Media;        // giữ lại cho tương thích cũ
  imageUrl?: string;
  featuredImage?: any;           // thêm dòng này để hỗ trợ upload file
  featured: boolean;
}

// Thêm hàm này vào trong component hoặc ngoài cũng được
const getImageUrl = (destination: Destination): string => {
  // Ưu tiên imageUrl (nếu dùng URL trực tiếp)
  if (destination.imageUrl) {
    return destination.imageUrl;
  }

  // Xử lý featuredImage (khi upload file)
  if (destination.image || destination.featuredImage) {
    const media = destination.image || destination.featuredImage;

    if (typeof media === 'string') {
      // Nếu là ID hoặc filename
      return `/media/${media}`;
    }

    if (media && typeof media === 'object') {
      if (media.url) return media.url;
      if (media.filename) return `/media/${media.filename}`;
      if (media.id) return `/media/${media.id}`; // một số trường hợp backend trả id
    }
  }

  return '/images/placeholder.jpg';
};

const DestinationsSection = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("/api/destinations?featured=true&limit=4");
        const data = await response.json();

        if (data.success) {
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

  if (loading) {
    return (
      <section className="container mx-auto px-6 py-16" id="destinations">
        <div className="text-center">Đang tải...</div>
      </section>
    );
  }

  if (destinations.length === 0) {
    return null;
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
        {destinations.map((dest, index) => {
          const imageUrl = getImageUrl(dest);

          return (
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
                  src={imageUrl}
                  alt={dest.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{dest.name}</h3>
                  <p className="text-sm opacity-90">Từ {dest.price}</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default DestinationsSection;