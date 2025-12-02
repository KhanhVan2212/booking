// components/FeaturesSection.tsx
import React from 'react';
import { FaSackDollar, FaHeadset, FaShieldHalved } from 'react-icons/fa6';

const FeaturesSection = () => {
  return (
    <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800">Tại sao chọn SkyBooker?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Feature 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        <FaSackDollar />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Giá tốt nhất</h3>
                    <p className="text-slate-500">Cam kết giá vé rẻ nhất thị trường với chính sách hoàn tiền nếu tìm thấy giá thấp hơn.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        <FaHeadset />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Hỗ trợ 24/7</h3>
                    <p className="text-slate-500">Đội ngũ nhân viên hỗ trợ nhiệt tình, sẵn sàng giải đáp mọi thắc mắc của bạn.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        <FaShieldHalved />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thanh toán an toàn</h3>
                    <p className="text-slate-500">Hệ thống bảo mật tối tân giúp bảo vệ thông tin cá nhân và giao dịch của bạn.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturesSection;