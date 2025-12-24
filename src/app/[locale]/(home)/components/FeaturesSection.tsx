import React from "react";
import {
  FaSackDollar,
  FaHeadset,
  FaHandshake,
  FaPlaneCircleCheck,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: FaSackDollar,
    title: "Giá Vé Cạnh Tranh",
    desc: "Cung cấp vé máy bay với mức giá tốt nhất thị trường, giúp tối ưu chi phí cho mọi hành trình.",
  },
  {
    icon: FaPlaneCircleCheck,
    title: "Giải Pháp Linh Hoạt",
    desc: "Mang đến giải pháp đặt vé thuận tiện và hỗ trợ tận tình xuyên suốt chuyến đi của bạn.",
  },
  {
    icon: FaHandshake,
    title: "Đối Tác Tin Cậy",
    desc: "Tự hào là đối tác uy tín được các cơ quan chính phủ và doanh nghiệp lớn tin chọn.",
  },
  {
    icon: FaHeadset,
    title: "Hỗ Trợ 24/7",
    desc: "Dịch vụ tận tâm, linh hoạt với đội ngũ chăm sóc khách hàng luôn sẵn sàng 24/7.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-red-50 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-800">
            Tại sao chọn Hà Anh JSC?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
                  <Icon />
                </div>
                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
