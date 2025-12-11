"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import AboutmeSection from "./components/AboutmeSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutmeSection />
      <ContactSection />
      <MapSection />
    </div>
  );
}
