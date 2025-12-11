// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

interface NavbarProps {
  isTransparent?: boolean;
}

const Navbar = ({ isTransparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // LOGIC CLASS:
  // 1. Luôn dùng 'fixed' để thanh nav luôn bám trên cùng màn hình.
  // 2. Nếu isTransparent = true: Nền trong suốt, chữ trắng.
  // 3. Nếu isTransparent = false: Nền trắng, có bóng, chữ đen.
  const navClasses = isTransparent
    ? "fixed top-0 w-full z-50 bg-transparent border-b border-white/10"
    : "fixed top-0 w-full z-50 bg-white shadow-md";

  // Text color logic for desktop
  const textClasses = isTransparent
    ? "text-white/90 hover:text-red-400"
    : "text-slate-600 hover:text-red-600";

  const logoColor = isTransparent ? "text-white" : "text-red-600";

  // Mobile menu toggle handler
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${navClasses} transition-all duration-300`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 text-2xl font-bold ${logoColor}`}
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px]"
          />
        </Link>

        {/* Desktop Menu Links */}
        <div
          className={`hidden space-x-8 font-medium md:flex ${isTransparent ? "text-white" : "text-slate-600"}`}
        >
          <Link href="/" className={`${textClasses} transition`}>
            Trang chủ
          </Link>
          <Link href="/about" className={`${textClasses} transition`}>
            Về chúng tôi
          </Link>
          <Link href="/experience" className={`${textClasses} transition`}>
            Trải nghiệm
          </Link>
          <Link href="/offers" className={`${textClasses} transition`}>
            Ưu đãi
          </Link>
          <Link href="/policy" className={`${textClasses} transition`}>
            Chính sách
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`text-2xl focus:outline-none md:hidden ${isTransparent ? "text-white" : "text-slate-600"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        <div className="hidden w-[163px] lg:block"></div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col items-center space-y-4 border-t bg-white py-4 shadow-lg md:hidden">
          <Link
            href="/"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Trang chủ
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Về chúng tôi
          </Link>
          <Link
            href="/experience"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Trải nghiệm
          </Link>
          <Link
            href="/offers"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Ưu đãi
          </Link>
          <Link
            href="/policy"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Chính sách
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
