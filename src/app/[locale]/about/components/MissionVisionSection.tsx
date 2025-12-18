// components/MissionVisionSection.tsx
import React from "react";
import { FaRocket, FaEye } from "react-icons/fa6";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Sứ mệnh */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col rounded-2xl border border-red-100 bg-red-50 p-10"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-white shadow-lg shadow-red-600/30">
              <FaRocket />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-800">Sứ mệnh</h3>
            <h4 className="mb-4 text-lg font-semibold text-red-600">
              Kết nối hành trình, nâng tầm trải nghiệm
            </h4>
            <p className="text-justify leading-relaxed text-slate-600">
              Hà Anh cung cấp dịch vụ vé máy bay, du lịch và tổ chức sự kiện
              chuyên nghiệp. Ngoài mang đến giải pháp di chuyển linh hoạt và tối
              ưu giúp khách hàng tận hưởng hành trình trọn vẹn, Hà Anh còn cung
              cấp các nhóm dịch vụ trọn gói giúp khách hàng tiết kiệm thời gian
              mà vẫn đạt hiệu quả mong muốn.
            </p>
          </motion.div>

          {/* Tầm nhìn */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex h-full flex-col rounded-2xl border border-blue-100 bg-blue-50 p-10"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-lg shadow-blue-600/30">
              <FaEye />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-800">Tầm nhìn</h3>
            <p className="text-justify leading-relaxed text-slate-600">
              Trở thành một trong những thương hiệu dịch vụ hàng không hàng đầu
              tại Việt Nam, vươn tầm khu vực và quốc tế nhằm mang đến cho khách
              hàng những trải nghiệm xuất sắc, các giá trị vượt trội và đóng góp
              tích cực vì sự phát triển bền vững.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
