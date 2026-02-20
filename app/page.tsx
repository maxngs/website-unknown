"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Sparkles, Briefcase, Zap,
  Target, BarChart3, Users, GraduationCap, Award, MapPin, CheckCircle2
} from "lucide-react";

// ============================================================================
// MINI-COMPOSANTS VITRINES (ADN Hiry)
// ============================================================================

// 1. Radar Chart Structuré
const MockRadarChart = () => {
  const data = [
    { label: 'Leadership', value: 85 },
    { label: 'Créativité', value: 90 },
    { label: 'Analyse', value: 75 },
    { label: 'Opérationnel', value: 80 },
    { label: 'Relationnel', value: 95 },
  ];
  const size = 200;
  const center = size / 2;
  const maxRadius = 50;

  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    return `${center + radius * Math.cos(angle)},${center + radius * Math.sin(angle)}`;
  };
  const polygonPoints = data.map((d, i) => getPoint(i, d.value)).join(' ');

  return (
    <div className="relative flex flex-col items-center">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[180px]">
        {[1, 2, 3, 4].map((level) => {
          const r = (maxRadius / 4) * level;
          const pts = data.map((_, i) => {
            const a = (Math.PI * 2 * i) / data.length - Math.PI / 2;
            return `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`;
          }).join(' ');
          return <polygon key={level} points={pts} fill="none" stroke="#f1f5f9" strokeWidth="1" />;
        })}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          points={polygonPoints}
          fill="rgba(99, 102, 241, 0.15)"
          stroke="#6366f1"
          strokeWidth="2"
        />
        {data.map((d, i) => {
          const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
          const labelRadius = maxRadius + 20;
          const x = center + labelRadius * Math.cos(angle);
          const y = center + labelRadius * Math.sin(angle);
          return (
            <text key={i} x={x} y={y} fontSize="8" fontWeight="700" textAnchor="middle" className="fill-slate-400 uppercase tracking-tighter">
              {d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

// 2. Mockup Offre (JobSearch.jsx)
const MockOfferCard = () => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xl shadow-indigo-50/50"
  >
    <div className="flex justify-between items-start mb-3">
      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
        <Briefcase size={18} className="text-indigo-600" />
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-200">
        <Sparkles size={12} /> 98% Match
      </div>
    </div>
    <h3 className="font-bold text-sm text-gray-900 leading-tight">Product Manager junior</h3>
    <p className="font-medium text-xs text-gray-500 mt-1">TechFlow SAS</p>
  </motion.div>
);

// 3. Mockup Stat Entreprise
const MockStatCard = () => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl"
  >
    <div className="flex items-start justify-between mb-2">
      <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
        <Users size={18} />
      </div>
      <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg bg-emerald-50 text-emerald-600">
        +24%
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900">128</h3>
    <p className="text-xs font-medium text-slate-500">Candidatures IA</p>
  </motion.div>
);

// ============================================================================
// PAGE PRINCIPALE
// ============================================================================

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa]">

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>L'IA au service de votre carrière</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Le recrutement <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              qui a du sens.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
            Hiry analyse en profondeur les soft skills, les aspirations et la culture d'entreprise pour créer des matchs parfaits. Fini les CV ignorés.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/candidats" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Je suis candidat <ArrowRight size={18} />
            </Link>
            <Link href="/entreprises" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center">
              Je recrute
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 w-full relative h-[400px] lg:h-[500px] hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute top-[10%] right-[10%] w-[280px] z-20">
            <MockOfferCard />
          </div>
          <div className="absolute bottom-[20%] left-[5%] w-[200px] z-30">
            <MockStatCard />
          </div>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-3xl shadow-2xl border border-indigo-50 flex flex-col items-center justify-center z-10 rotate-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-2 shadow-inner">
              <Zap size={24} className="text-white" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hiry AI</span>
          </motion.div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
            <path d="M 150 200 Q 250 250 400 150" stroke="#6366f1" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-pulse" />
            <path d="M 200 350 Q 250 250 150 200" stroke="#a855f7" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-pulse" />
          </svg>
        </motion.div>
      </div>

      {/* ================= BENTO GRID SECTION (Équilibrée) ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">L'expérience Hiry</h2>
          <p className="text-slate-500 font-medium">Trois acteurs, une seule intelligence pour les réunir.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Candidats (Mockup Profil Structuré) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150" />
            <div className="relative z-10 mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:rotate-6 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Pour les Talents</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Révélez votre vrai potentiel. Notre IA analyse vos <span className="text-indigo-600 font-bold">Soft Skills</span> et vos aspirations profondes.
              </p>
            </div>

            {/* Mockup d'interface ancré */}
            <div className="mt-auto bg-slate-50/50 border border-slate-100 rounded-2xl p-4 relative overflow-hidden">
               <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">M</div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-900 leading-none">Maxime R.</p>
                    <p className="text-[8px] text-slate-400 font-medium uppercase mt-1">Profil complété à 98%</p>
                  </div>
               </div>

               <div className="flex flex-col items-center">
                  <MockRadarChart />

                  {/* Archetype Badge Intégré */}
                  <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-white border border-indigo-100 rounded-xl shadow-sm">
                    <span className="text-xs">🚀</span>
                    <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-tighter">Archétype : L'Innovateur</span>
                  </div>
               </div>

               {/* Tags de compétences ancrés en bas */}
               <div className="flex justify-center gap-2 mt-4">
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[8px] font-bold text-slate-500">React.js</span>
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[8px] font-bold text-slate-500">Leadership</span>
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[8px] font-bold text-slate-500">UX Design</span>
               </div>
            </div>

            <Link href="/candidats" className="mt-6 inline-flex items-center text-sm font-extrabold text-indigo-600 gap-1 group-hover:gap-2 transition-all relative z-10">
              Voir mon profil IA <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Card 2: Écoles (Suivi Insertion) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150" />
            <div className="relative z-10 mb-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Pour les Écoles</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Pilotez l'insertion de vos promotions avec des données en temps réel.</p>
            </div>

            <div className="mt-auto bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
               <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span>Taux de placement global</span>
                  <span className="text-emerald-600">92%</span>
               </div>
               <div className="h-2.5 bg-white rounded-full overflow-hidden border border-slate-100 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-emerald-500"
                  />
               </div>
               <div className="flex gap-3">
                  <div className="flex-1 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center gap-2">
                     <Users size={16} className="text-slate-400"/>
                     <span className="text-xs font-bold text-slate-700">245 étudiants inscrits</span>
                  </div>
               </div>
            </div>

            <Link href="/ecoles" className="mt-6 inline-flex items-center text-sm font-extrabold text-emerald-600 gap-1 group-hover:gap-2 transition-all relative z-10">
              Tour de contrôle <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Card 3: Entreprises (Pipeline & Stats) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 border border-indigo-800 shadow-xl flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="relative z-10 flex-1 text-white text-center md:text-left">
              <div className="w-14 h-14 bg-white/10 text-indigo-300 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md mx-auto md:mx-0">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Pour les PME</h3>
              <p className="text-indigo-200 text-lg font-medium mb-8 leading-relaxed max-w-md">
                Accédez à un vivier de talents pré-qualifiés par notre IA. Gagnez 40h par mois en supprimant le tri manuel des CV.
              </p>
              <Link href="/entreprises" className="inline-flex text-base font-bold text-white hover:text-indigo-300 transition-colors items-center gap-2">
                Découvrir le dashboard recruteur <ArrowRight size={20} />
              </Link>
            </div>

            <div className="relative z-10 w-full max-w-[400px] bg-white rounded-3xl p-6 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <span className="text-sm font-bold text-slate-900 uppercase tracking-tighter">Pipeline de matching</span>
                <span className="text-[10px] bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-extrabold uppercase">Live</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Sarah Meyer", match: 96, role: "Dev React" },
                  { name: "Lucas Durand", match: 88, role: "Marketing" },
                  { name: "Emma Thomas", match: 82, role: "UI Design" }
                ].map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600 shadow-sm">{c.name.charAt(0)}</div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{c.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{c.role}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1 border border-emerald-100"><Zap size={10} fill="currentColor"/> {c.match}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
