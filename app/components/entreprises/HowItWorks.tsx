"use client";

import { motion } from "framer-motion";
import { Brain, Users, MessageSquare, Rocket, ArrowRight, ChevronRight } from "lucide-react";
import { useLeadModal } from "../shared/Providers";

const steps = [
  {
    num: "01",
    icon: Brain,
    title: "Définissez votre ADN",
    time: "5 min",
    desc: "Dialoguez avec Hiron, notre assistant IA, pour créer votre carte d'identité culturelle. C'est rapide, guidé et ne demande aucun jargon RH.",
    gradient: "from-indigo-500 to-indigo-600",
    light: "bg-indigo-50",
    text: "text-indigo-600",
    ring: "ring-indigo-200",
  },
  {
    num: "02",
    icon: Users,
    title: "Créez votre offre",
    time: "3 min",
    desc: "Décrivez simplement votre besoin. Hiron vous aide à générer une offre attractive et complète qui parle aux candidats.",
    gradient: "from-purple-500 to-purple-600",
    light: "bg-purple-50",
    text: "text-purple-600",
    ring: "ring-purple-200",
  },
  {
    num: "03",
    icon: MessageSquare,
    title: "Rencontrez les meilleurs talents",
    time: "",
    desc: "Accédez à votre tableau de bord et découvrez une liste restreinte de talents. Visualisez leur score de compatibilité et contactez-les en un clic.",
    gradient: "from-emerald-500 to-emerald-600",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    ring: "ring-emerald-200",
  },
];

const HowItWorks = () => {
  const { open } = useLeadModal();

  return (
    <section id="how" className="relative z-10 py-24 md:py-32">
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-none md:mx-6 lg:mx-10 md:rounded-[2.5rem] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-xs font-bold mb-5">
              <Rocket size={14} />
              <span>C&apos;est si facile ?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              3 étapes{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">simples</span>{" "}
              pour trouver le talent idéal
            </h2>
            <p className="text-indigo-200/70 font-medium text-lg max-w-2xl mx-auto">
              Un processus pensé pour les dirigeants occupés. Pas de jargon, pas de complexité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
            <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-emerald-500/40" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center px-4 md:px-6"
                >
                  <div className="relative mb-8">
                    <div className={`w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl ring-4 ${step.ring}/20`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <span className="text-xs font-extrabold text-slate-900">{step.num}</span>
                    </div>
                  </div>

                  {step.time && (
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-white/60 uppercase tracking-wider mb-4">
                      {step.time}
                    </span>
                  )}

                  <h3 className="text-lg md:text-xl font-extrabold text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-indigo-200/60 font-medium leading-relaxed max-w-xs">
                    {step.desc}
                  </p>

                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[44px] -right-3 z-10">
                      <ChevronRight size={20} className="text-white/20" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button onClick={open} className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-indigo-900 bg-white hover:bg-indigo-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Commencer maintenant <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
