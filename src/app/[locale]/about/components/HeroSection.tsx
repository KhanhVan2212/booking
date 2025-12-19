import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex h-[500px] items-center justify-center text-center text-white  mt-[0px] sm:mt-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/about.avif"
          alt="Ha Anh Team"
          className="h-full w-full object-cover"
          width={2000}
          height={500}
        />
        {/* Overlay Gradient Đỏ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 text-4xl font-bold md:text-6xl"
        >
          Hà Anh JSC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 text-xl font-light opacity-90 md:text-2xl"
        >
          Chuyên nghiệp – Tận tâm – Hiệu quả
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto h-1 w-24 rounded-full bg-white"
        ></motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
