import React from "react";

const Step = () => {
  return (
    <div className="sticky top-[72px] z-30 border-b border-slate-200 bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2 text-sky-600">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs text-white">
              1
            </span>
            Chọn chuyến bay
          </div>
          <div className="h-[2px] w-8 bg-sky-600"></div>
          <div className="flex items-center gap-2 text-sky-600">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs text-white">
              2
            </span>
            Điền thông tin
          </div>
          <div className="h-[2px] w-8 bg-slate-300"></div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-500">
              3
            </span>
            Thanh toán
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
