// components/ContactHero.tsx
import React from "react";

const ContactHero = () => {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1423666639041-f14d7045c573?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-50"></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          Liên hệ <span className="text-red-500">Với chúng tôi</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-200">
          Chúng tôi luôn lắng nghe và sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
