// app/components/shared/EventHeroBadge.tsx
// ─────────────────────────────────────────────────────────────
// Badge événement pour les sections Hero — Salon SEE
// Carte glassmorphism bien visible avec logo, date, lieu, CTA
// À insérer dans les Hero de Home et Écoles
// ─────────────────────────────────────────────────────────────
"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLeadModal } from "./Providers";

export default function EventHeroBadge() {
  const { open } = useLeadModal();

  return (
    <motion.button
      type="button"
      onClick={open}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, type: "spring", damping: 20 }}
      className="event-hero-badge group relative w-full sm:w-auto mx-auto lg:mx-0 mt-8 mb-2 cursor-pointer"
    >
      {/* Glow behind */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-5 py-4 sm:px-6 sm:py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-indigo-100/80 shadow-lg shadow-indigo-100/30 group-hover:shadow-xl group-hover:border-indigo-200 transition-all duration-300">
        {/* Animated border shimmer */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="event-hero-badge-border absolute inset-0 rounded-2xl" />
        </div>

        {/* Left — Logo + Live dot */}
        <div className="relative flex items-center gap-3 shrink-0">
          {/* Pulse dot */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {/* Logo */}
          <div className="relative w-16 h-10 sm:w-20 sm:h-12 shrink-0">
            <Image
              src="/logos/salon-see.png"
              alt="Salon SEE — Salon de l'Expérience Étudiante"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Separator — desktop only */}
        <div className="hidden sm:block w-px h-10 bg-slate-200/80 shrink-0" />

        {/* Center — Info */}
        <div className="flex flex-col items-center sm:items-start gap-1 min-w-0">
          <span className="text-[13px] sm:text-sm font-extrabold text-slate-900 leading-tight">
            Salon de l&apos;Expérience Étudiante
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-0.5 text-[11px] sm:text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar size={11} className="text-indigo-500" />
              25 &amp; 26 mars 2026
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-indigo-500" />
              Cité des Sciences, Paris
            </span>
          </div>
        </div>

        {/* Right — CTA pill */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-700 group-hover:to-purple-700 rounded-xl text-white text-xs sm:text-[13px] font-bold shadow-md shadow-indigo-200/40 group-hover:shadow-lg transition-all shrink-0">
          Prendre rendez-vous
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </div>
      </div>

      {/* Scoped styles */}
      <style>{`
        .event-hero-badge-border {
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            rgba(99, 102, 241, 0.15) 10%,
            transparent 20%,
            transparent 100%
          );
          animation: event-badge-rotate 4s linear infinite;
        }
        @keyframes event-badge-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.button>
  );
}
