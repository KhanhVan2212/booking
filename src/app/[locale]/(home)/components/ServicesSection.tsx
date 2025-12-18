import React from 'react';
import { ServicesSectionData } from '@/types/landing-page.types';
import { IconMapper } from '@/components/common/IconMapper';

interface ServicesSectionProps {
  data: ServicesSectionData;
}

// Color mapping for accent colors
const accentColorMap: Record<string, { bg: string; hover: string }> = {
  red: { bg: "bg-red-50", hover: "group-hover:bg-red-100" },
  blue: { bg: "bg-blue-50", hover: "group-hover:bg-blue-100" },
  orange: { bg: "bg-orange-50", hover: "group-hover:bg-orange-100" },
  green: { bg: "bg-green-50", hover: "group-hover:bg-green-100" },
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* 1. HEADER */}
        <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">{data.header.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
                {data.header.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < data.header.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
            </h2>
            {data.header.divider && (
              <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
            )}
        </div>

        {/* 2. MAIN SERVICES GRID (4 Cột chính) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {data.mainServices.map((service) => {
              const accentColor = accentColorMap[service.accentColor || "red"] || accentColorMap.red;
              return (
                <div key={service.id} className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-24 h-24 ${accentColor.bg} rounded-bl-full -mr-4 -mt-4 transition ${accentColor.hover}`}></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-red-600/30">
                            <IconMapper iconName={service.icon} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className={`w-1.5 h-1.5 ${service.accentColor === 'red' ? 'bg-red-500' : 'bg-slate-400'} rounded-full mt-1.5`}></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              );
            })}
        </div>

        {/* 3. DETAILED FLIGHT SERVICES (Tiện ích chi tiết) */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-slate-800">{data.detailedServices.title}</h3>
                <p className="text-slate-500 mt-2">{data.detailedServices.description}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {data.detailedServices.items.map((item) => (
                    <div key={item.id} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-red-600 text-2xl mb-3 group-hover:scale-110 transition duration-300 border border-slate-100">
                            <IconMapper iconName={item.icon} />
                        </div>
                        <h4 className="font-bold text-slate-700 text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 px-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
