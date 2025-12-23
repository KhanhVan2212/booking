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
              Công ty Cổ phần Du Lịch Hàng Không Hà Anh là một trong những công
              ty cung ứng dịch vụ vé máy bay hàng đầu và chuyên nghiệp tại Việt
              Nam và trên thế giới. Cùng với bề dày kinh nghiệm hàng chục năm
              hoạt động trong lĩnh vực cung cấp vé máy bay và các dịch vụ hàng
              không, công ty chúng tôi còn mở rộng sang các lĩnh vực khác như du
              lịch, hội nghị, hội thảo, tổ chức sự kiện....
            </p>
            <p className="mb-6 text-justify leading-relaxed text-slate-600">
              Cùng với đội ngũ nhân viên được đào tạo bài bản, nhiệt tình, thân
              thiện và chuyên nghiệp. Chúng tôi tự tin luôn mang đến chất lượng
              dịch vụ tốt nhất cũng như giá cả hợp lý nhất và mang lại giá trị
              tối ưu cho quý khách hàng.
            </p>

            <h3 className="mb-4 text-xl font-bold text-slate-800">
              Lịch sử hình thành
            </h3>
            <p className="mb-8 text-justify leading-relaxed text-slate-600">
              Công ty Cổ phần Du Lịch Hàng Không Hà Anh được thành lập năm 2002, hoạt động trong
              lĩnh vực cung cấp vé máy bay và dịch vụ hàng không. Năm 2011, Công ty chính thức
              chuyển đổi sang mô hình công ty cổ phần, đánh dấu bước phát triển quan trọng về quy mô
              và năng lực quản trị. Với hơn 20 năm kinh nghiệm, Hà Anh đã khẳng định uy tín và vị thế trên
              thị trường, trở thành đối tác tin cậy của nhiều cơ quan, bộ ban ngành thuộc khối ngân sách
              nhà nước và các doanh nghiệp lớn.
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
     
    </section>
  );
};

export default AboutmeSection;
