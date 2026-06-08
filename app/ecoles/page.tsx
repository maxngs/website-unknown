// app/ecoles/page.tsx — Server Component
import type { Metadata } from "next";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import HeroBackground from "../components/ecoles/HeroBackground";
import HeroSection from "../components/ecoles/HeroSection";
import TrustBand from "../components/ecoles/TrustBand";
import PainPointSection from "../components/ecoles/PainPointSection";
import SolutionSection from "../components/ecoles/SolutionSection";
import HowItWorks from "../components/ecoles/HowItWorks";
import BeforeAfterSection from "../components/ecoles/BeforeAfterSection";
import FAQSection, { ECOLES_FAQS } from "../components/ecoles/FAQSection";
import FinalCTA from "../components/ecoles/FinalCTA";
import { globalKeyframes } from "../components/ecoles/styles";
import { FaqJsonLd } from "../components/shared/FaqJsonLd";

export const metadata: Metadata = {
  title: "Insertion professionnelle des étudiants — Tableau de bord écoles",
  description:
    "Pilotez l'insertion professionnelle de vos promotions avec des données en temps réel. Relations entreprises facilitées, suivi des stages et alternances par l'IA.",
  alternates: { canonical: "/ecoles" },
};

export default function EcolesPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa]" style={{ overflowX: "clip" }}>
      <FaqJsonLd faqs={ECOLES_FAQS} />
      <Navbar ctaLabel="Devenir partenaire" ctaHref="" />
      <HeroBackground />
      <HeroSection />
      <TrustBand />
      <PainPointSection />
      <SolutionSection />
      <HowItWorks />
      <BeforeAfterSection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      <style>{globalKeyframes}</style>
    </div>
  );
}
