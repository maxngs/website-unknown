// ============================================================
// app/api/lead/route.ts
// API Route — Proxy vers Google Sheets (résout le problème CORS)
// ============================================================

import { NextRequest, NextResponse } from "next/server";

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

    if (!GOOGLE_SHEET_URL) {
      console.warn("⚠️ NEXT_PUBLIC_GOOGLE_SHEET_URL non configurée");
      console.log("📋 Données du lead:", body);
      return NextResponse.json(
        { success: true, warning: "Google Sheet URL non configurée" },
        { status: 200 }
      );
    }

    // Envoi vers Google Apps Script (côté serveur = pas de CORS)
    const response = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    // Google Apps Script redirige (302) vers le résultat
    // fetch avec redirect: "follow" suit automatiquement
    if (response.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Même si Google renvoie une erreur, on log mais on ne bloque pas l'UX
    console.error("Google Sheets response:", response.status, await response.text());
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur API /api/lead:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
