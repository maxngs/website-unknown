// ============================================================
// app/api/lead/route.ts
// API Route — Google Sheets + Meta Conversions API (CAPI)
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { sendMetaEvent } from "@/lib/meta-capi";

const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation basique côté serveur
    if (!body.email || !body.firstName || !body.lastName || !body.profile) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    // ── Récupérer les infos client pour la CAPI ──
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      undefined;
    const clientUserAgent = req.headers.get("user-agent") || undefined;
    const referer = req.headers.get("referer") || undefined;

    // Récupérer les cookies Meta pour la déduplication
    const cookies = req.headers.get("cookie") || "";
    const fbcMatch = cookies.match(/_fbc=([^;]+)/);
    const fbpMatch = cookies.match(/_fbp=([^;]+)/);
    const fbc = fbcMatch ? decodeURIComponent(fbcMatch[1]) : undefined;
    const fbp = fbpMatch ? decodeURIComponent(fbpMatch[1]) : undefined;

    // Event ID unique pour la déduplication pixel <-> CAPI
    const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // ── Déterminer le type de lead ──
    const leadTypeMap: Record<string, string> = {
      student: "Étudiant / Candidat",
      company: "Entreprise",
      school: "École",
    };
    const leadType = body.profile.startsWith("[Contact]")
      ? "Contact"
      : leadTypeMap[body.profile] || body.profile;

    // ── Envoi en parallèle : Google Sheets + Meta CAPI ──
    const promises: Promise<unknown>[] = [];

    // 1. Google Sheets
    if (GOOGLE_SHEET_URL) {
      promises.push(
        fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          redirect: "follow",
        }).catch((err) => console.error("Google Sheets error:", err))
      );
    } else {
      console.warn("⚠️ NEXT_PUBLIC_GOOGLE_SHEET_URL non configurée");
      console.log("📋 Données du lead:", body);
    }

    // 2. Meta Conversions API — événement Lead enrichi
    promises.push(
      sendMetaEvent({
        eventName: "Lead",
        eventId,
        sourceUrl: referer,
        userData: {
          email: body.email,
          phone: body.phone && body.phone !== "Non renseigné" ? body.phone : undefined,
          firstName: body.firstName,
          lastName: body.lastName,
          fbc,
          fbp,
        },
        customData: {
          lead_type: leadType,
          content_name: "lead_form",
          content_category: leadType,
          source: referer?.includes("/contact") ? "contact_page" : "lead_modal",
        },
        clientIp,
        clientUserAgent,
      })
    );

    // Exécution parallèle — on n'attend pas pour répondre au client
    await Promise.allSettled(promises);

    // Retourne l'event_id pour la déduplication côté navigateur
    return NextResponse.json(
      { success: true, event_id: eventId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API /api/lead:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
