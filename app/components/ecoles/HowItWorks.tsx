"use client";

import { motion } from "framer-motion";
import { GraduationCap, Upload, Brain, BarChart3, ArrowRight, ChevronRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: GraduationCap,
    title: "Connectez votre école",
    time: "10 min",
    desc: "Créez votre espace école, importez vos programmes et filières. Notre équipe vous accompagne pour une mise en route express.",
    gradient: "from-emerald-500 to-emerald-600",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    ring: "ring-emerald-200",
  },
  {
    num: "02",
    icon: Upload,
    title: "Invitez vos étudiants",
    time: "2 min",
    desc: "Un lien d'invitation par promo suffit. Les étudiants créent leur profil enrichi par l'IA et sont immédiatement visibles sur la plateforme.",
    gradient: "from-teal-500 to-teal-600",
    light: "bg-teal-50",
    text: "text-teal-600",
    ring: "ring-teal-200",
  },
  {
    num: "03",
    icon: Brain,
    title: "L'IA matche et détecte",
    time: "",
    desc: "Hiron analyse chaque profil, génère des matchs avec vos entreprises partenaires et détecte les étudiants à risque automatiquement.",
    gradient: "from-cyan-500 to-cyan-600",
    light: "bg-cyan-50",
    text: "text-cyan-600",
    ring: "ring-cyan-200",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Pilotez et prouvez",
    time: "",
    desc: "Accédez à votre tableau de bord en temps réel. Exportez des rapports d'insertion pour vos accréditations et communications.",
    gradient: "from-indigo-500 to-indigo-600",
    light: "bg-indigo-50",
    text: "text-indigo-600",
    ring: "ring-indigo-200",
  },
];

const HowItWorks = () => (
  <section id="how" className="relative z-10 py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[80px]" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-5 backdrop-blur-sm">
          <GraduationCap size={14} />
          <span>Comment ça marche</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
          Opérationnel en{" "}
          <span className="text-emerald-200">moins d&apos;une semaine.</span>
        </h2>
        <p className="text-sm md:text-base text-emerald-100/80 font-medium leading-relaxed">
          Pas de projet IT complexe. Pas de mois d&apos;intégration. Votre tour de contrôle est prête en 4 étapes simples.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-white/10 hover:border-white/25 hover:bg-white/15 transition-all duration-500 h-full">
              {/* Number */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl font-black text-white/15">{step.num}</span>
                {step.time && (
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-emerald-200 text-[10px] font-bold">
                    {step.time}
                  </span>
                )}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={22} className="text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-emerald-100/70 font-medium leading-relaxed">{step.desc}</p>
            </div>

            {/* Arrow between steps (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-[44px] -right-3 z-10">
                <ChevronRight size={20} className="text-white/20" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a href="#" className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-emerald-900 bg-white hover:bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
          Planifier une démo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
