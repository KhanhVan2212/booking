// components/FlashDealsSection.tsx
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaBolt, FaClock } from "react-icons/fa6";

const deals = [
  {
    id: 1,
    from: "Hà Nội",
    to: "Nha Trang",
    price: "499.000đ",
    oldPrice: "1.200.000đ",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    timeLeft: "Còn 2 ngày",
  },
  {
    id: 2,
    from: "TP. HCM",
    to: "Phú Quốc",
    price: "599.000đ",
    oldPrice: "1.500.000đ",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    timeLeft: "Còn 12 giờ",
  },
  {
    id: 3,
    from: "Đà Nẵng",
    to: "Hà Nội",
    price: "399.000đ",
    oldPrice: "980.000đ",
    image:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=800&auto=format&fit=crop",
    timeLeft: "Còn 5 ngày",
  },
];

const FlashDealsSection = () => {
  return (
    <section className="container relative z-10 mx-auto px-6 py-16">
      <div className="mb-8 flex flex-col items-end justify-between gap-4 md:flex-row">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-800 md:text-3xl">
            <FaBolt className="text-orange-500" /> Ưu đãi chớp nhoáng
          </h2>
          <p className="mt-2 text-slate-500">
            Săn vé giá rẻ giờ vàng - Số lượng có hạn!
          </p>
        </div>
        <Link
          href="/offers"
          className="flex items-center gap-1 font-semibold text-sky-600 hover:underline"
        >
          Xem tất cả deal <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={deal.image}
                alt={deal.to}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">
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
                  <p className="text-2xl font-bold leading-none text-orange-600">
                    {deal.price}
                  </p>
                </div>
                <Link
                  href="/flights"
                  className="rounded-lg bg-sky-50 px-4 py-2 text-sm font-bold text-sky-600 transition hover:bg-sky-600 hover:text-white"
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
