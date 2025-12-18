// components/FlightFeatures.tsx
import React from "react";
import {
  FaSackDollar,
  FaHeadset,
  FaHandshake,
  FaPlaneCircleCheck,
} from "react-icons/fa6";

const FlightFeatures = () => {
  return (
    <section className="bg-red-50 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Trải nghiệm bay đẳng cấp
          </h2>
          <p className="mt-2 text-slate-500">
            Chúng tôi cam kết mang lại những giá trị tốt nhất cho chuyến đi của
            bạn
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
              <FaSackDollar />
            </div>
            <h3 className="mb-2 text-lg font-bold">Giá Tốt Nhất</h3>
            <p className="text-sm text-slate-500">
              So sánh và lựa chọn vé máy bay với mức giá cạnh tranh nhất từ hàng
              trăm hãng hàng không.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
              <FaPlaneCircleCheck />
            </div>
            <h3 className="mb-2 text-lg font-bold">Đặt Vé Dễ Dàng</h3>
            <p className="text-sm text-slate-500">
              Giao diện thân thiện, quy trình đặt vé đơn giản chỉ trong vài cú
              nhấp chuột.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
              <FaHandshake />
            </div>
            <h3 className="mb-2 text-lg font-bold">Thanh Toán An Toàn</h3>
            <p className="text-sm text-slate-500">
              Hệ thống bảo mật cao, đa dạng phương thức thanh toán, đảm bảo an
              toàn tuyệt đối.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
              <FaHeadset />
            </div>
            <h3 className="mb-2 text-lg font-bold">Hỗ Trợ Tận Tâm</h3>
            <p className="text-sm text-slate-500">
              Đội ngũ support chuyên nghiệp luôn sẵn sàng giải đáp mọi thắc mắc
              của bạn 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightFeatures;
