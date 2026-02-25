// app/entreprises/page.tsx
"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import HeroBackground from "../components/entreprises/HeroBackground";
import HeroSection from "../components/entreprises/HeroSection";
import TrustBand from "../components/entreprises/TrustBand";
import PainPointSection from "../components/entreprises/PainPointSection";
import SolutionSection from "../components/entreprises/SolutionSection";
import HowItWorks from "../components/entreprises/HowItWorks";
// import PricingSection from "../components/entreprises/PricingSection";
import FAQSection from "../components/entreprises/FAQSection";
import FinalCTA from "../components/entreprises/FinalCTA";
import { globalKeyframes } from "../components/entreprises/styles";
import BeforeAfterSection from "../components/entreprises/BeforeAfterSection";

export default function EntreprisesPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa]" style={{ overflowX: "clip" }}>
      <Navbar ctaLabel="Publier une offre" />
      <HeroBackground />
      <HeroSection />
      <TrustBand />
      <PainPointSection />
      <SolutionSection />
      <HowItWorks />
      {/* <PricingSection /> */}
      <BeforeAfterSection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      <style>{globalKeyframes}</style>
    </div>
  );
}
