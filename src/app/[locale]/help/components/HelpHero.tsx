// components/HelpHero.tsx
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const HelpHero = () => {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-50"></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
          Chào bạn,{" "}
          <span className="text-red-500">Chúng tôi có thể giúp gì?</span>
        </h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi, chủ đề hoặc từ khóa..."
            className="w-full rounded-full border-none bg-white py-4 pl-6 pr-14 text-lg text-slate-700 shadow-xl outline-none ring-0 transition duration-300 focus:ring-4 focus:ring-red-500/30"
          />
          <button className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700">
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpHero;
