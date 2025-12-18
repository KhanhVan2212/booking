"use client";

import { useEffect, useState } from "react";
import ContactHero from "./components/ContactHero";
import ContactSection from "../about/components/ContactSection";

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen pt-[50px] sm:pt-[100px]">
      <ContactHero />
      <ContactSection />

      {/* Google Maps Iframe - Full Width */}
      <div className="h-[400px] w-full bg-slate-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.636952737668!2d105.83984577599026!3d21.0071850885172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac77150dcf3f%3A0x6e9a65d6c8b934b!2zMSDEkOG6oWkgQ-G7kyBWaeG7h3QsIEzDqiDEkOG6oWkgSMOgbmgsIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1710924409575!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default Page;
