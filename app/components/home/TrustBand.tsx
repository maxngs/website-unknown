"use client";

import { motion } from "framer-motion";

const partners = [
  "ESSEC Business School", "Nextera Solutions", "EM Lyon", "TechFlow SAS",
  "ESSCA", "DataNova", "Polytechnique", "InnoVentures",
];

export const TrustBand = () => (
  <section className="relative z-10 py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
        Ils construisent le recrutement de demain avec Hiry
      </p>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {[...partners, ...partners, ...partners].map((name, i) => (
            <div key={i} className="flex items-center gap-2.5 px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm flex-shrink-0">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-slate-500">{name.charAt(0)}</span>
              </div>
              <span className="text-sm font-semibold text-slate-600">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
