"use client";
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
import { SiZalo } from "react-icons/si";
import { motion } from "framer-motion";
const PRODUCT_LINKS = [
  { href: "/destinations", label: "Dịch vụ vé máy bay", badge: "HOT" },
  { href: "/destinations", label: "Dịch vụ du lịch & lữ hành" },
  { href: "/mice", label: "Dịch vụ tổ chức sự kiện & hội nghị" },
  { href: "/help", label: "Dịch vụ hỗ trợ đặc biệt" },
];

const SUPPORT_LINKS = [
  { href: "/policy", label: "Chính sách & Quy định" },
  { href: "/help", label: "Hướng dẫn thanh toán" },
  { href: "/policy", label: "Chính sách hoàn hủy" },
  { href: "/help", label: "Câu hỏi thường gặp (FAQ)" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/dailyvemaybayhaanh.suntravel?mibextid=wwXIfr&rdid=l4xlVLjMAjNTfqrm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1H34Q3iQAe%2F%3Fmibextid%3DwwXIfr",
    icon: FaFacebookF,
    colorClass: "hover:bg-blue-600",
  },
  {
    href: "https://zalo.me/0986798102",
    icon: SiZalo,
    colorClass: "hover:bg-blue-500",
  },
  {
    href: "tel:02437714566",
    icon: FaPhone,
    colorClass: "hover:bg-green-500",
  },
  {
    href: "mailto:PHONGVE@HAANHJSC.COM.VN",
    icon: FaEnvelope,
    colorClass: "hover:bg-yellow-500",
  },
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
  const [contactInfo, setContactInfo] = React.useState({
    hotline: "024 3771 4566",
    email: "PHONGVE@HAANHJSC.COM.VN",
    headquarters:
      "Số 2 ngách 3 Ngõ 51 phố Lương Khánh Thiện , Phường Tương Mai, Thành phố Hà Nội",
    office: "Tầng 9 Tòa nhà 26 Liễu Giai, Phường Ngọc Hà, Thành phố Hà Nội.",
  });

  React.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/globals/settings");
        const data = await response.json();
        if (data && !data.errors) {
          setContactInfo((prev) => ({
            hotline: data.hotline || prev.hotline,
            email: data.email || prev.email,
            headquarters: data.headquarters || prev.headquarters,
            office: data.office || prev.office, // Assuming office is used somewhere or just stored
          }));
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-auto bg-slate-900 text-sm text-slate-300"
    >
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
                <span>{contactInfo.hotline}</span>
              </div>
              <div className="flex cursor-pointer items-center gap-3 transition hover:text-red-400">
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex cursor-pointer items-center gap-3 transition hover:text-red-400">
                <span>{contactInfo.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Về Hà Anh JSC (Tính năng chính) */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-white">
              Dịch vụ cung cấp
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

            {/* Payment Partners Commented Out */}
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
    </motion.footer>
  );
};

export default Footer;
