"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target, Zap, Search, ArrowRight, Sparkles,
  Brain, Building2, CheckCircle2, Users, Heart,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Recrutez pour votre culture",
    desc: "Notre IA (Hiron) dialogue avec vous pour capturer l'ADN de votre entreprise : valeurs, style de management, ambiance. Nous ne vous présentons que des candidats alignés humainement.",
    gradient: "from-rose-500 to-pink-500",
    light: "bg-rose-50",
    border: "border-rose-100",
    mockup: (
      <div className="space-y-2.5">
        {[
          { label: "Innovation", value: 92, color: "from-rose-400 to-pink-500" },
          { label: "Bien-être", value: 88, color: "from-pink-400 to-rose-500" },
          { label: "Agilité", value: 95, color: "from-red-400 to-rose-500" },
        ].map((s, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold text-slate-300">{s.label}</span>
              <span className="text-[10px] font-bold text-rose-300">{s.value}%</span>
            </div>
            <div className="h-[5px] bg-white/[0.06] rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${s.color} rounded-full bento-bar-fill`} style={{ width: `${s.value}%`, animationDelay: `${i * 0.15}s` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Zap,
    title: "Divisez le temps de recrutement par 10",
    desc: "Fini l'avalanche de CV. Recevez une sélection restreinte de talents avec un score de compatibilité transparent. Concentrez-vous sur 3 entretiens pertinents, pas sur 70 CV hors-sujet.",
    gradient: "from-amber-500 to-orange-500",
    light: "bg-amber-50",
    border: "border-amber-100",
    mockup: (
      <div className="space-y-2.5">
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
          <span className="text-[10px] text-slate-400">Avant Hiry</span>
          <span className="text-[10px] font-bold text-red-400 line-through">70 CV à trier</span>
        </div>
        <div className="flex items-center justify-center">
          <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
            <ArrowRight size={10} className="text-amber-400 rotate-90" />
          </motion.div>
        </div>
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-[10px] text-emerald-300 font-medium">Avec Hiry</span>
          <span className="text-[10px] font-bold text-emerald-400">3 entretiens clés ✓</span>
        </div>
      </div>
    ),
  },
  {
    icon: Search,
    title: "Découvrez ce qu'un CV ne dit pas",
    desc: "Nous analysons les soft skills, les aspirations et les projets des étudiants. Découvrez qui ils sont et ce qu'ils peuvent devenir au sein de votre équipe.",
    gradient: "from-violet-500 to-purple-600",
    light: "bg-violet-50",
    border: "border-violet-100",
    mockup: (
      <div className="space-y-2">
        {[
          { label: "Créativité", value: "Élevée", icon: "✨" },
          { label: "Leadership", value: "Naturel", icon: "🎯" },
          { label: "Ambition", value: "Startup", icon: "🚀" },
        ].map((s, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.04]">
            <div className="flex items-center gap-2">
              <span className="text-xs">{s.icon}</span>
              <span className="text-[10px] font-semibold text-slate-300">{s.label}</span>
            </div>
            <span className="text-[10px] font-bold text-violet-300">{s.value}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const SolutionSection = () => (
  <section className="relative z-10 py-20 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white pointer-events-none" />
    <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl -ml-48 pointer-events-none" />
    <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -mr-40 pointer-events-none" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Manifesto header — full width centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold shadow-sm mb-5">
          <Sparkles size={14} />
          <span>La solution Hiry</span>
        </div>
        <h2 className="text-3xl md:text-[2.65rem] lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-900 mb-6">
          Hiry{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">transforme</span>{" "}
          le recrutement en une rencontre{" "}
          <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">pertinente.</span>
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-20"
      >
        Le système actuel est absurde. Il vous force à juger un candidat sur un document rétrospectif – le CV – alors que vous recrutez pour le futur. Hiry est construit pour réparer cela.
      </motion.p>

      {/* Alternating feature rows */}
      <div className="space-y-16 md:space-y-24">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          const isReversed = i % 2 === 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isReversed ? "lg:direction-rtl" : ""}`}
            >
              {/* Text side */}
              <div className={isReversed ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feat.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-[0.15em]">
                    0{i + 1} — Fonctionnalité clé
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
                  {feat.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-6">
                  {feat.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors group">
                  En savoir plus <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mockup side */}
              <div className={isReversed ? "lg:order-1" : ""}>
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${feat.gradient} rounded-[2.5rem] opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500 blur-xl`} />
                  <div className="relative rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-8 border border-slate-700/50 overflow-hidden">
                    {/* Shimmer */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent bento-shimmer" />
                    </div>
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feat.gradient} bg-opacity-20 flex items-center justify-center`} style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))` }}>
                        <Icon size={14} className="text-white/70" />
                      </div>
                      <span className="text-[11px] font-bold text-white/80">{feat.title}</span>
                    </div>
                    {feat.mockup}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SolutionSection;
