// components/AllDestinations.tsx
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

const ITEMS_PER_PAGE = 12;

const AllDestinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "domestic" | "international">("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch destinations from API
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/destinations");
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

  // Get image URL from destination
  const getImageUrl = (dest: Destination): string => {
    if (dest.imageUrl) return dest.imageUrl;
    if (dest.featuredImage) {
      if (typeof dest.featuredImage === "string") return `/media/${dest.featuredImage}`;
      if (dest.featuredImage.url) return dest.featuredImage.url;
    }
    return "/images/placeholder.jpg";
  };

  const filteredDestinations = destinations.filter(
    (dest) => filter === "all" || dest.region === filter,
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDisplayDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleFilterChange = (newFilter: "all" | "domestic" | "international") => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading state
  if (loading) {
    return (
      <section className="container mx-auto px-6 py-12">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải địa điểm...</p>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (destinations.length === 0) {
    return (
      <section className="container mx-auto px-6 py-12">
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Chưa có địa điểm nào.</p>
          <p className="mt-2 text-gray-400">Hãy quay lại sau nhé!</p>
        </div>
      </section>
    );
  }

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
            Tất cả ({destinations.length})
          </button>
          <button
            onClick={() => handleFilterChange("domestic")}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${filter === "domestic" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Trong nước ({destinations.filter(d => d.region === "domestic").length})
          </button>
          <button
            onClick={() => handleFilterChange("international")}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${filter === "international" ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Quốc tế ({destinations.filter(d => d.region === "international").length})
          </button>
        </div>
      </motion.div>

      {/* Results count */}
      {filter !== "all" && (
        <div className="mb-6 text-center text-sm text-gray-600">
          Hiển thị {filteredDestinations.length} địa điểm
        </div>
      )}

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
            <Link href={`/destinations/${dest.id}`}>
              <div className="relative h-72 overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md">
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

      {/* Empty filter result */}
      {filteredDestinations.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Không tìm thấy địa điểm nào.</p>
          <button
            onClick={() => handleFilterChange("all")}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Xem tất cả
          </button>
        </div>
      )}

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