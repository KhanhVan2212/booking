import React from "react";
import {
  FaSackDollar,
  FaHeadset,
  FaHandshake,
  FaPlaneCircleCheck,
} from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <section className="bg-red-50 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Tại sao chọn Hà Anh JSC?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
              <FaSackDollar />
            </div>
            <h3 className="mb-2 text-lg font-bold">Giá Vé Cạnh Tranh</h3>
            <p className="text-sm text-slate-500">
              Cung cấp vé máy bay với mức giá tốt nhất thị trường, giúp tối ưu
              chi phí cho mọi hành trình.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
              <FaPlaneCircleCheck />
            </div>
            <h3 className="mb-2 text-lg font-bold">Giải Pháp Linh Hoạt</h3>
            <p className="text-sm text-slate-500">
              Mang đến giải pháp đặt vé thuận tiện và hỗ trợ tận tình xuyên suốt
              chuyến đi của bạn.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
              <FaHandshake />
            </div>
            <h3 className="mb-2 text-lg font-bold">Đối Tác Tin Cậy</h3>
            <p className="text-sm text-slate-500">
              Tự hào là đối tác uy tín được các cơ quan chính phủ và doanh
              nghiệp lớn tin chọn.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
              <FaHeadset />
            </div>
            <h3 className="mb-2 text-lg font-bold">Hỗ Trợ 24/7</h3>
            <p className="text-sm text-slate-500">
              Dịch vụ tận tâm, linh hoạt với đội ngũ chăm sóc khách hàng luôn
              sẵn sàng 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
