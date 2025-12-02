import React from 'react'
import { FaCircleCheck, FaClock } from 'react-icons/fa6';

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case "upcoming":
      return (
        <span className="flex items-center gap-1 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
          <FaClock className="text-[10px]" /> Sắp khởi hành
        </span>
      );
    case "completed":
      return (
        <span className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          <FaCircleCheck className="text-[10px]" /> Đã hoàn thành
        </span>
      );
    case "cancelled":
      return (
        <span className="flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
          Đã hủy
        </span>
      );
    default:
      return null;
  }
};

export default StatusBadge