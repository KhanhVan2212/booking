// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

interface NavbarProps {
  isTransparent?: boolean;
}

import { motion } from "framer-motion";

// ... (existing imports)

// ... (existing interface)

const Navbar = ({ isTransparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navClasses = isTransparent
    ? "fixed top-0 w-full z-50 bg-transparent border-b border-white/10 transition-colors duration-500 shadow-none"
    : "fixed top-0 w-full z-50 bg-white shadow-md transition-colors duration-500";

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
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${navClasses} `}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 text-2xl font-bold transition-colors duration-500 ${logoColor}`}
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
          {/* <Link href="/flights" className={`${textClasses} transition`}>
            Chuyến bay
          </Link> */}
          <Link href="/destinations" className={`${textClasses} transition`}>
            Điểm đến phổ biến
          </Link>
          <Link href="/travel-info" className={`${textClasses} transition`}>
            Dịch vụ cung cấp
          </Link>
          <Link href="/about" className={`${textClasses} transition`}>
            Về chúng tôi
          </Link>
          <Link href="/contact" className={`${textClasses} transition`}>
            Liên hệ
          </Link>
          <Link href="/help" className={`${textClasses} transition`}>
            Trợ giúp
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
            href="/flights"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Chuyến bay
          </Link>
          <Link
            href="/destinations"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Điểm đến phổ biến
          </Link>
          <Link
            href="/travel-info"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Thông tin du lịch
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Về chúng tôi
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Liên hệ
          </Link>
          <Link
            href="/help"
            className="text-lg font-medium text-slate-600 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Trợ giúp
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
