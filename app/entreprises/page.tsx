"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  HeroBackground,
  HeroSection,
  TrustBand,
  PainPointSection,
  SolutionSection,
  HowItWorks,
  PricingSection,
  FAQSection,
  FinalCTA,
  globalKeyframes,
} from "../components/entreprises";
import EventBanner from "../components/shared/EventBanner";

export default function EntreprisesPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa]" style={{ overflowX: "clip" }}>
      <Navbar ctaLabel="Devenir partenaire" />
      <EventBanner />
      <HeroBackground />
      <HeroSection />
      <TrustBand />
      <PainPointSection />
      <SolutionSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      <style>{globalKeyframes}</style>
    </div>
  );
}
