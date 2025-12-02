"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaGoogle,
  FaFacebookF,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaPlaneDeparture,
} from "react-icons/fa6";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* --- LEFT SIDE: IMAGE & BRANDING (Ẩn trên mobile) --- */}
      <div className="relative hidden items-center justify-center overflow-hidden bg-slate-900 lg:flex lg:w-1/2">
        {/* Background Image */}
        <Image
          fill
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
          alt="Travel Background"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        {/* Overlay Content */}
        <div className="relative z-10 px-10 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-600 text-4xl text-white shadow-2xl">
              <FaPlaneDeparture />
            </div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white">
            Khám phá thế giới mới
          </h2>
          <p className="mx-auto max-w-md text-lg text-slate-300">
            Đăng nhập để quản lý chuyến đi, nhận ưu đãi độc quyền và tích lũy
            dặm bay cùng SkyBooker.
          </p>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM --- */}
      <div className="relative flex w-full flex-col items-center justify-center p-8 md:p-12 lg:w-1/2">
        {/* Back Home Button */}
        <Link
          href="/"
          className="absolute left-8 top-8 flex items-center gap-2 font-medium text-slate-500 transition hover:text-sky-600"
        >
          <FaArrowLeft /> Về trang chủ
        </Link>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-slate-800">
              Chào mừng trở lại!
            </h1>
            <p className="text-slate-500">
              Vui lòng nhập thông tin để đăng nhập.
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50">
              <FaGoogle className="text-lg text-red-500" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-4 py-3 font-medium text-white transition hover:bg-[#166fe5]">
              <FaFacebookF className="text-lg" /> Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6 flex items-center py-2">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="mx-4 flex-shrink-0 text-sm text-slate-400">
              Hoặc đăng nhập bằng Email
            </span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                />
                <FaEnvelope className="absolute left-3.5 top-3.5 text-slate-400" />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">
                  Mật khẩu
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-sky-600 hover:underline"
                >
                  Quên mật khẩu?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-10 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                />
                <FaLock className="absolute left-3.5 top-3.5 text-slate-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full transform rounded-xl bg-sky-600 py-3.5 font-bold text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:bg-sky-700">
              Đăng nhập
            </button>
          </form>

          {/* Footer Link */}
          <p className="mt-8 text-center text-slate-500">
            Bạn chưa có tài khoản?{" "}
            <Link
              href="/register"
              className="font-bold text-sky-600 hover:underline"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
