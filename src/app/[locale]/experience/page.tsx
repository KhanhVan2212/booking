"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaChair,
  FaUtensils,
  FaWifi,
  FaTv,
  FaWineGlass,
  FaBriefcase,
  FaArrowRight,
  FaStar,
} from "react-icons/fa6";
import Image from "next/image";

// --- DATA CÁC HẠNG GHẾ ---
const cabinClasses = [
  {
    id: "economy",
    name: "Hạng Phổ Thông",
    tagline: "Thoải mái & Tiện lợi",
    desc: "Tận hưởng hành trình bay thoải mái với ghế ngồi được thiết kế công thái học, chỗ để chân rộng rãi và hệ thống giải trí đa dạng. Phù hợp cho mọi chuyến đi.",
    features: [
      "Ghế ngả 110 độ",
      "Màn hình giải trí 10 inch",
      "Suất ăn nóng tiêu chuẩn",
      "Hành lý 23kg",
    ],
    image:
      "https://images.unsplash.com/photo-1542296332-2e44a996aaad?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "premium",
    name: "Phổ Thông Đặc Biệt",
    tagline: "Thêm không gian, thêm niềm vui",
    desc: "Nâng tầm trải nghiệm với không gian riêng tư hơn, ghế ngồi rộng hơn và ưu tiên làm thủ tục check-in. Lựa chọn hoàn hảo cho những chuyến bay dài.",
    features: [
      "Ưu tiên Check-in",
      "Ghế rộng hơn 20%",
      "Đồ uống chào mừng",
      "Hành lý 32kg",
    ],
    image:
      "https://images.unsplash.com/photo-1520183802803-06f731a2059f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "business",
    name: "Hạng Thương Gia",
    tagline: "Đẳng cấp & Riêng tư",
    desc: "Trải nghiệm sự sang trọng tuyệt đối với ghế ngả phẳng thành giường, lối đi riêng và ẩm thực thượng hạng chuẩn nhà hàng 5 sao.",
    features: [
      "Ghế ngả giường phẳng",
      "Phòng chờ hạng sang",
      "Ẩm thực 5 sao",
      "Lối đi riêng",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    // Lưu ý: Ảnh này mang tính minh họa chung, thực tế nên dùng ảnh cabin business cụ thể
  },
];

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <Image
            fill
            src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2000&auto=format&fit=crop"
            alt="Experience Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
        </div>

        <div className="container relative mx-auto flex h-full flex-col justify-center px-6 pt-20">
          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Hơn cả một chuyến bay, <br />
            là <span className="text-sky-400">trải nghiệm cảm xúc</span>
          </h1>
          <p className="animate-fade-in-up mb-8 max-w-xl text-lg text-slate-200 delay-100">
            SkyBooker cam kết mang đến sự thoải mái, tiện nghi và dịch vụ tận
            tâm nhất trên mỗi hành trình của bạn.
          </p>
        </div>
      </div>

      {/* 2. CABIN CLASSES (TAB INTERACTIVE) */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
              Hạng ghế
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-800">
              Lựa chọn phong cách bay của bạn
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="no-scrollbar mb-10 flex justify-center overflow-x-auto">
            <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              {cabinClasses.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`whitespace-nowrap rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                    activeTab === index
                      ? "bg-sky-600 text-white shadow-md"
                      : "text-slate-500 hover:bg-sky-50 hover:text-sky-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="group relative h-64 overflow-hidden lg:h-auto">
                <Image
                  src={cabinClasses[activeTab].image}
                  alt={cabinClasses[activeTab].name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Text Side */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex items-center gap-2 text-orange-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-slate-800">
                  {cabinClasses[activeTab].name}
                </h3>
                <p className="mb-6 text-lg font-medium text-sky-600">
                  {cabinClasses[activeTab].tagline}
                </p>
                <p className="mb-8 leading-relaxed text-slate-500">
                  {cabinClasses[activeTab].desc}
                </p>

                <div className="mb-8 grid grid-cols-2 gap-4">
                  {cabinClasses[activeTab].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 font-medium text-slate-700"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                        <FaChair className="text-sm" />{" "}
                        {/* Có thể đổi icon linh hoạt nếu muốn */}
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-8 py-3 font-bold text-white transition hover:bg-slate-800"
                >
                  Đặt vé ngay <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AMENITIES (GRID) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left: Text Content */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                Tiện ích trên không
              </span>
              <h2 className="mb-6 mt-2 text-3xl font-bold text-slate-800 md:text-4xl">
                Giải trí & Kết nối không giới hạn
              </h2>
              <p className="mb-8 text-lg text-slate-500">
                Thời gian bay sẽ trôi qua thật nhanh với hệ thống giải trí hàng
                đầu và kết nối internet tốc độ cao ngay trên độ cao 10.000m.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-xl text-purple-600">
                    <FaTv />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      SkyCinema
                    </h4>
                    <p className="mt-1 text-slate-500">
                      Kho phim bom tấn, phim truyền hình và âm nhạc mới nhất
                      được cập nhật liên tục.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-xl text-blue-600">
                    <FaWifi />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      Wi-Fi Tốc độ cao
                    </h4>
                    <p className="mt-1 text-slate-500">
                      Giữ kết nối với bạn bè, check mail hoặc lướt mạng xã hội
                      suốt hành trình.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-xl text-orange-600">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      Cổng sạc & Làm việc
                    </h4>
                    <p className="mt-1 text-slate-500">
                      Mỗi ghế ngồi đều trang bị cổng sạc USB và ổ cắm điện đa
                      năng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1540339832862-43d696ab153a?q=80&w=800&auto=format&fit=crop"
                width={500}
                height={500}
                className="h-64 w-full translate-y-8 transform rounded-2xl object-cover shadow-lg"
                alt="Entertainment"
              />
              <Image
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop"
                width={500}
                height={500}
                className="h-64 w-full rounded-2xl object-cover shadow-lg"
                alt="Wifi"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. DINING (PARALLAX OR BIG IMAGE) */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        {/* Background Decorative */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-sky-900/20 to-transparent"></div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-full bg-sky-500/20 blur-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1000&auto=format&fit=crop"
                width={500}
                height={500}
                alt="Fine Dining"
                className="relative mx-auto h-[400px] w-[400px] rounded-full border-8 border-white/5 object-cover shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-400">
                Ẩm thực trên mây
              </span>
              <h2 className="mb-6 mt-2 text-4xl font-bold">
                Hương vị tinh tế <br /> chuẩn nhà hàng 5 sao
              </h2>
              <p className="mb-8 text-lg text-slate-300">
                Được chế biến bởi các đầu bếp hàng đầu, thực đơn của SkyBooker
                là sự kết hợp hoàn hảo giữa ẩm thực truyền thống Việt Nam và
                tinh hoa ẩm thực thế giới.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <FaUtensils className="mb-4 text-3xl text-sky-400" />
                  <h4 className="text-xl font-bold">Thực đơn đa dạng</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    Tùy chọn suất ăn chay, ăn kiêng và thực đơn cho trẻ em.
                  </p>
                </div>
                <div>
                  <FaWineGlass className="mb-4 text-3xl text-sky-400" />
                  <h4 className="text-xl font-bold">Đồ uống thượng hạng</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    Bộ sưu tập rượu vang, cocktail và cà phê pha máy cao cấp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BOTTOM */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800">
            Sẵn sàng cho chuyến đi tiếp theo?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-500">
            Hãy để SkyBooker đồng hành cùng bạn trên mọi nẻo đường. Đặt vé ngay
            hôm nay để nhận ưu đãi hấp dẫn.
          </p>
          <Link
            href="/"
            className="inline-block transform rounded-full bg-sky-600 px-10 py-4 font-bold text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-1 hover:bg-sky-700"
          >
            Tìm chuyến bay ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
