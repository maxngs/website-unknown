"use server";

import { cookies, headers } from "next/headers";
import { processDemoRequest, type DemoResult, type SubmitMeta } from "@/lib/leads/submit";

/**
 * Formulaire de démo (page Entreprises et /entreprises/demo).
 * La validation zod est rejouée côté serveur : le client n'est jamais cru.
 */
export async function submitDemoRequest(
  input: unknown,
  meta: SubmitMeta
): Promise<DemoResult> {
  const h = await headers();
  const c = await cookies();

  return processDemoRequest(input, meta, {
    ip:
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      h.get("x-real-ip") ||
      undefined,
    userAgent: h.get("user-agent") ?? undefined,
    sourceUrl: h.get("referer") ?? undefined,
    fbc: c.get("_fbc")?.value,
    fbp: c.get("_fbp")?.value,
    marketingConsent: c.get("cookie-consent")?.value === "accepted",
  });
}
