// ============================================================
// Limitation de débit par IP — au mieux.
// En mémoire : chaque instance serverless tient son propre compteur, ce qui
// suffit contre un envoi en rafale depuis un même navigateur. Pour une
// limite stricte et partagée, brancher un store (Upstash Redis) ici.
// ============================================================

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);

  // Ménage occasionnel pour ne pas garder des IP indéfiniment
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

/** Pour les tests. */
export function resetRateLimit() {
  hits.clear();
}
