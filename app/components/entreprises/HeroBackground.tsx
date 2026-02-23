"use client";

import { useState, useEffect } from "react";

const HeroBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; dur: number; delay: number }>>([]);
  useEffect(() => {
    setParticles(Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      dur: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    })));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="hero-orb-1 absolute w-[700px] h-[700px] -top-[200px] -left-[200px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)" }} />
      <div className="hero-orb-2 absolute w-[600px] h-[600px] top-[5%] right-[-15%] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)" }} />
      <div className="hero-orb-3 absolute w-[500px] h-[500px] bottom-[-10%] left-[20%] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-[50%] opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        transform: "perspective(500px) rotateX(60deg)",
        transformOrigin: "bottom center",
      }} />
      {particles.map((p) => (
        <div key={p.id} className="particle absolute rounded-full bg-indigo-400" style={{
          left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`,
          opacity: 0.15,
          animation: `float-particle ${p.dur}s ease-in-out ${p.delay}s infinite`,
        }} />
      ))}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.05]" style={{
        background: "conic-gradient(from 0deg, transparent 0deg, rgba(99,102,241,0.3) 30deg, transparent 60deg, transparent 120deg, rgba(168,85,247,0.2) 150deg, transparent 180deg, transparent 240deg, rgba(59,130,246,0.2) 270deg, transparent 300deg)",
        filter: "blur(40px)",
        animation: "slow-rotate 25s linear infinite",
      }} />
      <div className="absolute inset-0 opacity-[0.018]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};

export default HeroBackground;
