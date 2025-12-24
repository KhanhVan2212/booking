"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaPlane,
  FaUsers,
  FaMicrophone,
  FaAward,
  FaCalendarCheck,
} from "react-icons/fa6";

const MicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
          alt="MICE Event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-4xl font-bold uppercase tracking-wider md:text-6xl"
          >
            Du lịch M.I.C.E
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl px-4 text-lg font-light md:text-xl"
          >
            Giải pháp tổ chức sự kiện, hội nghị, hội thảo kết hợp du lịch chuyên
            nghiệp và đẳng cấp.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Tổng quan
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-bold text-slate-800 lg:text-4xl">
              M.I.C.E là gì?
            </h2>
            <p className="mb-6 text-justify leading-relaxed text-slate-600">
              M.I.C.E là loại hình du lịch kết hợp hội nghị, hội thảo, triển
              lãm, tổ chức sự kiện, du lịch khen thưởng của các công ty cho nhân
              viên, đối tác. Đây là loại hình du lịch được rất nhiều nước đẩy
              mạnh phát triển, vì giá trị của nó cao hơn nhiều so với du lịch cá
              nhân hay du lịch nhóm.
            </p>
            <p className="mb-8 text-justify leading-relaxed text-slate-600">
              Tại <span className="font-bold text-red-600">Hà Anh JSC</span>,
              chúng tôi cung cấp giải pháp M.I.C.E toàn diện, từ việc lên ý
              tưởng, thiết kế chương trình, đặt vé máy bay, khách sạn đến tổ
              chức gala dinner, team building, đảm bảo mang lại trải nghiệm
              tuyệt vời nhất cho doanh nghiệp của bạn.
            </p>
            <Link
              href="#contact"
              className="rounded-full bg-red-600 px-8 py-3 text-sm font-bold uppercase text-white shadow-lg transition hover:bg-red-700"
            >
              Liên hệ tư vấn
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <Image
              src="https://ychef.files.bbci.co.uk/1920x1080/p0g820xn.jpeg"
              alt="Conference"
              width={400}
              height={300}
              className="h-48 w-full rounded-2xl object-cover shadow-md md:h-64"
            />
            <Image
              src="https://rootytrip.com/wp-content/uploads/2025/01/meeting-mice-tourism.jpg"
              alt="Meeting"
              width={400}
              height={300}
              className="mt-8 h-48 w-full rounded-2xl object-cover shadow-md md:h-64"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Dịch vụ của chúng tôi
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-800 lg:text-4xl">
              Các loại hình M.I.C.E
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {/* Meeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                <FaHandshake />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-800">Meeting</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Tổ chức các cuộc họp, gặp gỡ đối tác, khách hàng chuyên nghiệp
                tại các địa điểm sang trọng, đầy đủ tiện nghi.
              </p>
            </motion.div>

            {/* Incentive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                <FaAward />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-800">
                Incentive
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Du lịch khen thưởng dành cho nhân viên, đại lý xuất sắc. Hành
                trình được thiết kế riêng biệt, đẳng cấp.
              </p>
            </motion.div>

            {/* Conference */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                <FaMicrophone />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-800">
                Conference
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Tổ chức hội nghị, hội thảo quy mô lớn. Cung cấp trang thiết bị
                âm thanh, ánh sáng hiện đại, check-in tự động.
              </p>
            </motion.div>

            {/* Exhibition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                <FaUsers />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-800">
                Exhibition
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Tổ chức triển lãm, giới thiệu sản phẩm. Thiết kế gian hàng ấn
                tượng, thu hút khách tham quan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Tại sao chọn Hà Anh JSC?
            </span>
            <h2 className="mb-8 mt-2 text-3xl font-bold text-slate-800">
              Đơn vị tổ chức chuyên nghiệp, tận tâm
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <FaPlane />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Dịch vụ trọn gói
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Chúng tôi cung cấp giải pháp trọn gói bao gồm vé máy bay,
                    khách sạn, xe đưa đón và tổ chức sự kiện, giúp bạn tiết kiệm
                    thời gian và chi phí.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <FaUsers />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Nhân sự giàu kinh nghiệm
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Đội ngũ nhân sự được đào tạo bài bản, am hiểu về du lịch và
                    tổ chức sự kiện, luôn sẵn sàng hỗ trợ khách hàng 24/7.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <FaCalendarCheck />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Cam kết chất lượng
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Cam kết mang đến chất lượng dịch vụ tốt nhất, đảm bảo sự
                    thành công cho mọi sự kiện của khách hàng.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=800&auto=format&fit=crop"
              alt="Why choose us"
              fill
              className="rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-red-600 p-8 text-white shadow-lg md:block">
              <div className="mb-2 text-4xl font-bold">20+</div>
              <div className="text-sm font-medium opacity-90">
                Năm kinh nghiệm
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Bạn đã sẵn sàng cho sự kiện tiếp theo?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            Hãy để Hà Anh JSC đồng hành cùng bạn tạo nên những sự kiện ấn tượng
            và thành công. Liên hệ ngay với chúng tôi để được tư vấn và nhận báo
            giá tốt nhất.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:02437714566"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 font-bold transition hover:bg-red-700"
            >
              Gọi ngay: 024 3771 4566
            </a>
            <a
              href="mailto:PHONGVE@HAANHJSC.COM.VN"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Gửi email yêu cầu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicePage;
