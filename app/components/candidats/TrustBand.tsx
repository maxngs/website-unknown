"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const TrustBand = () => (
  <div className="relative z-10 py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      {/* Social proof stat */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-10"
      >
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-200/50">
            <TrendingUp size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
              300+
              <span className="text-sm md:text-base font-bold text-slate-500 ml-1.5">
                pré-inscriptions
              </span>
            </span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              en 1 semaine
            </span>
          </div>
        </div>
      </motion.div>

      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
        Ils nous supportent
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
        {["Pépite France", "Viva Technology", "L'Escalator", "Google for Startups", "Paris School of Business"].map(l => (
          <span key={l} className="text-sm md:text-base font-extrabold text-slate-900 whitespace-nowrap">
            {l}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBand;
