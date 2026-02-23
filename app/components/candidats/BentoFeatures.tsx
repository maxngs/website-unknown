"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain, Target, Zap, Heart, Eye, UserCheck, Building2, Compass, Rocket, Search, CheckCircle2,
} from "lucide-react";

const bColors: Record<string, { icon: string; shadow: string; glow: string }> = {
  indigo: { icon: "from-indigo-500 to-indigo-600", shadow: "shadow-indigo-100/40", glow: "bg-indigo-100/50" },
  purple: { icon: "from-purple-500 to-purple-600", shadow: "shadow-purple-100/40", glow: "bg-purple-100/50" },
  blue: { icon: "from-blue-500 to-blue-600", shadow: "shadow-blue-100/40", glow: "bg-blue-100/50" },
  emerald: { icon: "from-emerald-500 to-emerald-600", shadow: "shadow-emerald-100/40", glow: "bg-emerald-100/50" },
  amber: { icon: "from-amber-500 to-amber-600", shadow: "shadow-amber-100/40", glow: "bg-amber-100/50" },
  pink: { icon: "from-pink-500 to-pink-600", shadow: "shadow-pink-100/40", glow: "bg-pink-100/50" },
};

const BCard = ({ icon: Icon, title, desc, color, children, className = "" }: { icon: any; title: string; desc: string; color: string; children: React.ReactNode; className?: string }) => {
  const c = bColors[color];
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      className={`group relative rounded-[2rem] overflow-hidden ${className}`}>
      <div className={`absolute -inset-[1px] bg-gradient-to-br ${c.icon} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]`} />
      <div className="relative bg-white rounded-[2rem] p-6 md:p-8 h-full flex flex-col border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
        <div className={`absolute top-0 right-0 w-48 h-48 ${c.glow} rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150`} />
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-11 h-11 bg-gradient-to-br ${c.icon} text-white rounded-xl flex items-center justify-center shadow-lg ${c.shadow} shrink-0 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}><Icon size={20} /></div>
            <h3 className="text-base md:text-lg font-extrabold text-slate-900">{title}</h3>
          </div>
          <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">{desc}</p>
          <div className="mt-auto">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoFeatures = () => (
  <section className="relative z-10 pt-8 pb-16 md:pt-12 md:pb-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* ── Card 1: Profil — Mini app screen "Analyse IA" ── */}
        <BCard icon={UserCheck} title="Un profil qui te ressemble" desc="Exprime qui tu es via une conversation intuitive. Soft skills, projets, ambitions." color="indigo" className="md:col-span-7">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-4 md:p-5 shadow-inner relative overflow-hidden">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent bento-shimmer" /></div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 bento-pulse"><Brain size={16} className="text-white" /></div>
              <div>
                <p className="text-[11px] font-bold text-white">Analyse IA en cours...</p>
                <p className="text-[9px] text-slate-400 font-medium">Génération de ton profil de potentiel</p>
              </div>
              <div className="ml-auto flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 bento-dot-1" /><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 bento-dot-2" /><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 bento-dot-3" /></div>
            </div>
            {/* Skill bars */}
            <div className="space-y-3 mb-4">
              {[
                { label: "Créativité", pct: 95, color: "from-indigo-400 to-violet-500" },
                { label: "Leadership", pct: 83, color: "from-purple-400 to-indigo-500" },
                { label: "Analytique", pct: 78, color: "from-violet-400 to-purple-500" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold text-slate-300">{s.label}</span>
                    <span className="text-[10px] font-bold text-indigo-300">{s.pct}%</span>
                  </div>
                  <div className="h-[6px] bg-white/[0.06] rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${s.color} rounded-full bento-bar-fill relative`} style={{ width: `${s.pct}%`, animationDelay: `${i * 0.15}s` }}>
                      <div className="absolute inset-0 overflow-hidden rounded-full"><div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent bento-shimmer" /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Chips row */}
            <div className="flex flex-wrap gap-1.5">
              {["✨ Innovateur", "🎯 Stratège", "💡 Créatif"].map((c, i) => (
                <span key={i} className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm rounded-lg text-[9px] font-semibold text-indigo-200 bento-chip-appear" style={{ animationDelay: `${1.2 + i * 0.15}s` }}>{c}</span>
              ))}
            </div>
          </div>
        </BCard>

        {/* ── Card 2: Matchs — Stacked glass match cards ── */}
        <BCard icon={Target} title="Des matchs, pas des listes" desc="Notre IA te propose uniquement des offres pertinentes." color="purple" className="md:col-span-5">
          <div className="relative h-56 md:h-64">
            {/* Stacked match cards */}
            {[
              { company: "Doctolib", role: "UX Designer", type: "Alternance", score: 96, color: "from-indigo-500 to-indigo-700", z: 3, y: 0 },
              { company: "BlaBlaCar", role: "Product Manager", type: "Stage", score: 91, color: "from-emerald-500 to-emerald-700", z: 2, y: 70 },
              { company: "Qonto", role: "Data Analyst", type: "CDI", score: 88, color: "from-purple-500 to-violet-700", z: 1, y: 140 },
            ].map((m, i) => (
              <div key={i} className="absolute inset-x-0 bento-float" style={{ top: `${m.y}px`, zIndex: m.z, animationDelay: `${i * 0.5}s`, animationDuration: `${3.5 + i * 0.4}s` }}>
                <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-3 flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 bg-gradient-to-br ${m.color} rounded-xl flex items-center justify-center text-white text-[13px] font-extrabold shadow-md shrink-0`}>{m.company[0]}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-bold text-slate-900 truncate">{m.role} — {m.company}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{m.type}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className={`text-[15px] font-extrabold ${i === 0 ? "text-purple-600" : "text-slate-400"}`}>{m.score}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BCard>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* ── Card 3: Transparence — Dark explainability panel ── */}
        <BCard icon={Eye} title="Transparence totale" desc="On t'explique pourquoi tu matche. Postule moins, postule mieux." color="blue" className="md:col-span-5">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-4 md:p-5 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent bento-shimmer" /></div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center"><Search size={12} className="text-blue-400" /></div>
              <span className="text-[11px] font-bold text-white">Pourquoi ce match ?</span>
              <div className="ml-auto px-2 py-0.5 bg-emerald-500/20 rounded-md"><span className="text-[10px] font-bold text-emerald-400">96%</span></div>
            </div>
            {/* Criteria */}
            <div className="space-y-3">
              {[
                { label: "Culture", value: "Innovation & Agilité", pct: 94, color: "from-blue-400 to-cyan-400" },
                { label: "Soft skills", value: "Créativité", pct: 95, color: "from-indigo-400 to-blue-400" },
                { label: "Valeurs", value: "Impact social", pct: 91, color: "from-violet-400 to-indigo-400" },
              ].map((r, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={10} className="text-emerald-400" />
                      <span className="text-[10px] font-semibold text-slate-300">{r.label} · {r.value}</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-300">{r.pct}%</span>
                  </div>
                  <div className="h-[5px] bg-white/[0.06] rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${r.color} rounded-full bento-bar-fill`} style={{ width: `${r.pct}%`, animationDelay: `${i * 0.15}s` }}>
                      <div className="absolute inset-0 overflow-hidden rounded-full"><div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent bento-shimmer" /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BCard>

        {/* ── Card 4: Culture — Company DNA card with radar + bars ── */}
        <BCard icon={Building2} title="La vraie culture d'entreprise" desc="ADN des entreprises : management, ambiance, valeurs." color="emerald" className="md:col-span-7">
          <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-6">
            {/* Radar graphic */}
            <div className="relative w-36 h-36 md:w-40 md:h-40 shrink-0 flex items-center justify-center">
              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-full rounded-full border border-emerald-200/30" /></div>
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-3/4 h-3/4 rounded-full border border-dashed border-emerald-200/20" /></div>
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-1/2 h-1/2 rounded-full border border-emerald-200/15" /></div>
              {/* Filled radar shape */}
              <svg className="absolute inset-0 w-full h-full bento-pulse" viewBox="0 0 200 200" fill="none" style={{ animationDuration: "4s" }}>
                <polygon points="100,20 35,135 165,135" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              {/* Center icon */}
              <div className="relative z-10 w-10 h-10 bg-emerald-500/10 border border-emerald-200/30 rounded-xl flex items-center justify-center">
                <Building2 size={16} className="text-emerald-600" />
              </div>
              {/* Vertex labels */}
              {[
                { label: "Innovation", top: "1%", left: "50%", tx: "-50%" },
                { label: "Bien-être", bottom: "8%", left: "2%", tx: "0" },
                { label: "Croissance", bottom: "8%", right: "2%", tx: "0" },
              ].map((p, i) => (
                <div key={i} className="absolute text-[8px] font-bold text-emerald-500/70 uppercase tracking-wider" style={{ top: p.top, bottom: p.bottom, left: p.left, right: p.right, transform: `translateX(${p.tx})` } as React.CSSProperties}>
                  {p.label}
                </div>
              ))}
            </div>
            {/* Bars */}
            <div className="flex-1 w-full space-y-3.5">
              {[
                { label: "Innovation", value: 92, color: "from-emerald-400 to-emerald-600" },
                { label: "Bien-être", value: 88, color: "from-teal-400 to-emerald-500" },
                { label: "Croissance", value: 95, color: "from-green-400 to-emerald-600" },
              ].map((g, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-slate-700">{g.label}</span>
                    <span className="text-[13px] font-extrabold text-emerald-600">{g.value}%</span>
                  </div>
                  <div className="h-2 bg-emerald-50 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${g.color} rounded-full bento-bar-fill relative`} style={{ width: `${g.value}%`, animationDelay: `${i * 0.15}s` }}>
                      <div className="absolute inset-0 overflow-hidden rounded-full"><div className="w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent bento-shimmer" /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BCard>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* ── Card 5: Simple — Timeline with traveling light ── */}
        <BCard icon={Rocket} title="Simple et rapide" desc="De la création de ton profil à la prise de contact, tout est fluide." color="amber">
          <div className="relative py-2">
            {/* Connector */}
            <div className="hidden md:block absolute top-[34px] left-[48px] right-[48px] h-[2px] bg-amber-100 rounded-full">
              <div className="absolute inset-0 overflow-hidden rounded-full"><div className="h-full w-1/3 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent bento-travel" /></div>
            </div>
            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-3">
              {[
                { label: "Inscription", time: "7 min", color: "from-amber-400 to-orange-500", SIcon: Zap },
                { label: "Analyse IA", time: "Instantané", color: "from-orange-500 to-amber-500", SIcon: Brain },
                { label: "Tes matchs", time: "En direct", color: "from-amber-500 to-yellow-500", SIcon: Target },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center flex-1">
                  <div className="relative mb-2.5">
                    <div className={`w-[52px] h-[52px] bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200/20 bento-float`} style={{ animationDelay: `${i * 0.4}s`, animationDuration: "4s" }}>
                      <s.SIcon size={20} className="text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full shadow-sm border border-amber-100 flex items-center justify-center">
                      <span className="text-[8px] font-black text-amber-600">{i + 1}</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-extrabold text-slate-900">{s.label}</span>
                  <span className="text-[10px] text-amber-500 font-bold mt-0.5">{s.time}</span>
                </div>
              ))}
            </div>
          </div>
        </BCard>

        {/* ── Card 6: Mission — Dark score dashboard ── */}
        <BCard icon={Compass} title="Une mission, pas un job" desc="On te connecte où tu pourras apprendre, avoir un impact, t'épanouir." color="pink">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-pink-950 p-5 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent bento-shimmer" /></div>
            {/* Score display */}
            <div className="relative z-10 flex items-center gap-5">
              <div className="relative">
                <div className="w-[64px] h-[64px] bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl shadow-pink-500/20 bento-pulse">
                  <Heart size={26} className="text-white" fill="white" />
                </div>
                {/* Sonar rings */}
                {[1, 2].map(r => (
                  <div key={r} className="absolute inset-0 rounded-2xl border border-pink-400/20 bento-radiate" style={{ animationDelay: `${r * 1}s` }} />
                ))}
              </div>
              <div>
                <div className="text-3xl font-black text-white leading-none">94<span className="text-lg font-extrabold text-pink-300">%</span></div>
                <p className="text-[10px] text-slate-400 font-semibold mt-1">Score d&apos;épanouissement</p>
              </div>
            </div>
            {/* Sub-metrics */}
            <div className="relative z-10 mt-4 grid grid-cols-3 gap-2">
              {[
                { label: "Impact", value: "Élevé", color: "text-pink-300" },
                { label: "Croissance", value: "+40%", color: "text-rose-300" },
                { label: "Bien-être", value: "Optimal", color: "text-fuchsia-300" },
              ].map((m, i) => (
                <div key={i} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2.5 text-center bento-float" style={{ animationDelay: `${i * 0.3}s`, animationDuration: "5s" }}>
                  <p className={`text-[12px] font-extrabold ${m.color}`}>{m.value}</p>
                  <p className="text-[8px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BCard>
      </div>
    </div>
  </section>
);

export default BentoFeatures;
