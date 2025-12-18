// components/TravelInfoHero.tsx
import React from "react";
import { motion } from "framer-motion";

const TravelInfoHero = () => {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1434828927397-62ea053f7a35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-50"></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          Thông tin <span className="text-red-500">Du lịch hữu ích</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-lg text-gray-200"
        >
          Cẩm nang toàn diện cho mọi hành trình của bạn. Tìm hiểu quy định, thủ
          tục và mẹo du lịch cần thiết.
        </motion.p>
      </div>
    </div>
  );
};

export default TravelInfoHero;
