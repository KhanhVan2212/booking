"use client";

import React, { useState } from "react";
import {
  FaPhone,
  FaXmark,
  FaEnvelope,
  FaLocationDot,
  FaHeadset,
} from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popup Content */}
      <div
        className={`mb-4 w-80 origin-bottom-right rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-10 scale-0 opacity-0"
        }`}
      >
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-lg font-bold text-slate-800">Liên hệ hỗ trợ</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 transition hover:text-red-600"
          >
            <FaXmark size={20} />
          </button>
        </div>

        <div className="space-y-5">
          {/* Hotline */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
              <FaPhone />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Hotline</p>
              <a
                href="tel:02437714566"
                className="block text-lg font-bold leading-tight text-red-600 hover:underline"
              >
                024 3771 4566
              </a>
              <span className="text-xs text-slate-400">Hỗ trợ 24/7</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Email</p>
              <a
                href="mailto:PHONGVE@HAANHJSC.COM.VN"
                className="block break-all text-sm font-bold leading-tight text-slate-800 transition hover:text-red-600"
              >
                PHONGVE@HAANHJSC.COM.VN
              </a>
              <span className="text-xs text-slate-400">
                Phản hồi trong vòng 24h
              </span>
            </div>
          </div>

          {/* Zalo */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <SiZalo />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Chat Zalo</p>
              <a
                href="https://zalo.me/0979417936"
                target="_blank"
                rel="noreferrer"
                className="block text-lg font-bold leading-tight text-blue-600 hover:underline"
              >
                0979 417 936
              </a>
              <span className="text-xs text-slate-400">Kết nối trực tiếp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-110 ${
          isOpen ? "rotate-90 bg-slate-800" : "animate-bounce-slow bg-red-600"
        }`}
      >
        {isOpen ? (
          <FaXmark className="text-2xl text-white" />
        ) : (
          <FaHeadset className="text-2xl text-white" />
        )}

        {/* Tooltip hint when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
            Liên hệ ngay
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
