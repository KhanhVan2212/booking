// components/FlashDealsSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaClock } from "react-icons/fa6";
import { FlashDealsSectionData } from "@/types/landing-page.types";

interface FlashDealsSectionProps {
  data: FlashDealsSectionData;
}

const FlashDealsSection: React.FC<FlashDealsSectionProps> = ({ data }) => {
  return (
    <section className="container relative z-10 mx-auto px-6 py-16">
      <div className="mb-8 flex flex-col items-end justify-between gap-4 md:flex-row">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-800 md:text-3xl">
            {data.title}
          </h2>
          <p className="mt-2 text-slate-500">{data.description}</p>
        </div>
        {data.viewAllLink && (
          <Link
            href={data.viewAllLink}
            className="flex items-center gap-1 font-semibold text-red-600 hover:underline"
          >
            Xem tất cả deal <FaArrowRight />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.deals.map((deal) => (
          <div
            key={deal.id}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.to}
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                <FaClock /> {deal.timeLeft}
              </div>
            </div>
            <div className="p-5">
              <div className="mb-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {deal.from} <FaArrowRight className="mx-1 inline text-xs" />{" "}
                    {deal.to}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-800">
                    Vé một chiều
                  </h3>
                </div>
              </div>

              <div className="flex items-end justify-between border-t border-dashed border-slate-100 pt-4">
                <div>
                  <p className="text-xs text-slate-400 line-through">
                    {deal.oldPrice}
                  </p>
                  <p className="text-2xl font-bold leading-none text-red-600">
                    {deal.price}
                  </p>
                </div>
                <Link
                  href={deal.link || "/flights"}
                  className="rounded-lg bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
                >
                  Đặt ngay
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashDealsSection;
