"use client";

import { motion } from "framer-motion";
import { Users, Building2, Award, Target, Clock } from "lucide-react";
import { useCounter } from "../shared/useCounter";

export const StatsSection = () => {
  const stats = [
    { value: 15000, suffix: "+", label: "Talents inscrits", icon: Users, color: "text-indigo-600" },
    { value: 94, suffix: "%", label: "Taux de matching", icon: Target, color: "text-purple-600" },
    { value: 500, suffix: "+", label: "PME partenaires", icon: Building2, color: "text-emerald-600" },
    { value: 40, suffix: "h", label: "Gagnées / mois par recruteur", icon: Clock, color: "text-amber-600" },
  ];

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                La preuve par les chiffres
              </h2>
              <p className="text-indigo-200 font-medium text-lg max-w-xl mx-auto">
                Des résultats concrets qui transforment le recrutement chaque jour.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, i) => {
                const counterRef = useCounter(stat.value, 2.5);
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-colors">
                      <Icon size={24} className="text-indigo-300" />
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span ref={counterRef} className="text-3xl md:text-5xl font-extrabold text-white tabular-nums">
                        0
                      </span>
                      <span className="text-2xl md:text-4xl font-extrabold text-indigo-400">{stat.suffix}</span>
                    </div>
                    <p className="text-sm font-semibold text-indigo-200/80 mt-2">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
