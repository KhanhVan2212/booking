import React from 'react'
import { FaFilter } from 'react-icons/fa6';

const FilterSidebar = () => (
  <div className="space-y-6">
    {/* Filter: Khoảng giá */}
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-800">
        <FaFilter className="text-sm text-sky-500" /> Khoảng giá
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between text-sm font-medium text-slate-600">
          <span>0đ</span>
          <span>5.000.000đ</span>
        </div>
        <input
          type="range"
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600"
        />
      </div>
    </div>

    {/* Filter: Hãng hàng không */}
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <h3 className="mb-4 font-bold text-slate-800">Hãng hàng không</h3>
      <div className="space-y-3">
        {[
          "Vietnam Airlines",
          "VietJet Air",
          "Bamboo Airways",
          "Vietravel Airlines",
        ].map((airline) => (
          <label
            key={airline}
            className="group flex cursor-pointer items-center gap-3"
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              defaultChecked
            />
            <span className="text-sm text-slate-600 transition group-hover:text-sky-600">
              {airline}
            </span>
          </label>
        ))}
      </div>
    </div>

    {/* Filter: Thời gian bay */}
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <h3 className="mb-4 font-bold text-slate-800">Giờ khởi hành</h3>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Sáng (00-06)", icon: "🌙" },
          { label: "Sáng (06-12)", icon: "⛅" },
          { label: "Chiều (12-18)", icon: "☀️" },
          { label: "Tối (18-24)", icon: "aaa" }, // Trick icon
        ].map((time, idx) => (
          <button
            key={idx}
            className="rounded-lg border border-slate-200 p-2 text-center text-xs transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            <div className="mb-1 text-lg">
              {time.icon === "aaa" ? "🌃" : time.icon}
            </div>
            {time.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default FilterSidebar