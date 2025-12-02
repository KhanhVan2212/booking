"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import SearchForm from "./components/SearchForm";
import DestinationsSection from "./components/DestinationsSection";
import FeaturesSection from "./components/FeaturesSection";
import AirlinePartners from "./components/AirlinePartners";
import FlashDealsSection from "./components/FlashDealsSection";
import InspirationSection from "./components/InspirationSection";

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <main className="relative min-h-screen">
      <div className="relative">
        <HeroSection />
        <SearchForm />
      </div>

      <DestinationsSection />
      <FeaturesSection />
      <AirlinePartners />
      <FlashDealsSection />
      <InspirationSection />
    </main>
  );
};

export default Page;
