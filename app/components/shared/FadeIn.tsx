"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Délai en secondes avant le démarrage de l'animation (default: 0) */
  delay?: number;
  /** "up" (défaut) monte de 30px, "none" = simple fade */
  direction?: "up" | "none";
}

/**
 * Fade-in léger à base de IntersectionObserver + CSS pur.
 * Remplace l'ancienne version Framer Motion (~50 Kio économisés sur le bundle
 * des landings qui utilisent FadeIn sans autre besoin de Framer).
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respecte prefers-reduced-motion : on saute l'animation
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translateY = direction === "up" ? 30 : 0;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${translateY}px)`,
        transition: `opacity 600ms ease-out ${delay}s, transform 600ms ease-out ${delay}s`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
