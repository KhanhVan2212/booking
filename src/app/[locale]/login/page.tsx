'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    FaGoogle, FaFacebookF, FaEnvelope, FaLock, 
    FaEye, FaEyeSlash, FaArrowLeft, FaPlaneDeparture 
} from 'react-icons/fa6';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* --- LEFT SIDE: IMAGE & BRANDING (Ẩn trên mobile) --- */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative justify-center items-center overflow-hidden">
         {/* Background Image */}
         <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop" 
            alt="Travel Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
         />
         {/* Overlay Content */}
         <div className="relative z-10 text-center px-10">
            <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-2xl">
                    <FaPlaneDeparture />
                </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Khám phá thế giới mới</h2>
            <p className="text-slate-300 text-lg max-w-md mx-auto">
                Đăng nhập để quản lý chuyến đi, nhận ưu đãi độc quyền và tích lũy dặm bay cùng SkyBooker.
            </p>
         </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 relative">
         
         {/* Back Home Button */}
         <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-sky-600 transition font-medium">
            <FaArrowLeft /> Về trang chủ
         </Link>

         <div className="w-full max-w-md">
            
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Chào mừng trở lại!</h1>
                <p className="text-slate-500">Vui lòng nhập thông tin để đăng nhập.</p>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-700 font-medium">
                    <FaGoogle className="text-red-500 text-lg" /> Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-[#1877F2] text-white rounded-xl hover:bg-[#166fe5] transition font-medium">
                    <FaFacebookF className="text-lg" /> Facebook
                </button>
            </div>

            {/* Divider */}
            <div className="relative flex py-2 items-center mb-6">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">Hoặc đăng nhập bằng Email</span>
                <div className="flex-grow border-t border-slate-200"></div>
            </div>

            {/* Login Form */}
            <form className="space-y-5">
                
                {/* Email Input */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                    <div className="relative">
                        <input 
                            type="email" 
                            placeholder="name@example.com" 
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                        />
                        <FaEnvelope className="absolute left-3.5 top-3.5 text-slate-400" />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <div className="flex justify-between items-center mb-1.5">
                        <label className="block text-sm font-semibold text-slate-700">Mật khẩu</label>
                        <a href="#" className="text-sm text-sky-600 hover:underline font-medium">Quên mật khẩu?</a>
                    </div>
                    <div className="relative">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Nhập mật khẩu" 
                            className="w-full pl-10 pr-10 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
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
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-600/30 transition transform hover:-translate-y-0.5">
                    Đăng nhập
                </button>

            </form>

            {/* Footer Link */}
            <p className="text-center text-slate-500 mt-8">
                Bạn chưa có tài khoản?{' '}
                <Link href="/register" className="text-sky-600 font-bold hover:underline">
                    Đăng ký ngay
                </Link>
            </p>

         </div>
      </div>
    </div>
  );
}