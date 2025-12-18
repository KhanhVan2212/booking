import React from "react";
import { ContactSectionData } from "@/types/landing-page.types";
import {
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa6";

interface ContactSectionProps {
  data?: ContactSectionData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const iconMap: Record<string, React.ReactNode> = {
    phone: <FaPhone />,
    email: <FaEnvelope />,
    location: <FaLocationDot />,
  };

  if (data) {
    // CMS mode
    return (
      <section className="relative overflow-hidden py-20" id="contact">
        <div className="absolute left-0 top-0 z-0 h-full w-1/2 -translate-x-20 -skew-x-12 bg-slate-50"></div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-red-600">
                {data.badge}
              </span>
              <h2 className="mb-6 mt-2 text-3xl font-bold text-slate-800">
                {data.title}
              </h2>
              <p className="mb-10 text-slate-500">{data.description}</p>

              <div className="space-y-8">
                {data.contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                      {iconMap[info.type]}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">
                        {info.title}
                      </h4>
                      {info.type === "location" ? (
                        <div className="font-medium text-slate-600">
                          {info.value.split("\n").map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p
                          className={
                            info.type === "phone"
                              ? "text-xl font-bold text-red-600"
                              : "font-medium text-slate-600"
                          }
                        >
                          {info.value}
                        </p>
                      )}
                      {info.subtitle && (
                        <p className="text-sm text-slate-500">
                          {info.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-slate-800">
                {data.form.title}
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      {data.form.fields.name}
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      {data.form.fields.phone}
                    </label>
                    <input
                      type="tel"
                      placeholder="09xxxxxx"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    {data.form.fields.email}
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    {data.form.fields.message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Bạn cần hỗ trợ gì?"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <button className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-bold text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-1 hover:bg-red-700">
                  <FaPaperPlane /> {data.form.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default mode (main branch)
  return (
    <section className="relative overflow-hidden py-20" id="contact">
      <div className="absolute left-0 top-0 z-0 h-full w-1/2 -translate-x-20 -skew-x-12 bg-slate-50"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Liên hệ
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-bold text-slate-800">
              Kết nối với Hà Anh JSC
            </h2>
            <p className="mb-10 text-slate-500">
              Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của
              bạn. Hãy liên hệ với chúng tôi qua các kênh sau:
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Hotline</h4>
                  <p className="text-xl font-bold text-red-600">
                    024 3771 4566
                  </p>
                  <p className="text-sm text-slate-500">Hỗ trợ 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Email</h4>
                  <p className="font-medium text-slate-600">
                    PHONGVE@HAANHJSC.COM.VN
                  </p>
                  <p className="text-sm text-slate-500">
                    Phản hồi trong vòng 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Văn phòng
                  </h4>
                  <p className="font-medium text-slate-600">
                    Số 2 ngách 3 Ngõ 51 phố Lương Khánh Thiện , Phường Tương
                    Mai, Thành phố Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-2xl font-bold text-slate-800">
              Gửi tin nhắn cho chúng tôi
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="09xxxxxx"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Nội dung
                </label>
                <textarea
                  rows={4}
                  placeholder="Bạn cần hỗ trợ gì?"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
              <button className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-bold text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-1 hover:bg-red-700">
                <FaPaperPlane /> Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;