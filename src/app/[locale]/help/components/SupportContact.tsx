// components/SupportContact.tsx
import React from "react";
import { FaHeadset, FaEnvelope, FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const SupportContact = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-800">Vẫn cần hỗ trợ?</h2>
          <p className="mt-2 text-slate-500">
            Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc
            mắc của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Hotline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
              <FaHeadset />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-800">
              Tổng đài 24/7
            </h3>
            <p className="mb-4 text-slate-500">
              Gọi ngay để được hỗ trợ trực tiếp từ nhân viên tư vấn.
            </p>
            <a
              href="tel:02437714566"
              className="text-xl font-bold text-red-600 hover:underline"
            >
              024 3771 4566
            </a>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <FaEnvelope />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-800">Gửi Email</h3>
            <p className="mb-4 text-slate-500">
              Gửi yêu cầu chi tiết, chúng tôi sẽ phản hồi trong vòng 24h.
            </p>
            <a
              href="mailto:PHONGVE@HAANHJSC.COM.VN"
              className="text-sm font-bold text-blue-600 hover:underline"
            >
              PHONGVE@HAANHJSC.COM.VN
            </a>
          </motion.div>

          {/* Card 3: Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
              <FaMapLocationDot />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-800">
              Văn phòng chính
            </h3>
            <p className="mb-4 text-slate-500">
              Đến trực tiếp văn phòng để được tư vấn và hỗ trợ.
            </p>
            <span className="text-sm font-semibold text-slate-700">
              VPGD: Tầng 9 Tòa nhà 26 Liễu Giai, Phường Ngọc Hà, Thành phố Hà
              Nội
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportContact;
