import React from "react";
import {
  FaChartLine,
  FaCircleCheck,
  FaGlobe,
  FaHandshake,
  FaLocationDot,
  FaUserTie,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutmeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
              className="mb-8 h-64 w-full rounded-2xl object-cover shadow-lg"
              width={300}
              height={300}
              alt="Office"
            />
            <Image
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop"
              className="mt-8 h-64 w-full rounded-2xl object-cover shadow-lg"
              width={300}
              height={300}
              alt="Meeting"
            />
            {/* Decorative Dot */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-red-600 text-2xl text-white shadow-xl">
              <FaHandshake />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Về chúng tôi
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-bold text-slate-800">
              Công ty Cổ phần Du Lịch Hàng Không Hà Anh
            </h2>
            <p className="mb-6 text-justify leading-relaxed text-slate-600">
              Hà Anh JSC là một trong những đơn vị cung ứng dịch vụ vé máy bay
              hàng đầu và chuyên nghiệp tại Việt Nam. Với bề dày kinh nghiệm
              hàng chục năm hoạt động, chúng tôi tự hào là đối tác chiến lược
              của nhiều hãng hàng không lớn trong nước và quốc tế.
            </p>
            <p className="mb-6 text-justify leading-relaxed text-slate-600">
              Không chỉ dừng lại ở dịch vụ vé máy bay, Hà Anh JSC còn mở rộng
              sang các lĩnh vực:{" "}
              <span className="font-semibold text-slate-800">
                Du lịch, Hội nghị, Hội thảo và Tổ chức sự kiện
              </span>
              . Với đội ngũ nhân viên được đào tạo bài bản, nhiệt tình và thân
              thiện, chúng tôi cam kết mang lại giá trị tối ưu nhất cho quý
              khách hàng.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCircleCheck className="text-red-600" />{" "}
                <span className="font-medium text-slate-700">
                  Giá cả hợp lý nhất
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCircleCheck className="text-red-600" />{" "}
                <span className="font-medium text-slate-700">Dịch vụ 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCircleCheck className="text-red-600" />{" "}
                <span className="font-medium text-slate-700">
                  Nhân sự chuyên nghiệp
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCircleCheck className="text-red-600" />{" "}
                <span className="font-medium text-slate-700">
                  Đối tác toàn cầu
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          {/* Phạm vi hoạt động */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-slate-800">
              Phạm vi hoạt động
            </h2>
            <div className="flex flex-col justify-center gap-3 md:flex-row">
              <div className="mx-auto max-w-sm flex-1 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
                  <FaLocationDot />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Nội địa (Việt Nam)
                </h3>
                <p className="mt-2 text-slate-500">
                  Phủ sóng 63 tỉnh thành với mạng lưới đường bay kết nối mọi
                  miền tổ quốc.
                </p>
              </div>
              <div className="mx-auto max-w-sm flex-1 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
                  <FaGlobe />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Quốc tế</h3>
                <p className="mt-2 text-slate-500">
                  Kết nối đến các thành phố lớn trên toàn thế giới thông qua các
                  liên minh hàng không.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Giá trị cốt lõi */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-red-600">
                Kim chỉ nam
              </span>
              <h2 className="mb-12 mt-2 text-3xl font-bold text-slate-800">
                Giá trị cốt lõi
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-red-600 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 -mr-4 -mt-4 h-24 w-24 rounded-bl-full bg-red-50 transition group-hover:bg-red-100"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-600 text-2xl text-white shadow-lg shadow-red-600/30">
                    <FaUserTie />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-800">
                    Chuyên nghiệp
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Quy trình làm việc bài bản, đội ngũ nhân sự được đào tạo
                    chuyên sâu, thái độ phục vụ chuẩn mực.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-red-600 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 -mr-4 -mt-4 h-24 w-24 rounded-bl-full bg-red-50 transition group-hover:bg-red-100"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-600 text-2xl text-white shadow-lg shadow-red-600/30">
                    <FaHandshake />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-800">
                    Tận tâm
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Luôn lắng nghe, thấu hiểu và đặt lợi ích của khách hàng lên
                    hàng đầu. Hỗ trợ khách hàng trên mọi hành trình.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-red-600 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 -mr-4 -mt-4 h-24 w-24 rounded-bl-full bg-red-50 transition group-hover:bg-red-100"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-600 text-2xl text-white shadow-lg shadow-red-600/30">
                    <FaChartLine />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-800">
                    Hiệu quả
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Mang đến giải pháp tối ưu nhất về chi phí và thời gian. Cam
                    kết chất lượng dịch vụ vượt trội.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutmeSection;
