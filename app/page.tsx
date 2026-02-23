"use client";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/home/HeroSection";
import { TrustBand } from "./components/home/TrustBand";
import { BentoGrid } from "./components/home/BentoGrid";
import { TestimonialsSection } from "./components/home/Testimonials";
import BeforeAfterSection from "./components/home/BeforeAfterSection";
import { FinalCTA } from "./components/home/FinalCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      <Navbar />

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <HeroSection />
      <TrustBand />
      <BentoGrid />
      <BeforeAfterSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
