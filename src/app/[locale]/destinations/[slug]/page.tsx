"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { use } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlane } from "react-icons/fa";
import DestinationsSection from "../../(home)/components/DestinationsSection";
import ContactSection from "../../about/components/ContactSection";

// Dummy data generator (in a real app this would be fetched from API/CMS)
const getDestinationData = (slug: string) => {
  // Common data
  const baseData = {
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: `Khám phá vẻ đẹp tuyệt vời của ${slug.replace("-", " ")}. Một điểm đến không thể bỏ qua với những trải nghiệm văn hóa và ẩm thực độc đáo.`,
    imageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    bestTime: "Tháng 3 - Tháng 8",
    flightTime: "1 giờ 15 phút",
  };

  // Override specific data based on slug if needed
  if (slug === "da-nang") {
    return {
      ...baseData,
      title: "Đà Nẵng - Thành phố đáng sống",
      imageUrl:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    };
  }
  if (slug === "hoi-an") {
    return {
      ...baseData,
      title: "Hội An - Phố cổ bình yên",
      imageUrl:
        "https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    };
  }
  if (slug === "phu-quoc") {
    return {
      ...baseData,
      title: "Phú Quốc - Đảo Ngọc",
      imageUrl:
        "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    };
  }
  if (slug === "da-lat") {
    return {
      ...baseData,
      title: "Đà Lạt - Thành phố ngàn hoa",
      imageUrl:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    };
  }

  return baseData;
};

// Use explicit 'any' for params to avoid next.js build type errors if strict mode issues arise
// In Next 13/14 app dir, page receives props params
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DestinationDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const data = getDestinationData(slug);

  return (
    <main className="min-h-screen bg-slate-50 pt-[80px]">
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
          <span className="mb-4 inline-block rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            Điểm đến nổi bật
          </span>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">{data.title}</h1>
          <p className="max-w-2xl text-lg text-slate-100">{data.description}</p>
        </div>
      </div>

      {/* 2. QUICK INFO BAR */}
      <div className="relative z-10 mx-auto -mt-10 mb-12 max-w-5xl px-6">
        <div className="grid grid-cols-1 divide-y divide-slate-100 rounded-2xl bg-white p-6 shadow-xl md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="flex items-center gap-4 py-4 md:px-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Địa điểm</p>
              <p className="font-semibold capitalize text-slate-800">
                {slug.replace("-", " ")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 md:px-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <FaCalendarAlt size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Thời gian lý tưởng</p>
              <p className="font-semibold text-slate-800">{data.bestTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 md:px-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
              <FaPlane size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Thời gian bay</p>
              <p className="font-semibold text-slate-800">{data.flightTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            Thông tin chi tiết
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="mb-4">
              {data.title} là một trong những điểm đến hấp dẫn nhất Việt Nam,
              nổi tiếng với nhiều danh lam thắng cảnh và văn hóa ẩm thực phong
              phú. Du khách đến đây không chỉ được thưởng ngoạn cảnh đẹp mà còn
              được trải nghiệm sự hiếu khách nồng hậu của người dân địa phương.
            </p>
            <h3 className="mb-3 mt-6 text-xl font-bold text-slate-800">
              Tại sao nên đi du lịch {slug.replace("-", " ")}?
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Khí hậu ôn hòa, dễ chịu quanh năm.</li>
              <li>Ẩm thực đa dạng với nhiều món ăn đặc sản nổi tiếng.</li>
              <li>Nhiều điểm tham quan tráng lệ và các di tích lịch sử.</li>
              <li>Chi phí du lịch hợp lý, phù hợp với nhiều đối tượng.</li>
            </ul>
            <h3 className="mb-3 mt-6 text-xl font-bold text-slate-800">
              Mẹo du lịch
            </h3>
            <p>
              Để có chuyến đi trọn vẹn nhất, bạn nên đặt vé máy bay và khách sạn
              trước ít nhất 2 tuần. Đừng quên mang theo kem chống nắng và máy
              ảnh để lưu lại những khoảnh khắc tuyệt vời.
            </p>
          </div>

          {/* Dummy Related Posts/Images */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="h-48 rounded-xl bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
                alt="Mountain Travel"
                width={400}
                height={300}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div className="h-48 rounded-xl bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="Beach Travel"
                width={400}
                height={300}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Booking Widget Card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-bold text-slate-800">
              Đặt vé đi {slug.replace("-", " ")}
            </h3>
            <p className="mb-6 text-sm text-slate-500">
              Tìm kiếm các chuyến bay giá tốt nhất ngay hôm nay.
            </p>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-500">
                  Điểm đi
                </label>
                <input
                  type="text"
                  value="Hà Nội (HAN)"
                  readOnly
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700 outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-500">
                  Điểm đến
                </label>
                <input
                  type="text"
                  value={data.title}
                  readOnly
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700 outline-none"
                />
              </div>
              <Link
                href="/contact"
                className="block w-full rounded-xl bg-red-600 py-3 text-center font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. RELATED DESTINATIONS */}
      <div className="bg-white">
        <DestinationsSection />
      </div>

      {/* 5. CONTACT SECTION */}
      <ContactSection />
    </main>
  );
}
