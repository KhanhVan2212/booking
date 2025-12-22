// components/InfoCategories.tsx
import React from "react";
import {
  FaPlaneDeparture,
  FaRoute,
  FaHandshake,
  FaUserShield,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const categories = [
  {
    icon: <FaPlaneDeparture />,
    title: "Dịch vụ vé máy bay",
    description: (
      <>
        Vé nội địa & quốc tế.<br />
        Vé đoàn, vé công tác, vé VIP, vé chính khách.<br />
        Điều kiện hoàn huỷ, thay đổi linh hoạt.
      </>
    ),
  },
  {
    icon: <FaRoute />,
    title: "Dịch vụ du lịch & lữ hành",
    description: (
      <>
        Tour du lịch cao cấp, tour MICE.<br />
        Dịch vụ đặt khách sạn, visa, bảo hiểm du lịch.
      </>
    ),
  },
  {
    icon: <FaHandshake />,
    title: "Dịch vụ tổ chức sự kiện & hội nghị",
    description: (
      <>
        Hội nghị, hội thảo quốc tế.<br />
        Vé máy bay cho các sự kiện và đoàn lớn.
      </>
    ),
  },
  {
    icon: <FaUserShield />,
    title: "Dịch vụ hỗ trợ đặc biệt",
    description: (
      <>
        Vé máy bay khẩn cấp, hỗ trợ thủ tục visa.<br />
        Chăm sóc khách hàng ưu tiên & đặc biệt.
      </>
    ),
  },
];

const InfoCategories = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-slate-800">
          Danh mục thông tin
        </h2>
        <p className="mt-2 text-slate-500">
          Tổng hợp các dịch vụ chúng tôi đang triển khai
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-lg"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
              {cat.icon}
            </div>

            <h3 className="mb-3 text-xl font-bold text-slate-800 group-hover:text-red-600">
              {cat.title}
            </h3>

            <p className="text-slate-500 leading-relaxed">
              {cat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default InfoCategories;
