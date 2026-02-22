"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Handshake, Rocket, ArrowRight, CheckCircle2, UserCheck, Search, Building2, Heart, Users } from "lucide-react";
import Link from "next/link";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserCheck,
      number: "01",
      title: "Créez votre profil intelligent",
      description: "En quelques minutes, notre IA cartographie vos compétences, soft skills et aspirations profondes. Pas de CV classique, une vraie identité professionnelle.",
      color: "indigo" as const,
      mockup: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <Brain size={18} className="text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="h-2 bg-indigo-200 rounded-full w-3/4" />
              <div className="h-2 bg-indigo-100 rounded-full w-1/2 mt-1.5" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Créatif", "Analytique", "Leader"].map((tag) => (
              <span key={tag} className="text-center px-2 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-[10px] font-bold text-indigo-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: Search,
      number: "02",
      title: "L'IA analyse et matche",
      description: "Notre algorithme propriétaire croise culture d'entreprise, valeurs personnelles et compétences pour identifier les matchs à fort potentiel.",
      color: "purple" as const,
      mockup: (
        <div className="space-y-2">
          {[96, 88, 74].map((score, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">
                {String.fromCharCode(65 + i)}
              </div>
              <div className="flex-1">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${score}%` }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  />
                </div>
              </div>
              <span className="text-xs font-bold text-purple-600">{score}%</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Handshake,
      number: "03",
      title: "Connectez-vous et recrutez",
      description: "Candidats et entreprises se rencontrent sur la base de compatibilité réelle. Les écoles suivent l'insertion en temps réel.",
      color: "emerald" as const,
      mockup: (
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <Users size={20} className="text-blue-600" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Heart size={24} className="text-emerald-500" />
          </motion.div>
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Building2 size={20} className="text-emerald-600" />
          </div>
        </div>
      ),
    },
  ];

  const colorMap = {
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-100",
      gradient: "from-indigo-500 to-indigo-600",
      light: "bg-indigo-100",
      number: "text-indigo-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
      gradient: "from-purple-500 to-purple-600",
      light: "bg-purple-100",
      number: "text-purple-200",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
      gradient: "from-emerald-500 to-emerald-600",
      light: "bg-emerald-100",
      number: "text-emerald-200",
    },
  };

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm">
            <Rocket size={14} />
            <span>Simple et puissant</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Comment ça{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">marche ?</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Trois étapes pour transformer votre recrutement. Pas de CV, pas de lettre de motivation — juste de l&apos;intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const colors = colorMap[step.color];
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Large number watermark */}
                <span className={`absolute top-4 right-6 text-7xl font-black ${colors.number} select-none pointer-events-none`}>
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className={`w-14 h-14 ${colors.light} ${colors.text} rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{step.description}</p>

                  {/* Mini mockup */}
                  <div className={`${colors.bg} border ${colors.border} rounded-2xl p-4`}>{step.mockup}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting line (desktop only) */}
        <div className="hidden lg:flex justify-center mt-[-280px] mb-[230px] pointer-events-none">
          <svg width="800" height="50" viewBox="0 0 800 50" fill="none" className="opacity-0">
            <path d="M 100 25 H 350 M 450 25 H 700" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
        </div>
      </div>
    </section>
  );
};
