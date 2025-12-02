// components/DestinationsSection.tsx
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

// Định nghĩa kiểu dữ liệu cho một địa điểm
interface Destination {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const destinationsData: Destination[] = [
  {
    id: 1,
    name: "Đà Nẵng",
    price: "1.200.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Hội An",
    price: "890.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Phú Quốc",
    price: "1.500.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Đà Lạt",
    price: "950.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const DestinationsSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Điểm đến phổ biến
          </h2>
          <p className="mt-2 text-slate-500">
            Các chuyến bay được tìm kiếm nhiều nhất trong 24h qua
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 font-semibold text-sky-600 hover:underline"
        >
          Xem tất cả <FaArrowRight />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {destinationsData.map((dest) => (
          <div key={dest.id} className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-md">
              {/* Lưu ý: Để tối ưu, nên dùng next/image thay cho thẻ img thường */}
              <Image
                src={dest.imageUrl}
                alt={dest.name}
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{dest.name}</h3>
                <p className="text-sm opacity-90">Từ {dest.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
