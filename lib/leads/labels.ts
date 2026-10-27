// Libellés français des valeurs du formulaire, pour HubSpot et les emails
// internes : l'équipe lit toujours les demandes en français.
import fr from "@/content/entreprises/fr";

export type LeadLabels = (typeof fr)["form"]["options"];

export const LEAD_LABELS_FR: LeadLabels = fr.form.options;
