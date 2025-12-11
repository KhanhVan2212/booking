import React from 'react';
import { 
    FaPlane, FaUmbrellaBeach, FaMicrophoneLines, FaHandHoldingHeart,
    FaPassport, FaSuitcaseRolling, FaHeadset, FaTicket, FaHotel, FaRotate, FaCheckToSlot
} from 'react-icons/fa6';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* 1. HEADER */}
        <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">Hệ sinh thái dịch vụ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
                Giải pháp toàn diện cho <br/> mọi hành trình của bạn
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 2. MAIN SERVICES GRID (4 Cột chính) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Card 1: Vé máy bay (Core) */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-red-100"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-red-600/30">
                        <FaPlane />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Vé máy bay Toàn cầu</h3>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span>
                            Vé nội địa & Quốc tế 24/7
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span>
                            Vé đoàn, Công tác, Vé Chính khách
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span>
                            Combo Tiết kiệm (Vé + Khách sạn)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span>
                            Điều kiện hoàn hủy linh hoạt
                        </li>
                    </ul>
                </div>
            </div>

            {/* Card 2: Du lịch & Lữ hành */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-blue-100"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-red-600/30">
                        <FaUmbrellaBeach />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Du lịch & Lữ hành</h3>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Tour du lịch Cao cấp (Luxury)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Tour MICE (Hội nghị kết hợp nghỉ dưỡng)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Dịch vụ đặt phòng khách sạn toàn cầu
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Bảo hiểm du lịch quốc tế
                        </li>
                    </ul>
                </div>
            </div>

            {/* Card 3: Sự kiện & Hội nghị */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-orange-100"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-red-600/30">
                        <FaMicrophoneLines />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Sự kiện & Hội nghị</h3>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Tổ chức Hội nghị, Hội thảo Quốc tế
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Cung cấp vé đoàn cho sự kiện lớn
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Logistics và vận chuyển khách mời
                        </li>
                    </ul>
                </div>
            </div>

            {/* Card 4: Hỗ trợ đặc biệt */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-green-100"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-red-600/30">
                        <FaHandHoldingHeart />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Dịch vụ Hỗ trợ Đặc biệt</h3>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Vé máy bay khẩn cấp (Last-minute)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Hỗ trợ thủ tục Visa nhanh chóng
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            Chăm sóc khách hàng VIP / Ưu tiên
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        {/* 3. DETAILED FLIGHT SERVICES (Tiện ích chi tiết) */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-slate-800">Tiện ích Hàng không Chi tiết</h3>
                <p className="text-slate-500 mt-2">Chúng tôi hỗ trợ bạn từng bước nhỏ nhất trên hành trình bay</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-red-600 text-2xl mb-3 group-hover:scale-110 transition duration-300 border border-slate-100">
                        <FaPassport />
                    </div>
                    <h4 className="font-bold text-slate-700 text-sm">Tư vấn Visa</h4>
                    <p className="text-xs text-slate-500 mt-1 px-2">Hỗ trợ thủ tục nhập cảnh</p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-red-600 text-2xl mb-3 group-hover:scale-110 transition duration-300 border border-slate-100">
                        <FaRotate />
                    </div>
                    <h4 className="font-bold text-slate-700 text-sm">Hoàn / Đổi vé</h4>
                    <p className="text-xs text-slate-500 mt-1 px-2">Xử lý nhanh chóng</p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-red-600 text-2xl mb-3 group-hover:scale-110 transition duration-300 border border-slate-100">
                        <FaCheckToSlot />
                    </div>
                    <h4 className="font-bold text-slate-700 text-sm">Check-in Online</h4>
                    <p className="text-xs text-slate-500 mt-1 px-2">Chọn chỗ ngồi trước</p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-red-600 text-2xl mb-3 group-hover:scale-110 transition duration-300 border border-slate-100">
                        <FaSuitcaseRolling />
                    </div>
                    <h4 className="font-bold text-slate-700 text-sm">Mua thêm Hành lý</h4>
                    <p className="text-xs text-slate-500 mt-1 px-2">Giá ưu đãi đại lý</p>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-red-600 text-2xl mb-3 group-hover:scale-110 transition duration-300 border border-slate-100">
                        <FaTicket />
                    </div>
                    <h4 className="font-bold text-slate-700 text-sm">Tư vấn Hành trình</h4>
                    <p className="text-xs text-slate-500 mt-1 px-2">Tối ưu chi phí & giờ bay</p>
                </div>

                {/* Item 6 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-red-600 text-2xl mb-3 group-hover:scale-110 transition duration-300 border border-slate-100">
                        <FaHeadset />
                    </div>
                    <h4 className="font-bold text-slate-700 text-sm">Hỗ trợ 24/7</h4>
                    <p className="text-xs text-slate-500 mt-1 px-2">Luôn sẵn sàng</p>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;