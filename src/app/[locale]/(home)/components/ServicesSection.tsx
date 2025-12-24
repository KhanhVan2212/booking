import React from "react";
import {
  FaPlane,
  FaUmbrellaBeach,
  FaMicrophoneLines,
  FaHandHoldingHeart,
  FaPassport,
  FaSuitcaseRolling,
  FaHeadset,
  FaTicket,
  FaHotel,
  FaRotate,
  FaCheckToSlot,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const MAIN_SERVICES = [
  {
    icon: FaPlane,
    title: "Vé máy bay Toàn cầu",
    color: "red",
    items: [
      "Vé nội địa & Quốc tế 24/7",
      "Vé đoàn, Công tác, Vé Chính khách",
      "Combo Tiết kiệm (Vé + Khách sạn)",
      "Điều kiện hoàn hủy linh hoạt",
    ],
  },
  {
    icon: FaUmbrellaBeach,
    title: "Du lịch & Lữ hành",
    color: "blue",
    items: [
      "Tour du lịch Cao cấp (Luxury)",
      "Tour MICE (Hội nghị kết hợp nghỉ dưỡng)",
      "Dịch vụ đặt phòng khách sạn toàn cầu",
      "Bảo hiểm du lịch quốc tế",
    ],
  },
  {
    icon: FaMicrophoneLines,
    title: "Sự kiện & Hội nghị",
    color: "orange",
    items: [
      "Tổ chức Hội nghị, Hội thảo Quốc tế",
      "Cung cấp vé đoàn cho sự kiện lớn",
      "Logistics và vận chuyển khách mời",
    ],
  },
  {
    icon: FaHandHoldingHeart,
    title: "Dịch vụ Hỗ trợ ",
    color: "green",
    items: [
      "Vé máy bay khẩn cấp (Last-minute)",
      "Hỗ trợ thủ tục Visa nhanh chóng",
      "Chăm sóc khách hàng VIP / Ưu tiên",
    ],
  },
];
 

const DETAILED_SERVICES = [
  {
    icon: FaPassport,
    title: "Tư vấn Visa",
    desc: "Hỗ trợ thủ tục nhập cảnh",
  },
  {
    icon: FaRotate,
    title: "Hoàn / Đổi vé",
    desc: "Xử lý nhanh chóng",
  },
  {
    icon: FaCheckToSlot,
    title: "Check-in Online",
    desc: "Chọn chỗ ngồi trước",
  },
  {
    icon: FaSuitcaseRolling,
    title: "Mua thêm Hành lý",
    desc: "Giá ưu đãi đại lý",
  },
  {
    icon: FaTicket,
    title: "Tư vấn Hành trình",
    desc: "Tối ưu chi phí & giờ bay",
  },
  {
    icon: FaHeadset,
    title: "Hỗ trợ 24/7",
    desc: "Luôn sẵn sàng",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* 1. HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-red-600">
            Hệ sinh thái dịch vụ
          </span>
          <h2 className="mt-2 text-3xl font-bold text-slate-800 md:text-4xl">
            Giải pháp toàn diện cho <br /> mọi hành trình của bạn
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-red-600"></div>
        </motion.div>

        {/* 2. MAIN SERVICES GRID (4 Cột chính) */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {MAIN_SERVICES.map((service, index) => {
            const Icon = service.icon;
            // Dynamic styling based on color prop
            const bgClass = {
              red: "bg-red-50 group-hover:bg-red-100",
              blue: "bg-blue-50 group-hover:bg-blue-100",
              orange: "bg-orange-50 group-hover:bg-orange-100",
              green: "bg-green-50 group-hover:bg-green-100",
            }[service.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:border-red-200 hover:shadow-xl"
              >
                <div
                  className={`absolute right-0 top-0 -mr-4 -mt-4 h-24 w-24 rounded-bl-full transition ${bgClass}`}
                ></div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-600 text-2xl text-white shadow-lg shadow-red-600/30">
                    <Icon />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-800">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className={`h-1.5 w-1.5 ${service.color === "red" ? "bg-red-500" : "bg-slate-400"} mt-1.5 rounded-full`}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. DETAILED FLIGHT SERVICES (Tiện ích chi tiết) */}
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mb-10 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-800">
              Tiện ích Hàng không Chi tiết
            </h3>
            <p className="mt-2 text-slate-500">
              Chúng tôi hỗ trợ bạn từng bước nhỏ nhất trên hành trình bay
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {DETAILED_SERVICES.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-white text-2xl text-red-600 shadow-sm transition duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <h4 className="text-sm font-bold text-slate-700">
                    {item.title}
                  </h4>
                  <p className="mt-1 px-2 text-xs text-slate-500">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
