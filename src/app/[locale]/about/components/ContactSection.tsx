import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState({
    hotline: "024 3771 4566",
    hotlineDesc: "Hỗ trợ 24/7",
    email: "PHONGVE@HAANHJSC.COM.VN",
    emailDesc: "Phản hồi trong vòng 24h",
    headquarters:
      "Số 2 ngách 3 Ngõ 51 phố Lương Khánh Thiện , Phường Tương Mai, Thành phố Hà Nội",
    office: "Tầng 9 Tòa nhà 26 Liễu Giai, Phường Ngọc Hà, Thành phố Hà Nội.",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/globals/settings");
        const data = await response.json();
        if (data && !data.errors) {
          setContactInfo((prev) => ({
            hotline: data.hotline || prev.hotline,
            hotlineDesc: data.hotlineDesc || prev.hotlineDesc,
            email: data.email || prev.email,
            emailDesc: data.emailDesc || prev.emailDesc,
            headquarters: data.headquarters || prev.headquarters,
            office: data.office || prev.office,
          }));
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <section className="relative overflow-hidden py-20" id="contact">
      {/* Decor background */}
      <div className="absolute left-0 top-0 z-0 h-full w-1/2 -translate-x-20 -skew-x-12 bg-slate-50"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
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
                    {contactInfo.hotline}
                  </p>
                  <p className="text-sm text-slate-500">
                    {contactInfo.hotlineDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Email</h4>
                  <p className="font-medium text-slate-600">
                    {contactInfo.email}
                  </p>
                  <p className="text-sm text-slate-500">
                    {contactInfo.emailDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Trụ sở</h4>
                  <p className="font-medium text-slate-600">
                    {contactInfo.headquarters}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Văn phòng giao dịch
                  </h4>
                  <p className="font-medium text-slate-600">
                    {contactInfo.office}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-800">
              Gửi tin nhắn cho chúng tôi
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { toast } from "sonner"; // Add import

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    confirm_email: "", // Honeypot field
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { fullName: "", phone: "", email: "", message: "" };

    if (formData.fullName.length < 2) {
      newErrors.fullName = "Họ tên phải có ít nhất 2 ký tự";
      isValid = false;
    }

    if (formData.phone.length < 8) {
      newErrors.phone = "Số điện thoại không hợp lệ (tối thiểu 8 số)";
      isValid = false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Email không hợp lệ";
      isValid = false;
    }

    if (formData.message.length < 5) {
      newErrors.message = "Nội dung quá ngắn (tối thiểu 5 ký tự)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Vui lòng kiểm tra lại thông tin nhập");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại sớm.");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
          confirm_email: "",
        });
        setErrors({ fullName: "", phone: "", email: "", message: "" });
      } else {
        // Handle validation errors from backend if any
        if (data.details) {
          const backendErrors = {
            fullName: "",
            phone: "",
            email: "",
            message: "",
          };
          data.details.forEach((err: any) => {
            if (err.path === "fullName") backendErrors.fullName = err.message;
            if (err.path === "phone") backendErrors.phone = err.message;
            if (err.path === "email") backendErrors.email = err.message;
            if (err.path === "message") backendErrors.message = err.message;
          });
          setErrors(backendErrors);
        }
        toast.error(data.error || "Gửi thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      toast.error("Lỗi kết nối. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field - hidden */}
      <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          value={formData.confirm_email}
          onChange={(e) =>
            setFormData({ ...formData, confirm_email: e.target.value })
          }
          placeholder="Skip this field"
          autoComplete="off"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Họ tên *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="Nguyễn Văn A"
            className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 ${
              errors.fullName
                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 focus:border-red-500 focus:ring-red-500"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Số điện thoại *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="09xxxxxx"
            className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 ${
              errors.phone
                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 focus:border-red-500 focus:ring-red-500"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">
          Email *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="example@gmail.com"
          className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300 focus:border-red-500 focus:ring-red-500"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">
          Nội dung *
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Bạn cần hỗ trợ gì?"
          className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300 focus:border-red-500 focus:ring-red-500"
          }`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>
      <button
        disabled={loading}
        className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-bold text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-1 hover:bg-red-700 disabled:bg-gray-400"
      >
        {loading ? (
          "Đang gửi..."
        ) : (
          <>
            <FaPaperPlane /> Gửi tin nhắn
          </>
        )}
      </button>
    </form>
  );
};

export default ContactSection;
