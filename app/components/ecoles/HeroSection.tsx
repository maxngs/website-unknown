"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Star, AlertCircle, TrendingUp } from "lucide-react";
import { fadeUp, stagger } from "./animations";
import { useLeadModal } from "../shared/Providers";

/* ── Mini Dashboard Mockup ── */
const DashboardMockup = () => {
  const students = [
    { name: "Lucas D.", role: "Master Marketing", score: 92, status: "En process", color: "bg-blue-100 text-blue-700", scoreColor: "text-emerald-500" },
    { name: "Emma T.", role: "Dev Fullstack", score: 85, status: "Signé", color: "bg-emerald-100 text-emerald-700", scoreColor: "text-emerald-500" },
    { name: "Sophie M.", role: "UX Design", score: 45, status: "À risque", color: "bg-red-100 text-red-700", scoreColor: "text-red-500" },
    { name: "Amine K.", role: "Data Science", score: 78, status: "En process", color: "bg-blue-100 text-blue-700", scoreColor: "text-amber-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative"
    >
      {/* Floating alert card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 right-2 md:-top-8 md:-right-4 z-20 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-red-100 flex items-center gap-3"
      >
        <div className="p-2 bg-red-100 text-red-600 rounded-full animate-pulse">
          <AlertCircle size={18} />
        </div>
        <div>
          <p className="text-xs md:text-sm font-bold text-slate-900">2 Étudiants à risque</p>
          <p className="text-[10px] md:text-xs text-slate-500">Aucune activité récente</p>
        </div>
      </motion.div>

      {/* Floating stats card */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 left-2 md:-bottom-6 md:-left-4 z-20 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3"
      >
        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full">
          <TrendingUp size={18} />
        </div>
        <div>
          <p className="text-xs md:text-sm font-bold text-slate-900">Taux d&apos;insertion</p>
          <p className="text-[10px] md:text-xs text-emerald-600 font-bold">87% (+12%)</p>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 bg-slate-50/80 backdrop-blur-sm p-4 md:p-6 rounded-3xl border border-slate-200/60 shadow-2xl shadow-emerald-200/20">
        {students.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.15, duration: 0.5 }}
            className="bg-white rounded-2xl p-4 md:p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-2.5 items-center">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">
                  {s.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{s.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{s.role}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${s.color}`}>
                {s.status}
              </span>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Score IA</span>
              <span className={`text-sm font-extrabold ${s.scoreColor}`}>{s.score}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/* ── Hero Section ── */
const HeroSection = () => {
  const { open } = useLeadModal();

  return (
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Left — Text */}
      <motion.div className="flex-1 text-center lg:text-left" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 text-emerald-600 text-xs font-bold mb-6 shadow-sm">
          <GraduationCap size={14} />
          <span>Pour les Écoles & Universités</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
          Garantissez l&apos;insertion{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">de 100%</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-full -z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{ originX: 0 }}
            />
          </span>{" "}
          de vos talents.
        </motion.h1>

        <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
          Une tour de contrôle propulsée par l&apos;IA pour suivre vos promotions, alerter sur les étudiants en difficulté, et multiplier les matchs avec vos entreprises partenaires.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button onClick={open} className="group w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
            Devenir École Partenaire <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#how" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center">
            Comment ça marche
          </a>
        </motion.div>

      </motion.div>

      {/* Right — Dashboard Mockup */}
      <div className="flex-1 w-full max-w-lg lg:max-w-none">
        <DashboardMockup />
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
