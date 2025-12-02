"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaTags,
  FaPlane,
  FaCreditCard,
  FaHotel,
  FaCopy,
  FaCheck,
  FaArrowRight,
  FaPercent,
} from "react-icons/fa6";
import Image from "next/image";

// --- MOCK DATA ---
const categories = [
  { id: "all", name: "Tất cả", icon: <FaTags /> },
  { id: "flight", name: "Vé máy bay", icon: <FaPlane /> },
  { id: "bank", name: "Đối tác ngân hàng", icon: <FaCreditCard /> },
  { id: "hotel", name: "Combo du lịch", icon: <FaHotel /> },
];

const offersData = [
  {
    id: 1,
    type: "flight",
    title: "Chào Thu Vàng - Giảm ngay 50%",
    desc: "Áp dụng cho tất cả các chặng bay nội địa Vietnam Airlines. Thời gian bay từ tháng 9 - tháng 11.",
    code: "THUVANG50",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    expiry: "30/11/2023",
    tag: "HOT",
  },
  {
    id: 2,
    type: "bank",
    title: "Hoàn tiền 200K cho chủ thẻ VISA",
    desc: "Nhập mã khi thanh toán bằng thẻ VISA quốc tế cho hóa đơn từ 2 triệu đồng.",
    code: "VISASKY",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    expiry: "31/12/2023",
    tag: null,
  },
  {
    id: 3,
    type: "flight",
    title: "Bay Quốc Tế - Đi là thích",
    desc: "Giảm 15% cho các chặng bay đi Nhật Bản, Hàn Quốc và Đài Loan. Không giới hạn hãng bay.",
    code: "QUOCTE15",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
    expiry: "15/10/2023",
    tag: "Mới",
  },
  {
    id: 4,
    type: "hotel",
    title: "Combo Đà Nẵng 3N2Đ chỉ 2.990k",
    desc: "Bao gồm vé máy bay khứ hồi VietJet Air + Khách sạn 4 sao gần biển Mỹ Khê.",
    code: "COMBO299",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1000&auto=format&fit=crop",
    expiry: "Số lượng có hạn",
    tag: null,
  },
  {
    id: 5,
    type: "bank",
    title: "Thứ 6 vui vẻ cùng VIB",
    desc: "Giảm 10% tối đa 500k khi thanh toán bằng thẻ tín dụng VIB vào mỗi thứ 6 hàng tuần.",
    code: "VIBFRIDAY",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1000&auto=format&fit=crop",
    expiry: "Vô thời hạn",
    tag: null,
  },
  {
    id: 6,
    type: "flight",
    title: "Ưu đãi nhóm: Đi 4 tính tiền 3",
    desc: "Áp dụng cho nhóm 4 người đặt vé hạng Phổ thông tiêu chuẩn chặng bay Hà Nội - Phú Quốc.",
    code: "GROUP4",
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1000&auto=format&fit=crop",
    expiry: "20/12/2023",
    tag: "Tiết kiệm",
  },
];

// --- COMPONENT: COPY BUTTON ---
const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition-all ${
        copied
          ? "border-green-200 bg-green-50 text-green-600"
          : "border-slate-200 bg-slate-100 text-slate-600 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
      }`}
    >
      {copied ? (
        <>
          <FaCheck /> Đã sao chép
        </>
      ) : (
        <>
          <FaCopy /> {code}
        </>
      )}
    </button>
  );
};

export default function OffersPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter Logic
  const filteredOffers =
    activeCategory === "all"
      ? offersData
      : offersData.filter((item) => item.type === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 to-blue-800 py-16 text-white md:py-24">
        {/* Decorative Circles */}
        <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/4 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <span className="animate-fade-in-up mb-6 inline-block rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-bold text-sky-100 backdrop-blur-sm">
            <FaPercent className="mr-1 inline text-xs" /> Ưu đãi độc quyền
          </span>
          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold delay-100 md:text-6xl">
            Săn vé rẻ, <br />{" "}
            <span className="text-sky-300">Vi vu thỏa thích</span>
          </h1>
          <p className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg text-sky-100 delay-200">
            Tổng hợp các mã giảm giá, khuyến mãi vé máy bay và khách sạn mới
            nhất. Cập nhật hàng ngày giúp bạn tiết kiệm tối đa cho mọi chuyến
            đi.
          </p>

          {/* Search Bar giả lập để tìm ưu đãi */}
          <div className="animate-fade-in-up relative mx-auto max-w-xl delay-300">
            <input
              type="text"
              placeholder="Tìm kiếm ưu đãi (VD: Vietjet, Visa...)"
              className="w-full rounded-full py-4 pl-6 pr-14 text-slate-800 shadow-xl outline-none transition focus:ring-4 focus:ring-sky-400/30"
            />
            <button className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white transition hover:bg-sky-700">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container relative z-20 mx-auto -mt-10 px-6 py-12">
        {/* Categories Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex transform items-center gap-2 rounded-full px-6 py-3 font-bold shadow-md transition-all hover:-translate-y-1 ${
                activeCategory === cat.id
                  ? "bg-white text-sky-600 ring-2 ring-sky-600"
                  : "bg-white text-slate-500 hover:text-sky-600"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Grid Offers */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredOffers.map((item) => (
            <div
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                {/* Tags */}
                <div className="absolute left-4 top-4 flex gap-2">
                  {item.tag && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold text-white ${
                        item.tag === "HOT" ? "bg-red-600" : "bg-orange-500"
                      }`}
                    >
                      {item.tag}
                    </span>
                  )}
                  <span className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">
                    {item.type === "flight" ? (
                      <FaPlane />
                    ) : item.type === "hotel" ? (
                      <FaHotel />
                    ) : (
                      <FaCreditCard />
                    )}
                    {item.type === "flight"
                      ? "Vé máy bay"
                      : item.type === "hotel"
                        ? "Combo"
                        : "Ngân hàng"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 line-clamp-2 text-xl font-bold text-slate-800 transition group-hover:text-sky-600">
                  {item.title}
                </h3>
                <p className="mb-6 line-clamp-3 flex-1 text-sm text-slate-500">
                  {item.desc}
                </p>

                {/* Code Area */}
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-slate-400">
                      Mã ưu đãi
                    </span>
                    <span className="text-xs text-slate-400">
                      HSD: {item.expiry}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-lg font-bold tracking-wider text-sky-700">
                      {item.code}
                    </span>
                    <CopyButton code={item.code} />
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/"
                  className="block w-full rounded-xl bg-sky-600 py-3 text-center font-bold text-white transition hover:bg-sky-700"
                >
                  Dùng ngay
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredOffers.length === 0 && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-3xl text-slate-400">
              <FaTags />
            </div>
            <h3 className="text-xl font-bold text-slate-700">
              Chưa có ưu đãi nào
            </h3>
            <p className="text-slate-500">
              Hiện tại mục này đang được cập nhật. Vui lòng quay lại sau.
            </p>
          </div>
        )}
      </div>

      {/* 3. NEWSLETTER SECTION */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-red-100 text-2xl text-red-500">
              Gift
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-800">
              Không bỏ lỡ bất kỳ ưu đãi nào!
            </h2>
            <p className="mb-8 text-slate-500">
              Đăng ký nhận bản tin để là người đầu tiên biết về các chương trình
              khuyến mãi vé máy bay 0 đồng và voucher khách sạn.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                className="flex-1 rounded-xl border border-slate-200 px-6 py-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button className="whitespace-nowrap rounded-xl bg-slate-800 px-8 py-4 font-bold text-white transition hover:bg-slate-900">
                Đăng ký nhận tin
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Chúng tôi cam kết không spam. Bạn có thể hủy đăng ký bất cứ lúc
              nào.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
