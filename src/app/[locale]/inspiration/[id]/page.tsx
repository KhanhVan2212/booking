// app/[locale]/inspiration/[id]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { use, useState, useEffect } from "react";
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft } from "react-icons/fa";
import ContactSection from "../../about/components/ContactSection";

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl?: string;
  featuredImage?: any;
  excerpt?: string;
  content: any;
  author: string;
  readTime: string;
  tags?: Array<{ tag: string }>;
  createdAt: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  "dia-diem": "Địa điểm",
  "kinh-nghiem": "Kinh nghiệm",
  "am-thuc": "Ẩm thực",
  "cam-nang": "Cẩm nang",
  "tin-tuc": "Tin tức",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BlogDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();

        if (data.success && data.blog) {
          setBlog(data.blog);
        } else {
          setError("Không tìm thấy bài viết");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Có lỗi xảy ra khi tải bài viết");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const getImageUrl = (blog: Blog): string => {
    if (blog.imageUrl) return blog.imageUrl;
    if (blog.featuredImage) {
      if (typeof blog.featuredImage === "string") return `/media/${blog.featuredImage}`;
      if (blog.featuredImage.url) return blog.featuredImage.url;
    }
    return "/images/placeholder.jpg";
  };

  const getContentText = (content: any): string => {
    if (!content) return "";
    if (typeof content === "string") return content;

    if (content.root?.children) {
      return content.root.children
        .map((node: any) => {
          if (node.children) {
            return node.children.map((child: any) => child.text || "").join("");
          }
          return "";
        })
        .join("\n\n");
    }

    return "";
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white pt-[50px] sm:pt-[100px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải bài viết...</p>
        </div>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="min-h-screen bg-white pt-[50px] sm:pt-[100px] flex items-center justify-center">
        <div className="text-center py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">😢 Oops!</h2>
          <p className="text-gray-600 mb-6">{error || "Không tìm thấy bài viết"}</p>
          <Link
            href="/inspiration"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Quay lại danh sách
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-[50px] sm:pt-[100px]">
      {/* Header Image */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={getImageUrl(blog)}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container absolute inset-0 mx-auto flex flex-col justify-end p-6 pb-20">
          <Link
            href="/inspiration"
            className="mb-6 inline-flex w-fit items-center gap-2 text-white/80 transition hover:text-white"
          >
            <FaArrowLeft /> Quay lại
          </Link>
          <span className="mb-4 inline-block w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase text-white">
            {CATEGORY_LABELS[blog.category] || blog.category}
          </span>
          <h1 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">
            {blog.title}
          </h1>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <FaUser /> {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> {formatDate(blog.createdAt)}
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> {blog.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-12">
        {/* Excerpt */}
        {blog.excerpt && (
          <div className="mb-8 text-xl text-gray-600 italic border-l-4 border-red-600 pl-4">
            {blog.excerpt}
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-lg prose-slate max-w-none whitespace-pre-line">
          {getContentText(blog.content)}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  #{item.tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <ContactSection />
    </main>
  );
}