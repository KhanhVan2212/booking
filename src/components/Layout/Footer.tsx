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

const PRODUCT_LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/flights", label: "Chuyến bay" },
  { href: "/destinations", label: "Điểm đến phổ biến", badge: "HOT" },
  { href: "/travel-info", label: "Thông tin du lịch" },
  { href: "/travel-info", label: "Cảm hứng du lịch" },
  { href: "/experience", label: "Trải nghiệm bay", badge: "HOT" },
];

const SUPPORT_LINKS = [
  { href: "/policy", label: "Chính sách & Quy định" },
  { href: "/help", label: "Hướng dẫn thanh toán" },
  { href: "/policy", label: "Chính sách hoàn hủy" },
  { href: "/help", label: "Câu hỏi thường gặp (FAQ)" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/dailyvemaybayhaanh.suntravel?mibextid=wwXIfr&rdid=l4xlVLjMAjNTfqrm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1H34Q3iQAe%2F%3Fmibextid%3DwwXIfr", icon: FaFacebookF, colorClass: "hover:bg-blue-600" },
  // { href: "#", icon: FaInstagram, colorClass: "hover:bg-pink-600" },
  // { href: "#", icon: FaLinkedinIn, colorClass: "hover:bg-blue-700" },
  // { href: "#", icon: FaYoutube, colorClass: "hover:bg-red-600" },
];

// const PAYMENT_PARTNERS = [
//   {
//     type: "image",
//     src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
//     alt: "Visa",
//   },
//   {
//     type: "image",
//     src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
//     alt: "Mastercard",
//   },
//   {
//     type: "image",
//     src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/JCB_logo.svg",
//     alt: "JCB",
//   },
//   { type: "text", label: "MOMO" },
//   { type: "text", label: "NAPAS" },
// ];

const BOTTOM_LINKS = [
  { href: "/policy", label: "Điều khoản sử dụng" },
  { href: "/policy", label: "Chính sách bảo mật" },
];

const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-900 text-sm text-slate-300">
      {/* 1. TOP SECTION: DOWNLOAD APP CTA */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-2xl text-white shadow-lg shadow-red-600/20">
              <FaPlaneDeparture />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Tải ứng dụng Hà Anh JSC
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
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px]"
              />
            </Link>
            <p className="leading-relaxed text-slate-400">
              Nền tảng đặt vé máy bay trực tuyến hàng đầu, mang đến trải nghiệm
              bay tuyệt vời với chi phí tối ưu nhất.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex cursor-pointer items-center gap-3 transition hover:text-red-400">
                <span>024 3771 4566</span>
              </div>
              <div className="flex cursor-pointer items-center gap-3 transition hover:text-red-400">
                <span>PHONGVE@HAANHJSC.COM.VN</span>
              </div>
              <div className="flex cursor-pointer items-center gap-3 transition hover:text-red-400">
                <span>
                  Số 2 ngách 3 Ngõ 51 phố Lương Khánh Thiện , Phường Tương Mai,
                  Thành phố Hà Nội
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Về Hà Anh JSC (Tính năng chính) */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-white">
              Sản phẩm
            </h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 transition hover:text-red-400"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="ml-1 rounded bg-red-600 px-1.5 text-[10px] text-white">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hỗ trợ (User Flow) */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-white">
              Hỗ trợ khách hàng
            </h3>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 transition hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social & Payment */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-white">
              Kết nối với chúng tôi
            </h3>
            <div className="mb-8 flex gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition duration-300 hover:text-white ${social.colorClass}`}
                >
                  <social.icon />
                </Link>
              ))}
            </div>

            {/* <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
              Đối tác thanh toán
            </h3>
            <div className="flex flex-wrap gap-2">
              {PAYMENT_PARTNERS.map((partner, index) => {
                if (partner.type === "image") {
                  return (
                    <Image
                      key={index}
                      width={50}
                      height={20}
                      src={partner.src!}
                      className="h-6 rounded bg-white p-1"
                      alt={partner.alt!}
                    />
                  );
                }
                return (
                  <div
                    key={index}
                    className="flex h-6 items-center rounded bg-white px-2 text-xs font-bold text-slate-800"
                  >
                    {partner.label}
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Hà Anh JSC Technology JSC. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            {BOTTOM_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
