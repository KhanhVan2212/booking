// components/InspirationSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const blogs = [
  {
    id: 1,
    title: 'Top 10 địa điểm check-in "cháy máy" tại Phú Quốc 2023',
    category: "Điểm đến",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    date: "12 Th10",
  },
  {
    id: 2,
    title: "Kinh nghiệm săn vé máy bay Tết giá rẻ không phải ai cũng biết",
    category: "Bí kíp",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    date: "05 Th10",
  },
  {
    id: 3,
    title: "Khám phá ẩm thực đường phố Đà Nẵng chỉ với 200k",
    category: "Ẩm thực",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    date: "28 Th09",
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
          href="#"
          className="flex items-center gap-1 font-semibold text-sky-600 hover:underline"
        >
          Xem blog <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <Link key={blog.id} href="#" className="group">
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
            <h3 className="text-xl font-bold leading-snug text-slate-800 transition group-hover:text-sky-600">
              {blog.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
