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

  .bento-pulse { animation: bento-pulse-kf 3s ease-in-out infinite; }
  @keyframes bento-pulse-kf { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
  .bento-shimmer { animation: bento-shimmer-kf 3s ease-in-out infinite; }
  @keyframes bento-shimmer-kf { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }
  .bento-bar-fill { animation: bento-bar-kf 1.2s ease-out forwards; transform-origin: left; }
  @keyframes bento-bar-kf { from { transform: scaleX(0); } to { transform: scaleX(1); } }
`;
