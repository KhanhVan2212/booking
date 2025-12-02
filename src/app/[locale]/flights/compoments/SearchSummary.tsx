import React from 'react'
import { FaPlane } from 'react-icons/fa6';

const SearchSummary = () => (
  <div className="sticky top-0 z-40 mt-[60px] border-b border-slate-200 bg-white shadow-sm">
    {" "}
    {/* mt-[60px] để tránh Navbar absolute đè lên nếu Navbar không đổi */}
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-sky-100 p-2 text-sky-600">
            <FaPlane className="text-xl" />
          </div>
          <div>
            <h1 className="flex items-center gap-2 text-lg font-bold text-slate-800">
              Hà Nội (HAN) <span className="text-sm text-slate-400">➔</span> TP.
              Hồ Chí Minh (SGN)
            </h1>
            <p className="text-sm text-slate-500">
              T2, 24 Th10 • 1 Người lớn • Phổ thông
            </p>
          </div>
        </div>
        <button className="rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 transition hover:bg-sky-100">
          Thay đổi tìm kiếm
        </button>
      </div>
    </div>
  </div>
);

export default SearchSummary