"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target, BarChart3, Users, GraduationCap, MapPin,
  CheckCircle2, Sparkles, Zap, Briefcase, Calendar, Eye,
  ArrowRight, Brain, Building2, Layers, Search, UserCheck,
  BookOpen, Send, MessageSquare, ChevronRight, Heart, Shield,
} from "lucide-react";

export const BentoGrid = () => (
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm">
            <Layers size={14} />
            <span>Un écosystème complet</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            L&apos;expérience{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hiry</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
            Trois acteurs, une seule intelligence pour les réunir.
          </p>
        </motion.div>

        {/* ---- BENTO GRID ---- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* ===== CARD 1: CANDIDATS — Large left, Framer-style platform preview ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7 md:row-span-2 group relative rounded-[2rem] overflow-hidden"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

            <div className="relative bg-white rounded-[2rem] p-7 md:p-9 h-full flex flex-col border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150 group-hover:bg-indigo-100/60" />

              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    <Target size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Pour les talents</h3>
                    <p className="text-sm text-slate-400 font-semibold mt-0.5">Étudiants & Candidats</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium max-w-lg">
                  Révélez votre vrai potentiel. Hiron cartographie vos <span className="text-indigo-600 font-bold">Soft Skills</span>, vos aspirations profondes et crée votre identité professionnelle unique.
                </p>
              </div>

              {/* ---- FRAMER-STYLE: Platform Dashboard Preview ---- */}
              <div className="relative mt-auto flex-1 min-h-0">
                {/* Fade-out bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />

                {/* Perspective wrapper */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-indigo-100/40 bg-slate-50"
                >
                  {/* ── Dashboard Chrome Bar ── */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-slate-100">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">
                        <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3px]" />
                        <span className="text-[10px] text-slate-400 font-medium">app.hiry.ai/student/dashboard</span>
                      </div>
                    </div>
                  </div>

                  {/* ── Dashboard Content ── */}
                  <div className="p-4 md:p-5 bg-gray-50/80 space-y-4">

                    {/* Welcome + Archetype badge */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-slate-900">Bonjour, Maxime 👋</h4>
                        <p className="text-[11px] text-slate-500 font-medium">Voici ce qui se passe avec tes candidatures aujourd&apos;hui.</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100 shrink-0">
                        <span className="text-sm">🚀</span>
                        <span className="text-[10px] font-semibold text-indigo-700">L&apos;Innovateur</span>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: "Candidatures", value: "12", change: "+3", icon: Briefcase, bg: "bg-indigo-50", color: "text-indigo-600" },
                        { label: "Entretiens", value: "4", change: "+1", icon: Calendar, bg: "bg-purple-50", color: "text-purple-600" },
                        { label: "Matchs", value: "28", change: "8 top", icon: Eye, bg: "bg-blue-50", color: "text-blue-600" },
                      ].map((stat, i) => {
                        const StatIcon = stat.icon;
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className={`p-1.5 rounded-lg ${stat.bg}`}>
                                <StatIcon size={12} className={stat.color} />
                              </div>
                              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                                {stat.change}
                              </span>
                            </div>
                            <p className="text-lg font-extrabold text-slate-900 leading-none">{stat.value}</p>
                            <p className="text-[9px] text-slate-400 font-medium mt-0.5">{stat.label}</p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Offer Matches — "Offres pour toi" */}
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-xs font-bold text-slate-800">Offres pour toi</h5>
                        <span className="text-[9px] text-indigo-600 font-semibold">Tout voir →</span>
                      </div>
                      <div className="space-y-2.5">
                        {[
                          {
                            title: "Product Manager Junior", company: "TechFlow SAS", contract: "CDI", location: "Paris", score: 96,
                            logoSvg: <svg viewBox="0 0 36 36" className="w-full h-full"><rect width="36" height="36" rx="8" fill="#4F46E5"/><path d="M10 12h16v3H10zm0 5h10v3H10zm0 5h13v3H10z" fill="white" opacity="0.85"/></svg>,
                          },
                          {
                            title: "Growth Marketing", company: "Nextera Solutions", contract: "Stage", location: "Lyon", score: 91,
                            logoSvg: <svg viewBox="0 0 36 36" className="w-full h-full"><rect width="36" height="36" rx="8" fill="#059669"/><circle cx="18" cy="14" r="6" fill="white" opacity="0.9"/><path d="M10 26c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="white" opacity="0.7"/></svg>,
                          },
                        ].map((offer, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors cursor-default"
                          >
                            <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 shadow-sm">
                              {offer.logoSvg}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-bold text-slate-900 leading-tight truncate">{offer.title}</p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-[9px] text-slate-400 font-medium truncate">{offer.company}</span>
                                <span className="text-[8px] text-slate-300">•</span>
                                <span className="text-[8px] font-semibold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded shrink-0">{offer.contract}</span>
                                <span className="text-[8px] text-slate-400 flex items-center gap-0.5 shrink-0"><MapPin size={7} />{offer.location}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100 flex items-center gap-1 shrink-0">
                              <Sparkles size={8} />{offer.score}%
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* ── Candidature Tracking Card — clipped to peek ── */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-xs font-bold text-slate-800">Suivi candidature</h5>
                        <span className="text-[9px] text-indigo-600 font-semibold">Tout voir →</span>
                      </div>

                      {/* Application card — header only, pipeline gets cut by parent fade */}
                      <div className="border border-slate-100 rounded-xl overflow-hidden">
                        <div className="p-3 flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0">
                            <svg viewBox="0 0 36 36" className="w-full h-full">
                              <rect width="36" height="36" rx="4" fill="#4F46E5" />
                              <path d="M10 18h5v-6h6v6h5v6h-5v6h-6v-6h-5z" fill="white" opacity="0.9"/>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold text-slate-900 leading-tight">Product Manager Junior</p>
                            <p className="text-[9px] text-slate-400 font-medium">TechFlow SAS · Paris</p>
                          </div>
                          <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 flex items-center gap-1">
                            <CheckCircle2 size={8} /> Présélectionné
                          </span>
                        </div>

                        {/* Pipeline steps — will be partially hidden by fade */}
                        <div className="px-3 py-3 bg-slate-50/80 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            {[
                              { label: "Envoyée", done: true },
                              { label: "Vue", done: true },
                              { label: "Shortlist", done: true, current: true },
                              { label: "Entretien", done: false },
                              { label: "Offre", done: false },
                              { label: "Embauché", done: false },
                            ].map((step, idx) => (
                              <div key={idx} className="flex flex-col items-center relative flex-1">
                                {idx > 0 && (
                                  <div className={`absolute right-1/2 top-[11px] w-full h-[2px] ${step.done ? "bg-indigo-500" : "bg-slate-200"}`} />
                                )}
                                <motion.div
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + idx * 0.08, type: "spring" }}
                                  className={`relative z-10 w-[22px] h-[22px] rounded-full flex items-center justify-center ${
                                    step.current
                                      ? "bg-white border-2 border-purple-400 text-purple-600 shadow-md ring-4 ring-purple-100"
                                      : step.done
                                      ? "bg-indigo-500 text-white shadow-sm"
                                      : "bg-slate-100 border-2 border-slate-200 text-slate-400"
                                  }`}
                                >
                                  {step.done && !step.current ? <CheckCircle2 size={10} strokeWidth={3} /> : (
                                    <span className="text-[7px] font-bold">{idx + 1}</span>
                                  )}
                                </motion.div>
                                <span className={`mt-1.5 text-[7px] font-semibold ${step.current ? "text-purple-600" : step.done ? "text-slate-600" : "text-slate-400"}`}>
                                  {step.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                  </div>
                </motion.div>
              </div>

              <Link href="/candidats" className="mt-5 inline-flex items-center text-sm font-extrabold text-indigo-600 gap-1.5 group-hover:gap-3 transition-all relative z-30">
                Découvrir mon profil <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ===== CARD 2: ENTREPRISES — Static Kanban Pipeline ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 group relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

            <div className="relative bg-white rounded-[2rem] p-7 md:p-8 h-full flex flex-col border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150 group-hover:bg-purple-100/60" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-purple-200/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Pour les entreprises</h3>
                    <p className="text-xs text-slate-400 font-semibold">Fondateur(trice) & Dirigeant(e) & Recruteurs(euses)</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                  Accédez à un vivier de talents pré-qualifiés par Hiron. Gagnez <span className="text-indigo-600 font-bold">40h / mois</span> en supprimant le tri manuel.
                </p>
              </div>

              {/* ── Static Kanban Pipeline Preview ── */}
              <div className="relative z-10 mt-auto">
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="rounded-xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-indigo-100/30 bg-white"
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border-b border-slate-100">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-slate-200 rounded-md">
                        <div className="w-2.5 h-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2px]" />
                        <span className="text-[8px] text-slate-400 font-medium">app.hiry.ai/company/pipeline</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 pb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Layers size={10} className="text-indigo-600" />
                        <span className="text-[9px] font-bold text-slate-900">Pipeline — Product Manager</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[8px] font-bold text-emerald-600">12 candidats</span>
                      </div>
                    </div>

                    {/* Static kanban columns */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { key: "Nouveaux", color: "bg-blue-500", bg: "bg-blue-50", border: "border-blue-100", cards: ["SM", "LD", "AT"] },
                        { key: "Entretien", color: "bg-amber-500", bg: "bg-amber-50", border: "border-amber-100", cards: ["ET", "JR"] },
                        { key: "Shortlist", color: "bg-purple-500", bg: "bg-purple-50", border: "border-purple-100", cards: ["MK", "CL"] },
                        { key: "Offre", color: "bg-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", cards: ["SB"] },
                      ].map((col) => (
                        <div key={col.key} className={`${col.bg} border ${col.border} rounded-lg p-1.5`}>
                          <div className="flex items-center justify-between mb-1.5 px-0.5">
                            <div className="flex items-center gap-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
                              <span className="text-[7px] font-bold text-slate-600">{col.key}</span>
                            </div>
                            <span className="text-[7px] font-bold text-slate-400">{col.cards.length}</span>
                          </div>
                          <div className="space-y-1">
                            {col.cards.map((id) => (
                              <div key={id} className="bg-white rounded-md p-1.5 shadow-sm border border-white flex items-center gap-1.5">
                                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[6px] font-bold text-white shrink-0">
                                  {id}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="h-[3px] bg-slate-200 rounded-full w-full" />
                                  <div className="h-[2px] bg-slate-100 rounded-full w-3/4 mt-0.5" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <Link href="/entreprises" className="relative z-10 mt-5 inline-flex items-center text-sm font-extrabold text-indigo-600 gap-1.5 group-hover:gap-3 transition-all">
                Dashboard recruteur <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ===== CARD 3: ÉCOLES — Analytics Dashboard ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 group relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

            <div className="relative bg-white rounded-[2rem] p-7 md:p-8 h-full flex flex-col border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150 group-hover:bg-emerald-100/60" />

              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Pour les écoles</h3>
                    <p className="text-xs text-slate-400 font-semibold">Universités & Grandes Écoles</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Pilotez l&apos;insertion de vos promos et vos relations entreprises avec des <span className="text-emerald-600 font-bold">données en temps réel</span>.
                </p>
              </div>

              {/* ── Analytics Dashboard Preview ── */}
              <div className="relative z-10 mt-auto">
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="rounded-xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-emerald-100/30 bg-white"
                >
                  {/* Chrome bar */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border-b border-slate-100">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-slate-200 rounded-md">
                        <div className="w-2.5 h-2.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2px]" />
                        <span className="text-[8px] text-slate-400 font-medium">app.hiry.ai/school/analytics</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 pb-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <BarChart3 size={10} className="text-emerald-600" />
                        <span className="text-[9px] font-bold text-slate-900">Promotion 2026 — Tableau de bord</span>
                      </div>
                      <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">Temps réel</span>
                    </div>

                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-1.5 mb-3">
                      {[
                        { label: "Étudiants", value: "245", color: "text-slate-900" },
                        { label: "Placés", value: "187", color: "text-emerald-600" },
                        { label: "Taux", value: "76%", color: "text-indigo-600" },
                      ].map((kpi, i) => (
                        <div key={i} className="bg-slate-50 rounded-lg p-2 text-center border border-slate-100">
                          <p className={`text-sm font-extrabold ${kpi.color} leading-none`}>{kpi.value}</p>
                          <p className="text-[7px] text-slate-400 font-bold mt-0.5">{kpi.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Donut chart + sector breakdown side by side */}
                    <div className="flex gap-2.5">
                      {/* Mini donut chart */}
                      <div className="flex flex-col items-center justify-center shrink-0">
                        <div className="relative w-[60px] h-[60px]">
                          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="3.5" />
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="3.5" strokeDasharray="67 33" strokeLinecap="round" />
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="3.5" strokeDasharray="9 91" strokeDashoffset="-67" strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[9px] font-extrabold text-slate-900">76%</span>
                          </div>
                        </div>
                        <p className="text-[7px] font-bold text-slate-400 mt-1">Insertion</p>
                      </div>

                      {/* Sector bars */}
                      <div className="flex-1 space-y-1.5">
                        {[
                          { sector: "Tech / Digital", pct: 42, color: "bg-indigo-500" },
                          { sector: "Conseil / Audit", pct: 24, color: "bg-emerald-500" },
                          { sector: "Finance", pct: 18, color: "bg-amber-500" },
                          { sector: "Industrie", pct: 10, color: "bg-purple-500" },
                          { sector: "Autres", pct: 6, color: "bg-slate-400" },
                        ].map((s) => (
                          <div key={s.sector} className="flex items-center gap-1.5">
                            <span className="text-[7px] font-medium text-slate-500 w-[55px] truncate">{s.sector}</span>
                            <div className="flex-1 h-[5px] bg-slate-100 rounded-full overflow-hidden">
                              <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                            </div>
                            <span className="text-[7px] font-bold text-slate-500 w-5 text-right">{s.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <Link href="/ecoles" className="mt-5 inline-flex items-center text-sm font-extrabold text-emerald-600 gap-1.5 group-hover:gap-3 transition-all relative z-30">
                Tour de contrôle <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ===== CARD 4: IA CORE — Full width bottom banner ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.25 }}
            className="md:col-span-12 group relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-[0.5px]" />

            <div className="relative bg-white rounded-[2rem] p-7 md:p-10 border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
              {/* Decorative blurs */}
              <div className="absolute -top-24 left-1/4 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left: Text content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-5">
                    <Brain size={14} />
                    <span>Le moteur Hiry</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Le seul outil qui comprend{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">les humains</span>
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg">
                    Notre algorithme propriétaire analyse la personnalité, les valeurs et la culture pour créer des connexions qui vont bien au-delà du simple matching de compétences.
                  </p>
                </div>

                {/* Right: Animated feature pills */}
                <div className="flex-1 w-full max-w-md">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Brain, label: "Analyse comportementale", value: "Big Five + Jung", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
                      { icon: Heart, label: "Culture fit scoring", value: "Valeurs & ADN", color: "from-pink-500 to-rose-600", bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-100" },
                      { icon: Target, label: "Matching prédictif", value: "94% de précision", color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
                      { icon: Shield, label: "Données protégées", value: "RGPD compliant", color: "from-slate-500 to-slate-600", bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200" },
                    ].map((feature, i) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className={`${feature.bg} border ${feature.border} rounded-2xl p-4 cursor-default transition-shadow hover:shadow-lg`}
                        >
                          <div className={`w-9 h-9 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
                            <FeatureIcon size={16} className="text-white" />
                          </div>
                          <p className="text-xs font-bold text-slate-900 leading-tight mb-0.5">{feature.label}</p>
                          <p className={`text-[10px] font-bold ${feature.text}`}>{feature.value}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
);
