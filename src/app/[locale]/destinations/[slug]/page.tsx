"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { use } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlane } from "react-icons/fa";
import DestinationsSection from "../../(home)/components/DestinationsSection";
import ContactSection from "../../about/components/ContactSection";
import AirportFlightBoard from "@/components/Layout/AirportFlightBoard";
import { DESTINATION_DEPARTURE_MAP } from "@/lib/destination-departure-map";


// Dummy data generator
const getDestinationData = (slug: string) => {
  const baseData = {
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    description: `Khám phá vẻ đẹp tuyệt vời của ${slug.replace("-", " ")}.`,
    imageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=2000&q=80",
    bestTime: "Tháng 3 - Tháng 8",
    flightTime: "1 giờ 15 phút",
  };

  return baseData;
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DestinationDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const data = getDestinationData(slug);

  const departures = DESTINATION_DEPARTURE_MAP[slug] ?? [];

  return (
    <main className="min-h-screen bg-slate-50 pt-[80px]">
      {/* HERO */}
      <div className="relative h-[60vh] w-full">
        <Image src={data.imageUrl} alt={data.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">{data.title}</h1>
          <p className="mt-4 max-w-2xl text-lg">{data.description}</p>
        </div>
      </div>

      {/* QUICK INFO */}
      <div className="mx-auto mt-12 mb-12 max-w-5xl px-6">
        <div className="grid grid-cols-1 rounded-2xl bg-white shadow-xl md:grid-cols-3">
          <Info icon={<FaMapMarkerAlt />} label="Địa điểm" value={data.title} />
          <Info icon={<FaCalendarAlt />} label="Thời gian lý tưởng" value={data.bestTime} />
          <Info icon={<FaPlane />} label="Thời gian bay" value={data.flightTime} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-2xl font-bold">Thông tin chi tiết</h2>

          {/* ✅ BẢNG CHUYẾN BAY – ĐẶT NGAY TẠI ĐÂY */}
          {departures.length > 0 && (
            <AirportFlightBoard departures={departures} />
          )}

          {/* Dummy Related Images */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <ImageBox src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" />
            <ImageBox src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" />
          </div>
        </div>

        {/* SIDEBAR */}
        <div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-bold">Đặt vé đi {data.title}</h3>
            <Link
              href="/contact"
              className="block rounded-xl bg-red-600 py-3 text-center font-bold text-white"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </div>

      <DestinationsSection />
      <ContactSection />
    </main>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function Info({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-4 p-6">
      <div className="text-xl text-red-600">{icon}</div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function ImageBox({ src }: { src: string }) {
  return (
    <div className="h-48 overflow-hidden rounded-xl">
      <Image src={src} alt="" width={400} height={300} className="h-full w-full object-cover" />
    </div>
  );
}
