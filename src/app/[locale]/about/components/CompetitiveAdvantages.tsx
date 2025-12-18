// components/CompetitiveAdvantages.tsx
import React from "react";
import {
  FaTags,
  FaPlaneCircleCheck,
  FaBriefcase,
  FaHeadset,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: FaTags,
    title: "Cung cấp vé máy bay giá cạnh tranh nhất",
    description:
      "Là đại lý cấp 1 của các hãng hàng không hàng đầu, Hà Anh cung cấp giá vé cạnh tranh nhất trên thị trường cùng các chính sách đặc biệt khác đảm bảo tối ưu về chi phí và trải nghiệm của khách hàng. Chúng tôi còn có chính sách giá đặc biệt dành cho doanh nghiệp, tổ chức lớn, đoàn khách đông và các chuyến công tác dài hạn.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: FaPlaneCircleCheck,
    title: "Giải pháp đặt vé linh hoạt - Hỗ trợ xuyên suốt",
    description:
      "Hà Anh tích hợp hệ thống quản lý vé thông minh, giúp việc xử lý vé cho khách hàng linh hoạt, dễ dàng điều chỉnh lịch trình và xử lý các tình huống phát sinh. Hỗ trợ khách hàng tại quầy làm thủ tục, giữ ghế trên và lối đi riêng tại sân bay, giúp quá trình di chuyển thuận tiện và nhanh chóng hơn. Chúng tôi có chuyên môn sâu trong điều phối hành trình cho các đoàn lớn, hội nghị quốc tế và lịch trình đa điểm.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FaBriefcase,
    title: "Đối tác tin cậy của chính phủ & doanh nghiệp lớn",
    description:
      "Hà Anh có bề dày kinh nghiệm trong việc cung cấp dịch vụ cho khối cơ quan chính phủ, Bộ/ Ngành và các tập đoàn, doanh nghiệp lớn. Chúng tôi cung cấp thành công các dịch vụ hàng không cho các đoàn chính khách, các đoàn lãnh đạo cấp cao, và các đoàn khách hàng VIP.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FaHeadset,
    title: "Dịch vụ tận tâm, linh hoạt. Hỗ trợ 24/7",
    description:
      "Hà Anh không chỉ cung cấp vé máy bay tại chỗ mà còn đồng hành cùng khách hàng qua các trải nghiệm trên mọi hành trình. Với đội ngũ tư vấn chuyên nghiệp, nhiệt tình hỗ trợ 24/7, đảm bảo khách hàng luôn được quan tâm chăm sóc từ giai đoạn đặt vé, trong suốt chuyến đi cho đến khi hoàn tất hành trình. Các hỗ trợ trong trường hợp khẩn cấp như: Xử lý vé đối với chuyến bay đã kín chỗ, hỗ trợ y tế với các trường hợp có vấn đề về sức khỏe,...",
    color: "bg-orange-100 text-orange-600",
  },
];

const CompetitiveAdvantages = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-red-600">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="mt-2 text-3xl font-bold text-slate-800 md:text-4xl">
            Lợi thế cạnh tranh
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon />
                  </div>
                  <span className="text-5xl font-bold text-slate-100">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-justify leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages;
