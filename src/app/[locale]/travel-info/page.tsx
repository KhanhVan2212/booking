"use client";

import { useEffect, useState } from "react";
import TravelInfoHero from "./components/TravelInfoHero";
import InfoCategories from "./components/InfoCategories";
import ContactSection from "../about/components/ContactSection";

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen pt-[50px] sm:pt-[100px]">
      <TravelInfoHero />
      <InfoCategories />
      <ContactSection />
    </main>
  );
};

export default Page;
