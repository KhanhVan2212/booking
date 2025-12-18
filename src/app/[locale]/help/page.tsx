"use client";

import { useEffect, useState } from "react";
import HelpHero from "./components/HelpHero";
import FaqSection from "./components/FaqSection";
import SupportContact from "./components/SupportContact";
import ContactSection from "../about/components/ContactSection";

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen pt-[50px] sm:pt-[100px]">
      <HelpHero />
      <FaqSection />
      <SupportContact />
      <ContactSection />
    </main>
  );
};

export default Page;
