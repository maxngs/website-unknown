// app/entreprises/page.tsx — Server Component
import type { Metadata } from "next";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import HeroBackground from "../components/entreprises/HeroBackground";
import HeroSection from "../components/entreprises/HeroSection";
import TrustBand from "../components/entreprises/TrustBand";
import PainPointSection from "../components/entreprises/PainPointSection";
import SolutionSection from "../components/entreprises/SolutionSection";
import HowItWorks from "../components/entreprises/HowItWorks";
import FAQSection from "../components/entreprises/FAQSection";
import FinalCTA from "../components/entreprises/FinalCTA";
import { globalKeyframes } from "../components/entreprises/styles";
import BeforeAfterSection from "../components/entreprises/BeforeAfterSection";

export const metadata: Metadata = {
  title: "Recrutement IA pour entreprises — Matching intelligent",
  description:
    "Accédez à un vivier de talents pré-qualifiés par l'IA. Pipeline de recrutement intelligent, matching par soft skills et culture d'entreprise. Gagnez 40h/mois sur vos recrutements.",
  alternates: { canonical: "/entreprises" },
};

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
      <BeforeAfterSection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      <style>{globalKeyframes}</style>
    </div>
  );
}
