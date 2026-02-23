export const globalKeyframes = `
  @keyframes float-particle {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(15px, -25px) scale(1.2); }
    50% { transform: translate(-10px, -50px) scale(0.8); }
    75% { transform: translate(20px, -25px) scale(1.1); }
  }
  .hero-orb-1 { animation: aur1 8s ease-in-out infinite; }
  .hero-orb-2 { animation: aur2 10s ease-in-out infinite; }
  .hero-orb-3 { animation: aur3 12s ease-in-out infinite; }
  @keyframes aur1 { 0%,100%{transform:translate(0,0) scale(1)} 25%{transform:translate(60px,-40px) scale(1.15)} 50%{transform:translate(20px,40px) scale(.95)} 75%{transform:translate(-30px,-20px) scale(1.05)} }
  @keyframes aur2 { 0%,100%{transform:translate(0,0) scale(1)} 25%{transform:translate(-40px,30px) scale(1.1)} 50%{transform:translate(30px,-50px) scale(.9)} 75%{transform:translate(50px,20px) scale(1.12)} }
  @keyframes aur3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(40px,-30px) scale(1.08)} 66%{transform:translate(-50px,30px) scale(.92)} }
  @keyframes slow-rotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

  /* ── Bento card animations ── */
  @keyframes bento-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes bento-orbit-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  .bento-pulse {
    animation: bento-pulse-kf 3s ease-in-out infinite;
  }
  @keyframes bento-pulse-kf {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.04); }
  }
  .bento-float {
    animation: bento-float-kf 3.5s ease-in-out infinite;
  }
  @keyframes bento-float-kf {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  .bento-radiate {
    animation: bento-radiate-kf 3s ease-out infinite;
  }
  @keyframes bento-radiate-kf {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(3.5); opacity: 0; }
  }
  .bento-travel {
    animation: bento-travel-kf 3s ease-in-out infinite;
  }
  @keyframes bento-travel-kf {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(500%); }
  }
  /* Shimmer sweep */
  .bento-shimmer {
    animation: bento-shimmer-kf 3s ease-in-out infinite;
  }
  @keyframes bento-shimmer-kf {
    0% { transform: translateX(-200%); }
    100% { transform: translateX(600%); }
  }
  /* Bar fill on view */
  .bento-bar-fill {
    animation: bento-bar-fill-kf 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transform-origin: left;
  }
  @keyframes bento-bar-fill-kf {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
  /* Chip appear */
  .bento-chip-appear {
    opacity: 0;
    animation: bento-chip-kf 0.4s ease-out forwards;
  }
  @keyframes bento-chip-kf {
    from { opacity: 0; transform: scale(0.8) translateY(4px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  /* Loading dots */
  .bento-dot-1 { animation: bento-dots-kf 1.4s ease-in-out infinite; }
  .bento-dot-2 { animation: bento-dots-kf 1.4s ease-in-out 0.2s infinite; }
  .bento-dot-3 { animation: bento-dots-kf 1.4s ease-in-out 0.4s infinite; }
  @keyframes bento-dots-kf {
    0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
    40% { opacity: 1; transform: scale(1.2); }
  }
`;
