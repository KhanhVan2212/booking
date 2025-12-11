import React from 'react'
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone } from 'react-icons/fa6'

const ContactSection = () => {
  return (
     <section className="py-20 relative overflow-hidden">
        {/* Decor background */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-50 -skew-x-12 -translate-x-20 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Contact Info */}
                <div>
                    <span className="text-red-600 font-bold uppercase tracking-wider text-sm">Liên hệ</span>
                    <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-6">Kết nối với Hà Anh JSC</h2>
                    <p className="text-slate-500 mb-10">
                        Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn. Hãy liên hệ với chúng tôi qua các kênh sau:
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                                <FaPhone />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg">Hotline</h4>
                                <p className="text-red-600 font-bold text-xl">024 3771 4566</p>
                                <p className="text-slate-500 text-sm">Hỗ trợ 24/7</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg">Email</h4>
                                <p className="text-slate-600 font-medium">PHONGVE@HAANHJSC.COM.VN</p>
                                <p className="text-slate-500 text-sm">Phản hồi trong vòng 24h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                                <FaLocationDot />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg">Văn phòng</h4>
                                <p className="text-slate-600 font-medium">Số 63 Mai Hắc Đế, P. Bùi Thị Xuân,</p>
                                <p className="text-slate-600 font-medium">Q. Hai Bà Trưng, Hà Nội</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Gửi tin nhắn cho chúng tôi</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Họ tên</label>
                                <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Số điện thoại</label>
                                <input type="tel" placeholder="09xxxxxx" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                            <input type="email" placeholder="example@gmail.com" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Nội dung</label>
                            <textarea rows={4} placeholder="Bạn cần hỗ trợ gì?" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"></textarea>
                        </div>
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-600/30 transition transform hover:-translate-y-1 flex justify-center items-center gap-2">
                            <FaPaperPlane /> Gửi tin nhắn
                        </button>
                    </form>
                </div>

            </div>
        </div>
      </section>
  )
}

export default ContactSection