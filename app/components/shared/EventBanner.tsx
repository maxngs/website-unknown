// app/components/shared/EventBanner.tsx
// ─────────────────────────────────────────────────────────────
// Bannière Salon SEE 25 & 26 mars 2026
// Non-sticky — scrolle avec le contenu
// Mobile redesigned for readability
// ─────────────────────────────────────────────────────────────
"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLeadModal } from "./Providers";

export default function EventBanner() {
  const { open } = useLeadModal();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-16 lg:top-20 left-0 right-0 z-30 w-full"
      >
        <button
          type="button"
          onClick={open}
          className="event-banner group block w-full relative overflow-hidden cursor-pointer text-left"
        >
          {/* Animated shine sweep */}
          <div className="event-banner-shine absolute inset-0 pointer-events-none" />

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-3 left-[8%] w-2 h-2 bg-white/15 rounded-full" />
            <div className="absolute bottom-4 left-[20%] w-2.5 h-2.5 bg-white/10 rounded-full" />
            <div className="absolute top-4 right-[10%] w-2 h-2 bg-white/15 rounded-full" />
            <div className="absolute bottom-3 right-[25%] w-2.5 h-2.5 bg-white/10 rounded-full" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* ══════════ Mobile (< sm) ══════════ */}
            <div className="flex sm:hidden items-center gap-3 py-3">
              {/* Left: pulse + logo */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src="/logos/salon-see.png"
                    alt="Salon SEE"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* Center: text info */}
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <span className="text-[13px] font-extrabold text-white leading-tight truncate">
                  Salon Exp. Étudiante
                </span>
                <span className="text-[11px] font-bold text-white/80 flex items-center gap-1">
                  <Calendar size={10} className="shrink-0 text-white/60" />
                  25-26 mars · Paris
                </span>
              </div>

              {/* Right: CTA */}
              <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 bg-white/20 group-hover:bg-white/30 rounded-lg text-[11px] font-bold text-white border border-white/10">
                RDV
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>

            {/* ══════════ Tablet (sm to md) ══════════ */}
            <div className="hidden sm:flex md:hidden flex-col items-center gap-3 py-6">
              <div className="flex items-center gap-4">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
                <div className="relative w-36 h-16 shrink-0">
                  <Image
                    src="/logos/salon-see.png"
                    alt="Salon SEE"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-white/20 text-3xl font-light">|</span>
                <span className="text-xl font-extrabold text-white">
                  Salon de l&apos;Expérience Étudiante
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-lg font-extrabold text-white">
                  <Calendar size={18} className="text-white/70" />
                  25 &amp; 26 mars 2026
                </span>
                <span className="text-white/25 text-xl font-light">|</span>
                <span className="flex items-center gap-1.5 text-base text-white/70 font-medium">
                  <MapPin size={15} className="text-white/50" />
                  Cité des Sciences, Paris
                </span>
              </div>
              <span className="mt-1 inline-flex items-center gap-2 px-7 py-2.5 bg-white/20 group-hover:bg-white/30 rounded-xl text-base font-bold text-white transition-all border border-white/10 group-hover:border-white/20">
                Prendre rendez-vous
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* ══════════ Desktop (>= md) ══════════ */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-7 py-6 lg:py-7">
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400" />
              </span>

              <div className="relative w-44 h-20 lg:w-52 lg:h-24 shrink-0">
                <Image
                  src="/logos/salon-see.png"
                  alt="Salon SEE"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>

              <span className="text-white/20 text-3xl font-light">|</span>

              <div className="flex flex-col gap-1">
                <span className="text-xl lg:text-2xl xl:text-3xl font-extrabold text-white leading-tight">
                  Salon de l&apos;Expérience Étudiante
                </span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-lg lg:text-xl font-bold text-white/90">
                    <Calendar size={19} className="text-white/60" />
                    25 &amp; 26 mars 2026
                  </span>
                  <span className="text-white/25 text-lg">|</span>
                  <span className="flex items-center gap-1.5 text-base lg:text-lg text-white/60 font-medium">
                    <MapPin size={16} className="text-white/50" />
                    Cité des Sciences, Paris
                  </span>
                </div>
              </div>

              <span className="ml-3 inline-flex items-center gap-2.5 px-7 py-3 lg:px-8 lg:py-3.5 bg-white/20 group-hover:bg-white/30 rounded-xl text-base lg:text-lg font-bold text-white transition-all group-hover:shadow-lg group-hover:shadow-white/10 border border-white/10 group-hover:border-white/25">
                Prendre rendez-vous
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          </div>
        </button>
      </motion.div>

      {/* Scoped styles */}
      <style>{`
        .event-banner {
          background: linear-gradient(90deg, #4f46e5, #7c3aed, #6366f1, #4f46e5);
          background-size: 300% 100%;
          animation: event-shimmer 4s ease-in-out infinite;
        }
        @keyframes event-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .event-banner-shine {
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.12) 50%,
            transparent 75%
          );
          background-size: 250% 100%;
          animation: event-shine 5s ease-in-out infinite;
        }
        @keyframes event-shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
}
