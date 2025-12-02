import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaPlaneDeparture,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-900 text-sm text-slate-300">
      {/* 1. TOP SECTION: DOWNLOAD APP CTA */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-2xl text-white shadow-lg shadow-sky-600/20">
              <FaPlaneDeparture />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Tải ứng dụng SkyBooker
              </h3>
              <p className="text-slate-400">
                Đặt vé nhanh hơn, ưu đãi nhiều hơn trên điện thoại.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700">
              <FaApple className="text-2xl" />
              <div className="text-left">
                <div className="text-[10px] leading-none text-slate-400">
                  Download on the
                </div>
                <div className="mt-1 text-sm font-bold leading-none">
                  App Store
                </div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700">
              <FaGooglePlay className="ml-1 text-xl" />
              <div className="ml-1 text-left">
                <div className="text-[10px] leading-none text-slate-400">
                  GET IT ON
                </div>
                <div className="mt-1 text-sm font-bold leading-none">
                  Google Play
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN LINKS SECTION */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-white"
            >
              <FaPlaneDeparture className="text-sky-500" />
              SkyBooker
            </Link>
            <p className="leading-relaxed text-slate-400">
              Nền tảng đặt vé máy bay trực tuyến hàng đầu, mang đến trải nghiệm
              bay tuyệt vời với chi phí tối ưu nhất.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex cursor-pointer items-center gap-3 transition hover:text-sky-400">
                <FaPhone className="text-sky-500" />{" "}
                <span>1900 1234 (24/7)</span>
              </div>
              <div className="flex cursor-pointer items-center gap-3 transition hover:text-sky-400">
                <FaEnvelope className="text-sky-500" />{" "}
                <span>support@skybooker.com</span>
              </div>
              <div className="flex cursor-pointer items-center gap-3 transition hover:text-sky-400">
                <FaLocationDot className="text-sky-500" />{" "}
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Column 2: Về SkyBooker (Tính năng chính) */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-white">
              Sản phẩm
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500 opacity-0 transition-opacity hover:opacity-100"></span>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/flights"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500 opacity-0 transition-opacity hover:opacity-100"></span>
                  Tìm vé máy bay
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500 opacity-0 transition-opacity hover:opacity-100"></span>
                  Trải nghiệm bay{" "}
                  <span className="ml-1 rounded bg-sky-600 px-1.5 text-[10px] text-white">
                    HOT
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500 opacity-0 transition-opacity hover:opacity-100"></span>
                  Săn ưu đãi & Khuyến mãi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hỗ trợ (User Flow) */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-white">
              Hỗ trợ khách hàng
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/history"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  Quản lý đặt chỗ
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  Tra cứu mã vé điện tử
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  Hướng dẫn thanh toán
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  Chính sách hoàn hủy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 transition hover:text-sky-400"
                >
                  Câu hỏi thường gặp (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Payment */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-white">
              Kết nối với chúng tôi
            </h3>
            <div className="mb-8 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition duration-300 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition duration-300 hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition duration-300 hover:bg-blue-700 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition duration-300 hover:bg-red-600 hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>

            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
              Đối tác thanh toán
            </h3>
            <div className="flex flex-wrap gap-2">
              <Image
                width={50}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                className="h-6 rounded bg-white p-1"
                alt="Visa"
              />
              <Image
                width={50}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                className="h-6 rounded bg-white p-1"
                alt="Mastercard"
              />
              <Image
                width={50}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/JCB_logo.svg"
                className="h-6 rounded bg-white p-1"
                alt="JCB"
              />
              <div className="flex h-6 items-center rounded bg-white px-2 text-xs font-bold text-slate-800">
                MOMO
              </div>
              <div className="flex h-6 items-center rounded bg-white px-2 text-xs font-bold text-slate-800">
                NAPAS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SkyBooker Technology JSC. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="transition hover:text-white">
              Điều khoản sử dụng
            </a>
            <a href="#" className="transition hover:text-white">
              Chính sách bảo mật
            </a>
            <a href="#" className="transition hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
