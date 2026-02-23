"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Zap, Briefcase, Calendar, Eye, TrendingUp, ChevronRight } from "lucide-react";

const DashboardMockup = () => {
  const [hoveredOffer, setHoveredOffer] = useState(-1);
  const stats = [
    { label: "Candidatures envoyées", value: "12", change: "+3", icon: Briefcase, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Entretiens prévus", value: "4", change: "+1", icon: Calendar, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Matchs excellents", value: "28", change: "47 total", icon: Eye, color: "text-blue-600", bg: "bg-blue-50" },
  ];
  const matches = [
    { title: "UX Designer Junior", company: "Doctolib", score: 96, contract: "Alternance", location: "Paris", logo: "D" },
    { title: "Product Manager Stagiaire", company: "BlaBlaCar", score: 91, contract: "Stage", location: "Paris", logo: "B" },
    { title: "Data Analyst", company: "Qonto", score: 88, contract: "Alternance", location: "Remote", logo: "Q" },
  ];
  const apps = [
    { company: "Swile", logo: "S", poste: "Chef de projet digital", status: "Entretien", sBg: "bg-amber-100", sText: "text-amber-600" },
    { company: "Alan", logo: "A", poste: "Growth Marketing", status: "Vue", sBg: "bg-indigo-100", sText: "text-indigo-600" },
    { company: "Pennylane", logo: "P", poste: "Développeur Front", status: "Envoyée", sBg: "bg-blue-100", sText: "text-blue-600" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 md:-inset-12 bg-gradient-to-br from-indigo-300/20 via-purple-300/15 to-blue-300/20 rounded-[3rem] blur-3xl" />
      <motion.div initial={{ y: 60, opacity: 0, rotateX: 6 }} animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ perspective: "1200px" }} className="relative">
        <div className="relative bg-white rounded-2xl shadow-2xl shadow-indigo-200/30 border border-slate-200/60 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
            <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /></div>
            <div className="flex-1 flex justify-center"><div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg"><div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3px]" /><span className="text-[10px] text-slate-400 font-medium">app.hiry.ai/student/dashboard</span></div></div>
          </div>
          <div className="p-3 md:p-5 bg-[#f8f9fb]">
            <div className="flex items-end justify-between mb-3">
              <div><h4 className="text-sm md:text-base font-bold text-slate-900">Bonjour, Maxime 👋</h4><p className="text-[10px] md:text-xs text-slate-500">Voici ce qui se passe avec tes candidatures aujourd&apos;hui.</p></div>
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100"><span className="text-xs">🚀</span><span className="text-[9px] font-semibold text-indigo-700">L&apos;Innovateur</span></div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              {stats.map((s, i) => { const Icon = s.icon; return (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }}
                  className="bg-white p-2 md:p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-1.5"><div className={`p-1 md:p-1.5 rounded-lg ${s.bg}`}><Icon size={10} className={s.color} /></div><span className="text-[8px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">{s.change}</span></div>
                  <p className="text-sm md:text-lg font-extrabold text-slate-900 leading-none">{s.value}</p><p className="text-[7px] md:text-[8px] text-slate-400 font-medium mt-0.5">{s.label}</p>
                </motion.div>
              ); })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-3">
              <div className="md:col-span-3 space-y-2 md:space-y-3">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-3">
                  <div className="flex justify-between items-center mb-2.5"><h5 className="text-[10px] md:text-xs font-bold text-slate-800">Candidatures récentes</h5><span className="text-[8px] text-indigo-600 font-semibold flex items-center gap-0.5">Tout voir <ChevronRight size={8} /></span></div>
                  <div className="space-y-1.5">{apps.map((a, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500">{a.logo}</div><div><p className="text-[10px] font-bold text-slate-900 leading-tight">{a.company}</p><p className="text-[8px] text-slate-400">{a.poste}</p></div></div>
                      <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${a.sBg} ${a.sText}`}>{a.status}</span>
                    </div>
                  ))}</div>
                </motion.div>
                {/* Événements à venir */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-3">
                  <div className="flex justify-between items-center mb-2.5">
                    <h5 className="text-[10px] md:text-xs font-bold text-slate-800">Événements à venir</h5>
                    <span className="text-[8px] text-indigo-600 font-semibold flex items-center gap-0.5">Tout voir <ChevronRight size={8} /></span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { title: "Job Dating Tech", org: "Hiry x Station F", date: "28 Fév", time: "14h — 18h", tag: "Présentiel", tagBg: "bg-emerald-50", tagText: "text-emerald-600", accent: "from-indigo-500 to-blue-500" },
                      { title: "Workshop CV & Profil IA", org: "Hiry Academy", date: "3 Mars", time: "10h — 12h", tag: "En ligne", tagBg: "bg-blue-50", tagText: "text-blue-600", accent: "from-purple-500 to-indigo-500" },
                      { title: "Afterwork Recruteurs", org: "Hiry x Doctolib", date: "7 Mars", time: "18h30 — 21h", tag: "Présentiel", tagBg: "bg-emerald-50", tagText: "text-emerald-600", accent: "from-pink-500 to-purple-500" },
                    ].map((e, i) => (
                      <div key={i} className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className={`w-9 h-9 shrink-0 bg-gradient-to-br ${e.accent} rounded-xl flex flex-col items-center justify-center`}>
                          <span className="text-[8px] font-extrabold text-white leading-none">{e.date.split(" ")[0]}</span>
                          <span className="text-[5px] font-bold text-white/70 uppercase">{e.date.split(" ")[1]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-bold text-slate-900 truncate">{e.title}</p>
                          <p className="text-[7px] text-slate-400 truncate">{e.org} · {e.time}</p>
                        </div>
                        <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${e.tagBg} ${e.tagText}`}>{e.tag}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="md:col-span-2 space-y-2 md:space-y-3">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-3 rounded-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 -mr-6 -mt-6" />
                  <div className="relative z-10"><div className="flex items-center gap-1.5 mb-2"><div className="p-1 bg-white/10 rounded-md"><Zap size={10} className="text-yellow-400" /></div><span className="text-[10px] font-bold">Smart Match</span></div>
                    <p className="text-[8px] text-gray-300 mb-2"><span className="text-white font-bold">28 offres</span> compatibles à +80%</p>
                    <div className="flex items-center justify-center gap-1 px-2 py-1.5 bg-white text-gray-900 rounded-lg text-[9px] font-bold">Voir les opportunités <ArrowRight size={8} /></div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-3">
                  <h5 className="text-[10px] md:text-xs font-bold text-slate-800 mb-2">Offres pour toi</h5>
                  <div className="space-y-1.5">{matches.map((m, i) => (
                    <div key={i} onMouseEnter={() => setHoveredOffer(i)} onMouseLeave={() => setHoveredOffer(-1)}
                      className={`flex items-center gap-2 p-2 rounded-lg border transition-all cursor-pointer ${hoveredOffer === i ? "border-indigo-200 shadow-sm bg-indigo-50/30" : "border-transparent"}`}>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">{m.logo}</div>
                      <div className="flex-1 min-w-0"><p className="text-[9px] font-bold text-slate-900 truncate">{m.title}</p><div className="flex items-center gap-1 mt-0.5"><span className="text-[7px] text-slate-400">{m.company}</span><span className="text-[6px] font-semibold bg-indigo-50 text-indigo-600 px-1 py-0.5 rounded">{m.contract}</span></div></div>
                      <span className="text-[8px] font-extrabold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100 flex items-center gap-0.5 shrink-0"><Sparkles size={7} />{m.score}%</span>
                    </div>
                  ))}</div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, type: "spring", stiffness: 300, damping: 20 }} className="absolute -bottom-4 -right-2 md:-right-8 z-20">
        <motion.div animate={{ rotate: [0, 3, -3, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 md:px-4 py-2 md:py-2.5 rounded-xl shadow-lg shadow-indigo-300/40">
          <Brain size={14} /><div><p className="text-[10px] font-bold leading-none">Hiron AI</p><p className="text-[8px] text-indigo-200">Analyse active</p></div><span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.0, type: "spring", stiffness: 300, damping: 20 }} className="absolute -top-3 -left-2 md:-left-8 z-20">
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-lg border border-emerald-100">
          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center"><TrendingUp size={12} className="text-emerald-600" /></div>
          <div><p className="text-[10px] font-bold text-slate-900 leading-none">+3 ce matin</p><p className="text-[8px] text-slate-400">nouvelles offres</p></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
