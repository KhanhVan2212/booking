import Link from 'next/link';
import React from 'react';
import { 
    FaPlaneDeparture, FaFacebookF, FaInstagram, FaLinkedinIn, 
    FaYoutube, FaPhone, FaEnvelope, FaLocationDot, FaApple, FaGooglePlay 
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm mt-auto">
        
        {/* 1. TOP SECTION: DOWNLOAD APP CTA */}
        <div className="border-b border-slate-800">
            <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shadow-sky-600/20">
                        <FaPlaneDeparture />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Tải ứng dụng SkyBooker</h3>
                        <p className="text-slate-400">Đặt vé nhanh hơn, ưu đãi nhiều hơn trên điện thoại.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition border border-slate-700">
                        <FaApple className="text-2xl" />
                        <div className="text-left">
                            <div className="text-[10px] leading-none text-slate-400">Download on the</div>
                            <div className="text-sm font-bold leading-none mt-1">App Store</div>
                        </div>
                    </button>
                    <button className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition border border-slate-700">
                        <FaGooglePlay className="text-xl ml-1" />
                        <div className="text-left ml-1">
                            <div className="text-[10px] leading-none text-slate-400">GET IT ON</div>
                            <div className="text-sm font-bold leading-none mt-1">Google Play</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        {/* 2. MAIN LINKS SECTION */}
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                
                {/* Column 1: Brand & Contact */}
                <div className="space-y-4">
                    <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                        <FaPlaneDeparture className="text-sky-500" />
                        SkyBooker
                    </Link>
                    <p className="text-slate-400 leading-relaxed">
                        Nền tảng đặt vé máy bay trực tuyến hàng đầu, mang đến trải nghiệm bay tuyệt vời với chi phí tối ưu nhất.
                    </p>
                    <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-3 hover:text-sky-400 transition cursor-pointer">
                            <FaPhone className="text-sky-500" /> <span>1900 1234 (24/7)</span>
                        </div>
                        <div className="flex items-center gap-3 hover:text-sky-400 transition cursor-pointer">
                            <FaEnvelope className="text-sky-500" /> <span>support@skybooker.com</span>
                        </div>
                        <div className="flex items-center gap-3 hover:text-sky-400 transition cursor-pointer">
                            <FaLocationDot className="text-sky-500" /> <span>Hà Nội, Việt Nam</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Về SkyBooker (Tính năng chính) */}
                <div>
                    <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Sản phẩm</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/" className="hover:text-sky-400 transition flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link href="/flights" className="hover:text-sky-400 transition flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                Tìm vé máy bay
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience" className="hover:text-sky-400 transition flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                Trải nghiệm bay <span className="text-[10px] bg-sky-600 text-white px-1.5 rounded ml-1">HOT</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/offers" className="hover:text-sky-400 transition flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                Săn ưu đãi & Khuyến mãi
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Hỗ trợ (User Flow) */}
                <div>
                    <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Hỗ trợ khách hàng</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/history" className="hover:text-sky-400 transition flex items-center gap-2">
                                Quản lý đặt chỗ
                            </Link>
                        </li>
                        <li>
                            <Link href="/history" className="hover:text-sky-400 transition flex items-center gap-2">
                                Tra cứu mã vé điện tử
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-sky-400 transition flex items-center gap-2">
                                Hướng dẫn thanh toán
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-sky-400 transition flex items-center gap-2">
                                Chính sách hoàn hủy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-sky-400 transition flex items-center gap-2">
                                Câu hỏi thường gặp (FAQ)
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Social & Payment */}
                <div>
                    <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Kết nối với chúng tôi</h3>
                    <div className="flex gap-4 mb-8">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition duration-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition duration-300">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-300">
                            <FaYoutube />
                        </a>
                    </div>
                    
                    <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Đối tác thanh toán</h3>
                    <div className="flex flex-wrap gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6 bg-white p-1 rounded" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 bg-white p-1 rounded" alt="Mastercard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/JCB_logo.svg" className="h-6 bg-white p-1 rounded" alt="JCB" />
                        <div className="h-6 px-2 bg-white text-slate-800 rounded text-xs font-bold flex items-center">MOMO</div>
                        <div className="h-6 px-2 bg-white text-slate-800 rounded text-xs font-bold flex items-center">NAPAS</div>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="border-t border-slate-800 bg-slate-950">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-xs">
                    © {new Date().getFullYear()} SkyBooker Technology JSC. All rights reserved.
                </p>
                <div className="flex gap-6 text-xs text-slate-500">
                    <a href="#" className="hover:text-white transition">Điều khoản sử dụng</a>
                    <a href="#" className="hover:text-white transition">Chính sách bảo mật</a>
                    <a href="#" className="hover:text-white transition">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;