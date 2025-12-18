"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import SearchForm from "./components/SearchForm";
import DestinationsSection from "./components/DestinationsSection";
import FeaturesSection from "./components/FeaturesSection";
import AirlinePartners from "./components/AirlinePartners";
import FlashDealsSection from "./components/FlashDealsSection";
import InspirationSection from "./components/InspirationSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "../about/components/ContactSection";
import { getLandingPageData } from "@/utils/cms.helper";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const [landingPageData, setLandingPageData] = useState<ReturnType<typeof getLandingPageData> | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const data = getLandingPageData();
      setLandingPageData(data);
    } catch (error) {
      console.log("CMS data not available, using defaults");
    }
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen">
      <div className="relative">
        <HeroSection data={landingPageData?.hero} />
        <SearchForm />
      </div>
      <ServicesSection data={landingPageData?.services} />
      <FeaturesSection data={landingPageData?.features} />
      <DestinationsSection data={landingPageData?.destinations} />
      {landingPageData?.flashDeals && (
        <FlashDealsSection data={landingPageData.flashDeals} />
      )}
      <InspirationSection data={landingPageData?.inspiration} />
      <AirlinePartners data={landingPageData?.airlinePartners} />
      <ContactSection data={landingPageData?.contact} />
    </main>
  );
};

export default Page;