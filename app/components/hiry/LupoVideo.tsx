"use client";

import { useEffect, useRef } from "react";

/**
 * React ne sérialise pas `muted` dans le HTML rendu côté serveur : sans ce
 * effect, l'autoplay est refusé par le navigateur. Même parade que la référence.
 */
export default function LupoVideo({
  src = "/video/lupo.mp4",
  poster,
  ariaLabel,
}: {
  src?: string;
  poster?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-label={ariaLabel}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}
