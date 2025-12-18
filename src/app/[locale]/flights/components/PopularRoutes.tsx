// components/PopularRoutes.tsx
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
// Định nghĩa kiểu dữ liệu cho một tuyến bay
interface Route {
  id: number;
  from: string;
  to: string;
  price: string;
  imageUrl: string;
}

const routesData: Route[] = [
  {
    id: 1,
    from: "Hà Nội",
    to: "Hồ Chí Minh",
    price: "1.200.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    from: "Hồ Chí Minh",
    to: "Đà Nẵng",
    price: "890.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    from: "Hà Nội",
    to: "Phú Quốc",
    price: "1.500.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    from: "Đà Nẵng",
    to: "Hà Nội",
    price: "950.000 VNĐ",
    imageUrl:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const PopularRoutes = () => {
  return (
    <section className="container mx-auto px-6 py-16" id="popular-routes">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mb-8 flex items-end justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Chặng bay phổ biến
          </h2>
          <p className="mt-2 text-slate-500">
            Các chặng bay được đặt nhiều nhất trong tuần qua
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 font-semibold text-red-600 hover:underline"
        >
          Xem tất cả <FaArrowRight />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {routesData.map((route, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={route.imageUrl}
                alt={`${route.from} - ${route.to}`}
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">
                  {route.from} - {route.to}
                </h3>
                <p className="text-sm opacity-90">Từ {route.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;
