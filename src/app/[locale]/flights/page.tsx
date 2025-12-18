"use client";

import { useEffect, useState } from "react";
import FlightHero from "./components/FlightHero";
import PopularRoutes from "./components/PopularRoutes";
import FlightFeatures from "./components/FlightFeatures";
import SearchForm from "../(home)/components/SearchForm";
import AirlinePartners from "../(home)/components/AirlinePartners";
import ContactSection from "../about/components/ContactSection";

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen pt-[50px] sm:pt-[100px]">
      <div className="relative">
        <FlightHero />
      </div>
      <PopularRoutes />
      <FlightFeatures />
      <ContactSection />
    </main>
  );
};

export default Page;
