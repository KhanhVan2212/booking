import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaClock, FaPlane, FaSuitcase } from 'react-icons/fa6';

const FlightCard = ({ data }: { data: any }) => {
    const router = useRouter();
  return (
    <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* 1. Logo & Tên hãng */}
        <div className="flex w-full items-center gap-3 md:w-1/4">
          <Image
            src={data.logo}
            alt={data.airline}
            width={50}
            height={50}
            className="h-10 w-auto object-contain"
          />
          <div>
            <h4 className="text-sm font-bold text-slate-800">{data.airline}</h4>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-400">
              {data.code}
            </span>
          </div>
        </div>

        {/* 2. Lịch trình bay */}
        <div className="flex w-full items-center justify-center gap-4 text-center md:w-2/4">
          {/* Điểm đi */}
          <div>
            <div className="text-xl font-bold text-slate-800">
              {data.departTime}
            </div>
            <div className="text-sm font-semibold text-slate-500">
              {data.departCode}
            </div>
          </div>

          {/* Thời gian & Line */}
          <div className="flex w-32 flex-col items-center">
            <span className="mb-1 text-xs text-slate-500">{data.duration}</span>
            <div className="relative h-[2px] w-full bg-slate-300">
              {/* Icon máy bay giữa dòng kẻ */}
              <FaPlane className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1 text-xs text-sky-500" />
              <div className="absolute -top-[1px] left-0 h-1 w-1 rounded-full bg-slate-400"></div>
              <div className="absolute -top-[1px] right-0 h-1 w-1 rounded-full bg-slate-400"></div>
            </div>
            <span className="mt-1 text-xs font-medium text-sky-600">
              {data.type}
            </span>
          </div>

          {/* Điểm đến */}
          <div>
            <div className="text-xl font-bold text-slate-800">
              {data.arriveTime}
            </div>
            <div className="text-sm font-semibold text-slate-500">
              {data.arriveCode}
            </div>
          </div>
        </div>

        {/* 3. Giá & Nút bấm */}
        <div className="mt-4 flex w-full flex-col items-end justify-center border-l border-t border-slate-100 pl-0 pt-4 md:mt-0 md:w-1/4 md:border-t-0 md:pl-6 md:pt-0">
          <div className="mb-2 text-right">
            <span className="mr-2 text-xs text-slate-400 line-through">
              {(data.price * 1.2).toLocaleString()}đ
            </span>
            <div className="text-xl font-bold text-orange-600">
              {data.price.toLocaleString()} VNĐ
            </div>
            <div className="text-xs text-slate-500">/ khách</div>
          </div>
          <button onClick={() => router.push(`/booking`)} className="w-full rounded-lg bg-sky-600 py-2 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700">
            Chọn chuyến bay
          </button>
        </div>
      </div>

      {/* Chi tiết phụ (Hành lý, Tiện ích) */}
      <div className="mt-4 flex gap-4 border-t border-dashed border-slate-200 pt-4 text-xs text-slate-500">
        <span className="flex items-center gap-1 rounded bg-green-50 px-2 py-1 text-green-600">
          <FaSuitcase /> Hành lý 23kg
        </span>
        <span className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1">
          <FaClock /> Suất ăn miễn phí
        </span>
      </div>
    </div>
  );
};

export default FlightCard