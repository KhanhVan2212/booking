"use client";

import Image from "next/image";
import React from "react";

const InspirationHero = () => {
  return (
    <div className="relative h-[60vh] w-full items-center justify-center bg-slate-900">
      <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="Travel Inspiration"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
        <span className="animate-fade-in-up mb-4 inline-block rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
          Blog & Tin tức
        </span>
        <h1 className="animate-fade-in-up mb-6 text-4xl font-bold delay-100 md:text-6xl">
          Cảm Hứng Du Lịch
        </h1>
        <p className="animate-fade-in-up max-w-2xl text-lg text-slate-100 delay-200">
          Khám phá những điểm đến tuyệt vời, kinh nghiệm du lịch hữu ích và
          những câu chuyện đầy cảm hứng từ khắp nơi trên thế giới.
        </p>
      </div>
    </div>
  );
};

export default InspirationHero;
