// ============================================================
// lib/meta-capi.ts
// Meta Conversions API (CAPI) — envoi d'événements côté serveur
// Doc: https://developers.facebook.com/docs/marketing-api/conversions-api
// ============================================================

const PIXEL_ID = process.env.META_PIXEL_ID || "";
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN || "";
const API_VERSION = "v21.0";

// ============================================================
// TYPES
// ============================================================
interface UserData {
  /** Email en SHA-256 (hashé côté serveur) */
  em?: string;
  /** Téléphone en SHA-256 */
  ph?: string;
  /** Prénom en SHA-256 */
  fn?: string;
  /** Nom en SHA-256 */
  ln?: string;
  /** Adresse IP du client */
  client_ip_address?: string;
  /** User-Agent du client */
  client_user_agent?: string;
  /** Facebook click ID (fbclid) */
  fbc?: string;
  /** Facebook browser ID (cookie _fbp) */
  fbp?: string;
}

interface CustomData {
  /** Nom du contenu (ex: page path) */
  content_name?: string;
  /** Catégorie de contenu */
  content_category?: string;
  /** Type de lead (étudiant, entreprise, école) */
  lead_type?: string;
  /** Source du formulaire */
  source?: string;
  /** Valeur estimée */
  value?: number;
  /** Devise */
  currency?: string;
}

interface MetaEvent {
  /** Nom de l'événement Meta standard (Lead, ViewContent, etc.) */
  event_name: string;
  /** Timestamp Unix en secondes */
  event_time: number;
  /** URL de la page source */
  event_source_url?: string;
  /** Données utilisateur pour le matching */
  user_data: UserData;
  /** Données personnalisées de l'événement */
  custom_data?: CustomData;
  /** ID d'événement pour la déduplication pixel <-> CAPI */
  event_id?: string;
  /** Canal d'action */
  action_source: "website";
}

// ============================================================
// HASH SHA-256 (requis par Meta pour les PII)
// ============================================================
async function hashSHA256(value: string): Promise<string> {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return "";

  // Utilise l'API Web Crypto (dispo dans les Edge/Node runtimes de Next.js)
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);

  // Node.js runtime fallback
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  // Fallback Node.js natif
  const { createHash } = await import("crypto");
  return createHash("sha256").update(normalized).digest("hex");
}

// ============================================================
// ENVOI D'ÉVÉNEMENT
// ============================================================

/**
 * Envoie un événement à la Meta Conversions API.
 * Ne bloque pas l'UX — les erreurs sont loguées mais pas remontées.
 */
export async function sendMetaEvent({
  eventName,
  eventId,
  sourceUrl,
  userData,
  customData,
  clientIp,
  clientUserAgent,
}: {
  eventName: string;
  eventId?: string;
  sourceUrl?: string;
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    fbc?: string;
    fbp?: string;
  };
  customData?: CustomData;
  clientIp?: string;
  clientUserAgent?: string;
}): Promise<boolean> {
  // Vérification de la config
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("⚠️ Meta CAPI: PIXEL_ID ou ACCESS_TOKEN manquant");
    return false;
  }

  try {
    // Hash des données utilisateur (PII)
    const hashedUserData: UserData = {};

    if (userData?.email) {
      hashedUserData.em = await hashSHA256(userData.email);
    }
    if (userData?.phone) {
      // Normalise le téléphone : garde uniquement les chiffres avec indicatif
      const cleanPhone = userData.phone.replace(/[^\d+]/g, "");
      hashedUserData.ph = await hashSHA256(cleanPhone);
    }
    if (userData?.firstName) {
      hashedUserData.fn = await hashSHA256(userData.firstName);
    }
    if (userData?.lastName) {
      hashedUserData.ln = await hashSHA256(userData.lastName);
    }
    if (clientIp) {
      hashedUserData.client_ip_address = clientIp;
    }
    if (clientUserAgent) {
      hashedUserData.client_user_agent = clientUserAgent;
    }
    if (userData?.fbc) {
      hashedUserData.fbc = userData.fbc;
    }
    if (userData?.fbp) {
      hashedUserData.fbp = userData.fbp;
    }

    // Construction de l'événement
    const event: MetaEvent = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      user_data: hashedUserData,
    };

    if (eventId) event.event_id = eventId;
    if (sourceUrl) event.event_source_url = sourceUrl;
    if (customData) event.custom_data = customData;

    // Appel API Meta
    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [event],
        // test_event_code: "TEST45122",
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("❌ Meta CAPI error:", response.status, errorBody);
      return false;
    }

    const result = await response.json();
    console.log(
      "✅ Meta CAPI:",
      eventName,
      "→",
      result.events_received,
      "event(s) received"
    );
    return true;
  } catch (error) {
    console.error("❌ Meta CAPI exception:", error);
    return false;
  }
}
