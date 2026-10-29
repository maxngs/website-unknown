/** @OnlyCurrentDoc */
// ============================================================
// Google Apps Script : reçoit les demandes de démo du site (lib/leads/sheets.ts)
// et les ajoute à la feuille de calcul à laquelle ce script est rattaché.
//
// Installation :
// 1. Dans la Google Sheet : Extensions → Apps Script, coller ce fichier.
// 2. Paramètres du projet (roue dentée) → Propriétés du script :
//    ajouter SECRET = la même valeur que DEMO_LEADS_SHEET_SECRET sur Vercel.
// 3. Déployer → Nouveau déploiement → Application Web,
//    « Exécuter en tant que : moi », « Qui a accès : tout le monde ».
// 4. Copier l'URL (…/exec) dans DEMO_LEADS_SHEET_URL sur Vercel.
// Après une modification du script : Déployer → Gérer les déploiements →
// modifier → Nouvelle version (l'URL reste la même).
// ============================================================

var SHEET_NAME = "Demandes de démo";
// Colonnes remplies par l'équipe, ajoutées à droite à la création.
var TEAM_COLUMNS = ["Statut", "Notes"];
var STATUTS = ["Nouveau", "Démo planifiée", "Démo faite", "Proposition", "Gagné", "Perdu"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents);
    var secret = PropertiesService.getScriptProperties().getProperty("SECRET");
    if (secret && data.secret !== secret) return json({ ok: false, error: "unauthorized" });

    var row = data.row || {};
    var sheet = getSheet(Object.keys(row));
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // Une valeur sans colonne (nouveau champ du site) : on ajoute la colonne.
    Object.keys(row).forEach(function (key) {
      if (headers.indexOf(key) === -1) {
        headers.push(key);
        sheet.getRange(1, headers.length).setValue(key).setFontWeight("bold");
      }
    });

    var values = headers.map(function (h) {
      if (h === "Date") return new Date();
      if (h === "Statut") return "Nouveau";
      // Préfixe « ' » : une valeur comme « +33… » ou « =… » reste du texte.
      var v = row[h];
      return v === undefined || v === "" ? "" : "'" + String(v);
    });
    sheet.appendRow(values);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet(keys) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.getSheets()[0];
    sheet.setName(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    var headers = ["Date"].concat(keys, TEAM_COLUMNS);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.getRange(2, 1, sheet.getMaxRows() - 1, 1).setNumberFormat("dd/mm/yyyy hh:mm");
    var statut = headers.indexOf("Statut") + 1;
    sheet
      .getRange(2, statut, sheet.getMaxRows() - 1, 1)
      .setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STATUTS, true).build());
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
