// components/Navbar.tsx
import Link from "next/link";
import React from "react";
import { FaPlaneDeparture } from "react-icons/fa6";

interface NavbarProps {
  isTransparent?: boolean;
}

const Navbar = ({ isTransparent = false }: NavbarProps) => {
  // LOGIC CLASS:
  // 1. Luôn dùng 'fixed' để thanh nav luôn bám trên cùng màn hình.
  // 2. Nếu isTransparent = true: Nền trong suốt, chữ trắng.
  // 3. Nếu isTransparent = false: Nền trắng, có bóng, chữ đen.
  const navClasses = isTransparent
    ? "fixed top-0 w-full z-50 bg-transparent border-b border-white/10"
    : "fixed top-0 w-full z-50 bg-white shadow-md";

  const textClasses = isTransparent
    ? "text-white/90 hover:text-white"
    : "text-slate-600 hover:text-sky-600";

  const logoColor = isTransparent ? "text-white" : "text-sky-600";

  // Nút Login thay đổi màu viền/nền tùy trạng thái
  const buttonClasses = isTransparent
    ? "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-sky-600"
    : "bg-sky-600 border border-sky-600 text-white hover:bg-sky-700";

  return (
    <nav className={`${navClasses} transition-all duration-300`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 text-2xl font-bold ${logoColor}`}
        >
          <FaPlaneDeparture
            className={isTransparent ? "text-sky-400" : "text-sky-600"}
          />
          <span>SkyBooker</span>
        </Link>

        {/* Menu Links */}
        <div
          className={`hidden space-x-8 font-medium md:flex ${isTransparent ? "text-white" : "text-slate-600"}`}
        >
          <Link href="/" className={`${textClasses} transition`}>
            Trang chủ
          </Link>
          <Link href="/flights" className={`${textClasses} transition`}>
            Vé máy bay
          </Link>
          <Link href="/experience" className={`${textClasses} transition`}>
            Trải nghiệm
          </Link>
          <Link href="/offers" className={`${textClasses} transition`}>
            Ưu đãi
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className={`rounded-full px-5 py-2.5 font-medium transition ${buttonClasses}`}
          >
            Đăng nhập / Đăng ký
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
