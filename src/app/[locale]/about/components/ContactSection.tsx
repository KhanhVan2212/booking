import React from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden py-20" id="contact">
      {/* Decor background */}
      <div className="absolute left-0 top-0 z-0 h-full w-1/2 -translate-x-20 -skew-x-12 bg-slate-50"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Liên hệ
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-bold text-slate-800">
              Kết nối với Hà Anh JSC
            </h2>
            <p className="mb-10 text-slate-500">
              Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của
              bạn. Hãy liên hệ với chúng tôi qua các kênh sau:
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Hotline</h4>
                  <p className="text-xl font-bold text-red-600">
                    024 3771 4566
                  </p>
                  <p className="text-sm text-slate-500">Hỗ trợ 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Email</h4>
                  <p className="font-medium text-slate-600">
                    PHONGVE@HAANHJSC.COM.VN
                  </p>
                  <p className="text-sm text-slate-500">
                    Phản hồi trong vòng 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Trụ sở</h4>
                  <p className="font-medium text-slate-600">
                    Số 2 ngách 3 Ngõ 51 phố Lương Khánh Thiện , Phường Tương
                    Mai, Thành phố Hà Nội
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Văn phòng giao dịch
                  </h4>
                  <p className="font-medium text-slate-600">
                    Tầng 9 Tòa nhà 26 Liễu Giai, Phường Ngọc Hà, Thành phố Hà
                    Nội.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-800">
              Gửi tin nhắn cho chúng tôi
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="09xxxxxx"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Nội dung
                </label>
                <textarea
                  rows={4}
                  placeholder="Bạn cần hỗ trợ gì?"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
              <button className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-bold text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-1 hover:bg-red-700">
                <FaPaperPlane /> Gửi tin nhắn
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
