// components/FaqSection.tsx
"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";

const faqs = [
  {
    category: "Đặt vé & Thanh toán",
    questions: [
      {
        q: "Làm thế nào để đặt vé máy bay trực tuyến?",
        a: "Bạn có thể đặt vé dễ dàng trên website của chúng tôi bằng cách nhập điểm đi, điểm đến, ngày bay và số lượng hành khách tại khung tìm kiếm. Sau đó chọn chuyến bay phù hợp và tiến hành thanh toán.",
      },
      {
        q: "Tôi có thể thanh toán bằng những hình thức nào?",
        a: "Chúng tôi chấp nhận thanh toán qua thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB), chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay) và thanh toán tại cửa hàng tiện lợi.",
      },
      {
        q: "Làm sao để biết vé của tôi đã được đặt thành công?",
        a: "Sau khi thanh toán thành công, bạn sẽ nhận được email xác nhận kèm mã đặt chỗ và vé điện tử gửi đến địa chỉ email đã đăng ký.",
      },
    ],
  },
  {
    category: "Hành lý & Thủ tục",
    questions: [
      {
        q: "Quy định về hành lý xách tay như thế nào?",
        a: "Mỗi hành khách được mang 01 kiện hành lý xách tay không quá 7kg và kích thước không vượt quá 56cm x 36cm x 23cm.",
      },
      {
        q: "Tôi cần có mặt tại sân bay trước bao lâu?",
        a: "Đối với chuyến bay nội địa, bạn nên có mặt trước 90 phút. Đối với chuyến bay quốc tế, bạn nên có mặt trước 120 - 180 phút để làm thủ tục.",
      },
    ],
  },
  {
    category: "Hoàn & Đổi vé",
    questions: [
      {
        q: "Tôi có thể thay đổi ngày bay hoặc tên hành khách không?",
        a: "Việc thay đổi phụ thuộc vào điều kiện vé bạn đã mua. Vui lòng liên hệ tổng đài hoặc gửi yêu cầu hỗ trợ để được kiểm tra và tư vấn chi tiết.",
      },
      {
        q: "Quy trình hoàn vé diễn ra trong bao lâu?",
        a: "Thời gian xử lý hoàn vé thường từ 7 - 15 ngày làm việc tùy thuộc vào quy định của hãng hàng không và ngân hàng phát hành thẻ.",
      },
    ],
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-10 text-center text-3xl font-bold text-slate-800"
        >
          Câu hỏi thường gặp
        </motion.h2>

        <div className="space-y-8">
          {faqs.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.2 }}
            >
              <h3 className="mb-4 text-xl font-bold text-red-600">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.questions.map((item, itemIdx) => {
                  const uniqueId = `${groupIdx}-${itemIdx}`;
                  const isOpen = openIndex === uniqueId;

                  return (
                    <div
                      key={itemIdx}
                      className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? "border-red-200 bg-red-50" : "border-slate-200 bg-white"}`}
                    >
                      <button
                        onClick={() => toggleFaq(uniqueId)}
                        className="flex w-full items-center justify-between p-5 text-left font-medium text-slate-800 focus:outline-none"
                      >
                        <span className="text-lg">{item.q}</span>
                        <span
                          className={`ml-4 text-red-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        >
                          {isOpen ? <FaMinus /> : <FaPlus />}
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="px-5 pb-5 text-slate-600">{item.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
