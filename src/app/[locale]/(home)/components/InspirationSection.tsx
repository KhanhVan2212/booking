// components/InspirationSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { InspirationSectionData } from "@/types/landing-page.types";

interface InspirationSectionProps {
  data: InspirationSectionData;
}

const InspirationSection: React.FC<InspirationSectionProps> = ({ data }) => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            {data.title}
          </h2>
          <p className="mt-2 text-slate-500">{data.description}</p>
        </div>
        {data.viewAllLink && (
          <Link
            href={data.viewAllLink}
            className="flex items-center gap-1 font-semibold text-red-600 hover:underline"
          >
            Xem blog <FaArrowRight />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {data.blogs.map((blog) => (
          <Link key={blog.id} href={blog.link || "#"} className="group">
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
              <span>{blog.date}</span> • <span>{blog.readTime || "5 phút đọc"}</span>
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
