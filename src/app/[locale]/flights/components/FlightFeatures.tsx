// components/FlightFeatures.tsx
import React from "react";
import {
  FaSackDollar,
  FaHeadset,
  FaHandshake,
  FaPlaneCircleCheck,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const FLIGHT_FEATURES = [
  {
    icon: FaSackDollar,
    title: "Giá Tốt Nhất",
    desc: "So sánh và lựa chọn vé máy bay với mức giá cạnh tranh nhất từ hàng trăm hãng hàng không.",
  },
  {
    icon: FaPlaneCircleCheck,
    title: "Đặt Vé Dễ Dàng",
    desc: "Giao diện thân thiện, quy trình đặt vé đơn giản chỉ trong vài cú nhấp chuột.",
  },
  {
    icon: FaHandshake,
    title: "Thanh Toán An Toàn",
    desc: "Hệ thống bảo mật cao, đa dạng phương thức thanh toán, đảm bảo an toàn tuyệt đối.",
  },
  {
    icon: FaHeadset,
    title: "Hỗ Trợ Tận Tâm",
    desc: "Đội ngũ support chuyên nghiệp luôn sẵn sàng giải đáp mọi thắc mắc của bạn 24/7.",
  },
];

const FlightFeatures = () => {
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
            Trải nghiệm bay đẳng cấp
          </h2>
          <p className="mt-2 text-slate-500">
            Chúng tôi cam kết mang lại những giá trị tốt nhất cho chuyến đi của
            bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
          {FLIGHT_FEATURES.map((feature, index) => {
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

export default FlightFeatures;
