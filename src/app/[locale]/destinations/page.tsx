"use client";

import { useEffect, useState } from "react";
import DestinationsHero from "./components/DestinationsHero";
import AllDestinations from "./components/AllDestinations";
import ContactSection from "../about/components/ContactSection";

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen pt-[50px] sm:pt-[100px]">
      <DestinationsHero />
      <AllDestinations />
      <ContactSection />
    </main>
  );
};

export default Page;
