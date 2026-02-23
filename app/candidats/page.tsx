"use client";

import { Navbar } from "../components/layout/Navbar";
import HeroBackground from "../components/candidats/HeroBackground";
import HeroSection from "../components/candidats/HeroSection";
import TrustBand from "../components/candidats/TrustBand";
import PainPointSection from "../components/candidats/PainPointSection";
import BentoFeatures from "../components/candidats/BentoFeatures";
import HowItWorks from "../components/candidats/HowItWorks";
import BeforeAfterSection from "../components/candidats/BeforeAfterSection";
import FAQSection from "../components/candidats/FAQSection";
import FinalCTA from "../components/candidats/FinalCTA";
import { Footer } from "../components/layout/Footer";
import { globalKeyframes } from "../components/candidats/styles";

export default function CandidatsPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa]" style={{ overflowX: "clip" }}>
      <Navbar />
      <HeroBackground />
      <HeroSection />
      <TrustBand />
      <PainPointSection />
      <BentoFeatures />
      <HowItWorks />
      <BeforeAfterSection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      <style>{globalKeyframes}</style>
    </div>
  );
}
