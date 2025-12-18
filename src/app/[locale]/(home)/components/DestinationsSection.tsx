// components/DestinationsSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { DestinationsSectionData } from "@/types/landing-page.types";

interface DestinationsSectionProps {
  data: DestinationsSectionData;
}

const DestinationsSection: React.FC<DestinationsSectionProps> = ({ data }) => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            {data.title}
          </h2>
          <p className="mt-2 text-slate-500">{data.description}</p>
        </div>
        {data.viewAllLink && (
          <Link
            href={data.viewAllLink}
            className="flex items-center gap-1 font-semibold text-red-600 hover:underline"
          >
            Xem tất cả <FaArrowRight />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.destinations.map((dest) => (
          <div key={dest.id} className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-md">
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
