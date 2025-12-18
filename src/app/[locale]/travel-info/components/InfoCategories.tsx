// components/InfoCategories.tsx
import React from "react";
import {
  FaPassport,
  FaSuitcaseRolling,
  FaTicket,
  FaPlaneArrival,
  FaUserNurse,
  FaCircleQuestion,
} from "react-icons/fa6";

const categories = [
  {
    icon: <FaPassport />,
    title: "Visa & Giấy tờ",
    description:
      "Quy định về hộ chiếu, visa và các giấy tờ tùy thân cần thiết.",
  },
  {
    icon: <FaSuitcaseRolling />,
    title: "Hành lý",
    description:
      "Quy định về kích thước, trọng lượng hành lý xách tay và ký gửi.",
  },
  {
    icon: <FaTicket />,
    title: "Thủ tục Check-in",
    description: "Hướng dẫn check-in trực tuyến và tại quầy sân bay.",
  },
  {
    icon: <FaPlaneArrival />,
    title: "Tiện ích sân bay",
    description: "Thông tin về phòng chờ, dịch vụ ăn uống và đưa đón.",
  },
  {
    icon: <FaUserNurse />,
    title: "Hỗ trợ đặc biệt",
    description: "Dịch vụ cho phụ nữ mang thai, trẻ em và người khuyết tật.",
  },
  {
    icon: <FaCircleQuestion />,
    title: "Câu hỏi thường gặp",
    description: "Giải đáp các thắc mắc phổ biến của hành khách.",
  },
];

const InfoCategories = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          Danh mục thông tin
        </h2>
        <p className="mt-2 text-slate-500">Chọn chủ đề bạn cần tìm hiểu thêm</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-lg"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
              {cat.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-800 group-hover:text-red-600">
              {cat.title}
            </h3>
            <p className="text-slate-500">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCategories;
