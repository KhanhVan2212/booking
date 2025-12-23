// components/InspirationSection.tsx
"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl?: string;
  featuredImage?: any;
  readTime: string;
  createdAt: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  "dia-diem": "Địa điểm",
  "kinh-nghiem": "Kinh nghiệm",
  "am-thuc": "Ẩm thực",
  "cam-nang": "Cẩm nang",
  "tin-tuc": "Tin tức",
};

const InspirationSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs?featured=true&limit=3");
        const data = await response.json();

        if (data.success && data.blogs) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const getImageUrl = (blog: Blog): string => {
    if (blog.imageUrl) return blog.imageUrl;
    if (blog.featuredImage) {
      if (typeof blog.featuredImage === "string") return `/media/${blog.featuredImage}`;
      if (blog.featuredImage.url) return blog.featuredImage.url;
    }
    return "/images/placeholder.jpg";
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day} Th${month}`;
  };

  if (loading) {
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải bài viết...</p>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null; // Không hiển thị section nếu không có bài viết
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mb-10 flex items-end justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Cảm hứng du lịch
          </h2>
          <p className="mt-2 text-slate-500">
            Khám phá những điểm đến mới và mẹo du lịch hữu ích
          </p>
        </div>
        <Link
          href="/inspiration"
          className="flex items-center gap-1 font-semibold text-red-600 hover:underline"
        >
          Xem blog <FaArrowRight />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link
              href={`/inspiration/${blog.id}`}
              className="group"
            >
              <div className="relative mb-4 h-64 overflow-hidden rounded-2xl shadow-sm">
                <Image
                  width={800}
                  height={600}
                  src={getImageUrl(blog)}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">
                  {CATEGORY_LABELS[blog.category] || blog.category}
                </div>
              </div>
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                <span>{formatDate(blog.createdAt)}</span> • <span>{blog.readTime}</span>
              </div>
              <h3 className="text-xl font-bold leading-snug text-slate-800 transition group-hover:text-red-600">
                {blog.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;