"use client";

import React from "react";
import InspirationHero from "./components/InspirationHero";
import BlogList from "./components/BlogList";
import ContactSection from "../about/components/ContactSection";

const InspirationPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-[50px] sm:pt-[100px]">
      <InspirationHero />
      <BlogList />
      <ContactSection />
    </main>
  );
};

export default InspirationPage;
