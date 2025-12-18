import React from 'react'
import { ContactSectionData } from '@/types/landing-page.types'
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone } from 'react-icons/fa6'

interface ContactSectionProps {
  data: ContactSectionData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const iconMap: Record<string, React.ReactNode> = {
    phone: <FaPhone />,
    email: <FaEnvelope />,
    location: <FaLocationDot />,
  };

  return (
     <section className="py-20 relative overflow-hidden">
        {/* Decor background */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-50 -skew-x-12 -translate-x-20 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Contact Info */}
                <div>
                    <span className="text-red-600 font-bold uppercase tracking-wider text-sm">{data.badge}</span>
                    <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-6">{data.title}</h2>
                    <p className="text-slate-500 mb-10">
                        {data.description}
                    </p>

                    <div className="space-y-8">
                        {data.contactInfo.map((info, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                                    {iconMap[info.type]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg">{info.title}</h4>
                                    {info.type === 'location' ? (
                                        <div className="text-slate-600 font-medium">
                                            {info.value.split('\n').map((line, idx) => (
                                                <p key={idx}>{line}</p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className={info.type === 'phone' ? "text-red-600 font-bold text-xl" : "text-slate-600 font-medium"}>
                                            {info.value}
                                        </p>
                                    )}
                                    {info.subtitle && (
                                        <p className="text-slate-500 text-sm">{info.subtitle}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">{data.form.title}</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">{data.form.fields.name}</label>
                                <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">{data.form.fields.phone}</label>
                                <input type="tel" placeholder="09xxxxxx" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">{data.form.fields.email}</label>
                            <input type="email" placeholder="example@gmail.com" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">{data.form.fields.message}</label>
                            <textarea rows={4} placeholder="Bạn cần hỗ trợ gì?" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"></textarea>
                        </div>
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-600/30 transition transform hover:-translate-y-1 flex justify-center items-center gap-2">
                            <FaPaperPlane /> {data.form.submitButton}
                        </button>
                    </form>
                </div>

            </div>
        </div>
      </section>
  )
}

export default ContactSection
