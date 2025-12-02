'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    FaGoogle, FaFacebookF, FaEnvelope, FaLock, 
    FaEye, FaEyeSlash, FaArrowLeft, FaUser, FaCheck 
} from 'react-icons/fa6';
import Image from 'next/image';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* --- LEFT SIDE: IMAGE (Khác login 1 chút) --- */}
      <div className="hidden lg:flex lg:w-1/2 bg-sky-900 relative justify-center items-center overflow-hidden">
         <Image
            width={1000}
            height={1000}
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Beach Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
         />
         <div className="relative z-10 text-center px-10">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">Bắt đầu hành trình <br/> của bạn</h2>
            <p className="text-sky-100 text-lg max-w-md mx-auto">
                Tạo tài khoản miễn phí chỉ trong 2 phút để nhận ngay mã giảm giá 10% cho lần đặt vé đầu tiên.
            </p>
         </div>
      </div>

      {/* --- RIGHT SIDE: REGISTER FORM --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 relative">
         
         <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-sky-600 transition font-medium">
            <FaArrowLeft /> Về trang chủ
         </Link>

         <div className="w-full max-w-md">
            
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Tạo tài khoản mới</h1>
                <p className="text-slate-500">Nhập thông tin chi tiết của bạn để đăng ký.</p>
            </div>

             {/* Social Register */}
             <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-700 font-medium">
                    <FaGoogle className="text-red-500 text-lg" /> Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-[#1877F2] text-white rounded-xl hover:bg-[#166fe5] transition font-medium">
                    <FaFacebookF className="text-lg" /> Facebook
                </button>
            </div>

            <div className="relative flex py-2 items-center mb-6">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">Hoặc đăng ký bằng Email</span>
                <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <form className="space-y-4">
                
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Họ và tên</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Nguyen Van A" 
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                        />
                        <FaUser className="absolute left-3.5 top-3.5 text-slate-400" />
                    </div>
                </div>

                {/* Email */}
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

                {/* Password */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mật khẩu</label>
                    <div className="relative">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Tạo mật khẩu (tối thiểu 8 ký tự)" 
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

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3 mt-2">
                    <div className="relative flex items-start">
                        <input id="terms" type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow-sm checked:bg-sky-600 checked:border-sky-600 transition-all" />
                        <FaCheck className="absolute top-1 left-1 text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" />
                    </div>
                    <label htmlFor="terms" className="text-sm text-slate-500 cursor-pointer select-none">
                        Tôi đồng ý với <a href="#" className="text-sky-600 hover:underline">Điều khoản dịch vụ</a> và <a href="#" className="text-sky-600 hover:underline">Chính sách bảo mật</a> của SkyBooker.
                    </label>
                </div>

                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-600/30 transition transform hover:-translate-y-0.5 mt-2">
                    Đăng ký tài khoản
                </button>

            </form>

            <p className="text-center text-slate-500 mt-8">
                Bạn đã có tài khoản?{' '}
                <Link href="/login" className="text-sky-600 font-bold hover:underline">
                    Đăng nhập ngay
                </Link>
            </p>

         </div>
      </div>
    </div>
  );
}