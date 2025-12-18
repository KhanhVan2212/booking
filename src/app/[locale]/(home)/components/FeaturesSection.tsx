import React from "react";
import { FeaturesSectionData } from "@/types/landing-page.types";
import { IconMapper } from "@/components/common/IconMapper";

interface FeaturesSectionProps {
  data: FeaturesSectionData;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ data }) => {
  return (
    <section className="bg-red-50 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800">{data.title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
          {data.features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
                <IconMapper iconName={feature.icon} />
              </div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
