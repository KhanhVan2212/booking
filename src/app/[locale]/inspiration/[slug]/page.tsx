"use client";

import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft } from "react-icons/fa";
import ContactSection from "../../about/components/ContactSection";

// Mock data fetcher (ideally this would be a shared service)
const getBlogPost = (slug: string) => {
  // In a real app, you'd fetch this from an API or CMS
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: title,
    image:
      "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80", // Using a generic placeholder for dynamic lookup
    author: "Admin",
    date: "18 Tháng 12, 2024",
    readTime: "5 phút",
    category: "Cảm hứng",
    content: `
      <p>Đây là nội dung chi tiết của bài viết <strong>${title}</strong>. Trong thực tế, nội dung này sẽ được lấy từ cơ sở dữ liệu (CMS) hoặc file markdown.</p>
      
      <h3>1. Khám phá vẻ đẹp tiềm ẩn</h3>
      <p>Mỗi chuyến đi là một trải nghiệm mới mẻ. Hãy mở lòng để đón nhận những điều tuyệt vời mà thiên nhiên ban tặng. Đừng ngần ngại thử những điều mới lạ, từ món ăn đường phố đến những con đường nhỏ chưa ai đặt chân tới.</p>
      
      <h3>2. Lên kế hoạch chi tiết</h3>
      <p>Một chuyến đi thành công thường bắt đầu từ một kế hoạch cụ thể. Tuy nhiên, cũng đừng quá cứng nhắc, hãy để dành chỗ cho những bất ngờ thú vị.</p>
      
      <h3>3. Kết nối với người dân địa phương</h3>
      <p>Cách tốt nhất để hiểu về một vùng đất là trò chuyện với những người sống ở đó. Họ sẽ kể cho bạn nghe những câu chuyện mà không sách báo nào viết.</p>
      
      <p>Chúc bạn có những chuyến đi đầy ắp kỷ niệm!</p>
    `,
  };
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const post = getBlogPost(slug);

  return (
    <main className="min-h-screen bg-white pt-[50px] sm:pt-[100px]">
      {/* Header Image */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={post.image}
          alt={post.title}
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
            {post.category}
          </span>
          <h1 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <FaUser /> {post.author}
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> {post.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <div
          className="prose prose-lg prose-slate max-w-none first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-red-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <ContactSection />
    </main>
  );
}
