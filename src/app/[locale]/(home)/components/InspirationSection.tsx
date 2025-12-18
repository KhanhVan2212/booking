// components/InspirationSection.tsx
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const blogs = [
  {
    id: 1,
    title: "10 Địa điểm check-in không thể bỏ qua tại Đà Nẵng",
    slug: "10-dia-diem-check-in-da-nang",
    category: "Địa điểm",
    image:
      "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80",
    date: "15 Th12",
  },
  {
    id: 2,
    title: "Kinh nghiệm du lịch Thái Lan tự túc cho người mới",
    slug: "kinh-nghiem-du-lich-thai-lan",
    category: "Kinh nghiệm",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    date: "10 Th12",
  },
  {
    id: 3,
    title: "Top 5 món ăn đường phố nhất định phải thử ở Hà Nội",
    slug: "top-5-mon-an-duong-pho-ha-noi",
    category: "Ẩm thực",
    image:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=800&q=80",
    date: "05 Th12",
  },
];

const InspirationSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
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
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/inspiration/${blog.slug}`}
            className="group"
          >
            <div className="relative mb-4 h-64 overflow-hidden rounded-2xl shadow-sm">
              <Image
                width={800}
                height={600}
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">
                {blog.category}
              </div>
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
              <span>{blog.date}</span> • <span>5 phút đọc</span>
            </div>
            <h3 className="text-xl font-bold leading-snug text-slate-800 transition group-hover:text-red-600">
              {blog.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
