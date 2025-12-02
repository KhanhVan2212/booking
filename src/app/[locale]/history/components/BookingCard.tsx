import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaPlane, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa6';
import StatusBadge from './StatusBadge';

const BookingCard = ({ booking }: { booking: any }) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
    <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-500">Mã đặt chỗ:</span>
        <span className="font-mono font-bold text-slate-800">{booking.id}</span>
      </div>
      <StatusBadge status={booking.status} />
    </div>
    <div className="p-6">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="flex w-full justify-start md:w-auto">
          <Image
            width={50}
            height={50}
            src={booking.logo}
            alt={booking.airline}
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="grid w-full flex-1 grid-cols-1 items-center gap-4 md:grid-cols-3">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-slate-800">
              {booking.time}
            </div>
            <div className="flex items-center justify-center gap-1 text-sm font-semibold text-slate-600 md:justify-start">
              <FaPlaneDeparture className="text-slate-400" />{" "}
              {booking.from.split("(")[1].replace(")", "")}
            </div>
            <div className="mt-1 text-xs text-slate-400">{booking.date}</div>
          </div>
          <div className="hidden flex-col items-center md:flex">
            <span className="mb-1 text-xs text-slate-400">Bay thẳng</span>
            <div className="relative flex h-[2px] w-full items-center bg-slate-200">
              <div className="absolute left-0 h-2 w-2 rounded-full bg-slate-300"></div>
              <FaPlane className="mx-auto rotate-90 transform text-slate-300" />
              <div className="absolute right-0 h-2 w-2 rounded-full bg-slate-300"></div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-2xl font-bold text-slate-800">08:15</div>
            <div className="flex items-center justify-center gap-1 text-sm font-semibold text-slate-600 md:justify-end">
              {booking.to.split("(")[1].replace(")", "")}{" "}
              <FaPlaneArrival className="text-slate-400" />
            </div>
            <div className="mt-1 text-xs text-slate-400">{booking.date}</div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-2 border-t border-slate-100 pt-4 md:w-auto md:flex-col md:justify-center md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <div className="text-lg font-bold text-orange-600">
            {booking.price}
          </div>
          <Link
            href="/history/detail"
            className="whitespace-nowrap rounded-lg border border-sky-600 bg-white px-4 py-2 text-sm font-bold text-sky-600 transition hover:bg-sky-50"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default BookingCard