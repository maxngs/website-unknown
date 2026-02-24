"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  ArrowRight, Brain, Target, UserCheck, Sparkles, Heart,
  Play, MapPin, Handshake, CheckCircle2, Search, Rocket
} from "lucide-react";
import { useLeadModal } from "../shared/Providers";

interface StepContent {
  icon: any;
  badge: string;
  title: string;
  desc: string;
  cta: string;
  gradient: string;
  meshColors: { c1: string; c2: string; c3: string };
  visual: React.ReactNode;
}

const howSteps: StepContent[] = [
  {
    icon: UserCheck,
    badge: "PROFIL",
    title: "Révèle ton potentiel en un rien de temps",
    desc: "Personnalité, soft skills, aspirations : Hiron te pose les bonnes questions et construit un profil bien plus riche qu'un CV. Importe ton CV si tu veux accélérer, Hiron le transforme.",
    cta: "Créer mon profil",
    gradient: "from-indigo-500 to-indigo-600",
    meshColors: { c1: "rgba(99,102,241,0.4)", c2: "rgba(129,140,248,0.35)", c3: "rgba(165,180,252,0.3)" },
    visual: (
      <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center"><Brain size={22} className="text-indigo-600" /></div>
          <div><p className="text-sm font-bold text-slate-900">Analyse IA en cours...</p><p className="text-xs text-slate-400">Détection soft skills</p></div>
        </div>
        {[{ n: "Créativité", w: "95%" }, { n: "Leadership", w: "82%" }, { n: "Analytique", w: "78%" }].map((s, i) => (
          <div key={i}>
            <div className="flex justify-between text-[11px] mb-1"><span className="font-semibold text-slate-700">{s.n}</span><span className="text-indigo-600 font-bold">{s.w}</span></div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: s.w }} /></div>
          </div>
        ))}
        <div className="flex gap-2 pt-1">{["🚀 Innovateur", "💡 Créatif", "📊 Stratège"].map(t => <span key={t} className="px-2 py-1 bg-indigo-50 border border-indigo-100 rounded-md text-[9px] font-bold text-indigo-600">{t}</span>)}</div>
      </div>
    ),
  },
  {
    icon: Search,
    badge: "MATCHING",
    title: "Découvre tes matchs, pas des listes",
    desc: "Hiron croise ton profil de potentiel avec l'ADN des entreprises. Pour chaque match, on t'explique pourquoi tu es compatible. Zéro candidature à l'aveugle.",
    cta: "Voir mes matchs",
    gradient: "from-purple-500 to-pink-500",
    meshColors: { c1: "rgba(168,85,247,0.4)", c2: "rgba(236,72,153,0.35)", c3: "rgba(244,114,182,0.3)" },
    visual: (
      <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 space-y-3">
        <div className="flex items-center justify-between mb-1"><p className="text-sm font-bold text-slate-900">Tes top matches</p><span className="text-[10px] text-purple-600 font-semibold">Score IA</span></div>
        {[{ t: "UX Designer — Doctolib", s: 96, c: "Alternance" }, { t: "PM — BlaBlaCar", s: 91, c: "Stage" }, { t: "Data Analyst — Qonto", s: 88, c: "CDI" }].map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-purple-200 transition-all">
            <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">{m.t[0]}</div>
            <div className="flex-1"><p className="text-xs font-bold text-slate-900">{m.t}</p><span className="text-[9px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded font-medium">{m.c}</span></div>
            <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">{m.s}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Handshake,
    badge: "CONNEXION",
    title: "Envoi ton intérêt et décroche ta mission",
    desc: "Contact direct avec les recruteurs. Dashboard centralisé pour suivre tes candidatures. Plus de ghosting : transparence totale sur le statut, et bien plus...",
    cta: "Commencer maintenant",
    gradient: "from-orange-500 to-rose-500",
    meshColors: { c1: "rgba(249,115,22,0.35)", c2: "rgba(244,63,94,0.35)", c3: "rgba(251,146,60,0.3)" },
    visual: (
      <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"><Handshake size={22} className="text-emerald-600" /></div>
          <div><p className="text-sm font-bold text-slate-900">Match confirmé ! 🎉</p><p className="text-xs text-slate-400">Contact direct activé</p></div>
        </div>
        {[{ s: "Candidature envoyée", ok: true }, { s: "Profil consulté par le recruteur", ok: true }, { s: "Entretien planifié — Mardi 14h", ok: true }, { s: "Offre reçue", ok: false }].map((step, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className={`w-6 h-6 rounded-full ${step.ok ? 'bg-emerald-500' : 'bg-slate-200'} flex items-center justify-center`}>{step.ok ? <CheckCircle2 size={14} className="text-white" /> : <div className="w-2 h-2 rounded-full bg-slate-400" />}</div>
            <span className={`text-xs font-medium ${step.ok ? 'text-slate-900' : 'text-slate-400'}`}>{step.s}</span>
          </div>
        ))}
      </div>
    ),
  },
];

/* ─── Single step layer (rendered all 3 simultaneously, opacity driven by scroll) ─── */
const StepLayer = ({ step, opacity, yOffset, scale, onCta }: { step: StepContent; opacity: any; yOffset: any; scale: any; onCta?: () => void }) => {
  const Icon = step.icon;
  return (
    <motion.div style={{ opacity, y: yOffset, scale }} className="absolute inset-0 flex items-center will-change-transform">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className={`w-10 h-10 bg-gradient-to-br ${step.gradient} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                <Icon size={20} />
              </div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-[0.15em]">{step.badge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl xl:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {step.title}
            </h3>
            <p className="text-base text-slate-500 font-medium leading-relaxed mb-8 max-w-lg">
              {step.desc}
            </p>
            <button onClick={onCta} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors group">
              {step.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {/* Right — gradient mesh card */}
          <div className="flex items-center justify-center">
            <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-10 w-full" style={{ minHeight: "420px" }}>
              <div className="absolute inset-0" style={{
                background: `
                  radial-gradient(ellipse at 20% 20%, ${step.meshColors.c1} 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 30%, ${step.meshColors.c2} 0%, transparent 50%),
                  radial-gradient(ellipse at 50% 90%, ${step.meshColors.c3} 0%, transparent 60%),
                  linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)
                `,
              }} />
              <div className="relative z-10 flex items-center justify-center min-h-[340px]">
                <div className="w-full max-w-sm">{step.visual}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const { open } = useLeadModal();

  // Smooth crossfade with wider overlap zones for buttery transitions
  // Step 0: fully visible → long crossfade out
  const opacity0 = useTransform(scrollYProgress, [0, 0.25, 0.38], [1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.25, 0.38], [0, 0, -50]);
  const scale0 = useTransform(scrollYProgress, [0, 0.25, 0.38], [1, 1, 0.97]);
  // Step 1: fade in ← overlap with step 0 → fade out
  const opacity1 = useTransform(scrollYProgress, [0.25, 0.38, 0.58, 0.72], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.25, 0.38, 0.58, 0.72], [50, 0, 0, -50]);
  const scale1 = useTransform(scrollYProgress, [0.25, 0.38, 0.58, 0.72], [0.97, 1, 1, 0.97]);
  // Step 2: fade in ← overlap with step 1 → hold
  const opacity2 = useTransform(scrollYProgress, [0.58, 0.72, 1], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.58, 0.72, 1], [50, 0, 0]);
  const scale2 = useTransform(scrollYProgress, [0.58, 0.72, 1], [0.97, 1, 1]);

  // Progress dots
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.35) setActive(0);
    else if (v < 0.68) setActive(1);
    else setActive(2);
  });

  return (
    <section id="how" className="relative z-10">
      {/* ═══ Desktop: Full scroll-driven sticky ═══ */}
      <div className="hidden lg:block">
        {/* Scroll driver — tall div that creates the scroll distance */}
        <div ref={containerRef} style={{ height: "300vh" }}>
          {/* Sticky viewport panel — all 3 steps stacked as absolute layers */}
          <div className="sticky top-0 h-screen w-full bg-[#fafafa]" style={{ zIndex: 2 }}>
            <StepLayer step={howSteps[0]} opacity={opacity0} yOffset={y0} scale={scale0} onCta={open} />
            <StepLayer step={howSteps[1]} opacity={opacity1} yOffset={y1} scale={scale1} onCta={open} />
            <StepLayer step={howSteps[2]} opacity={opacity2} yOffset={y2} scale={scale2} onCta={open} />

            {/* Progress dots */}
            <div className="absolute bottom-20 inset-x-0 flex justify-center" style={{ zIndex: 10 }}>
              <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                  {[0, 1, 2].map(i => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-700 ease-out ${active === i ? "w-10 bg-slate-900" : "w-3 bg-slate-200"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Mobile: stacked cards ═══ */}
      <div className="lg:hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center px-4 sm:px-6 pt-24 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm"><Rocket size={14} /><span>Simple et puissant</span></div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Comment ça <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">marche ?</span></h2>
          <p className="text-slate-500 font-medium text-base max-w-md mx-auto">Trois étapes pour trouver ta mission.</p>
        </motion.div>
        <div className="px-4 sm:px-6 pb-20 space-y-12">
          {howSteps.map((s, i) => {
            const SIcon = s.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${s.gradient} text-white rounded-xl flex items-center justify-center shadow-lg`}><SIcon size={20} /></div>
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-[0.15em]">{s.badge}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">{s.desc}</p>
                  <button onClick={open} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900">
                    {s.cta} <ArrowRight size={14} />
                  </button>
                </div>
                <div className="relative rounded-2xl overflow-hidden p-5" style={{
                  background: `
                    radial-gradient(ellipse at 20% 20%, ${s.meshColors.c1} 0%, transparent 60%),
                    radial-gradient(ellipse at 80% 30%, ${s.meshColors.c2} 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 90%, ${s.meshColors.c3} 0%, transparent 60%),
                    linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)
                  `,
                }}>
                  {s.visual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default HowItWorks;
