"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTranslations = exports.PricingChartTranslations = exports.SchoolTranslations = exports.Generic = void 0;
var Generic;
(function (Generic) {
    Generic["SchoolData"] = "Schuldaten";
    Generic["PricingCharts"] = "Preistabellen";
    Generic["Students"] = "Sch\u00FCler";
    Generic["TheoryClasses"] = "Theoriestunden";
    Generic["PracticalClasses"] = "Fahrstunden";
    Generic["Save"] = "Speichern";
    Generic["Delete"] = "L\u00F6schen";
    Generic["CreateNew"] = "Erstellen";
    Generic["RegisterStudent"] = "Registrieren";
    Generic["StudentNameUnknown"] = "Name Unbekannt";
})(Generic || (exports.Generic = Generic = {}));
exports.SchoolTranslations = {
    Name: "Name der Schule",
    Street: "Straße",
    BuildingNumber: "Hausnummer",
    ZipCode: "Postleitzahl",
    City: "Stadt",
};
exports.PricingChartTranslations = {
    Fahrstunde45Min: "Fahrstunde zu je 45 Minuten",
    Ueberlandfahrt45Min: "Überlandfahrt zu je 45 Minuten",
    Nachtfahrt45Min: "Nachtfahrt zu je 45 Minuten",
    PraktischeUnterweisung45Min: "Praktische Unterweisung zu je 45 Minuten",
    VorstellungTheoriepruefung: "Vorstellungsentgelt zur Theorieprüfung",
    VorstellungPraktischePruefung: "Vorstellungsentgelt zur praktischen Prüfung (komplett)",
    VorstellungTeilPraktisch: "Vorstellungsentgelt zur Teilpr. (nur prakt. Fahren/Gf)",
    VorstellungTeilAbfahrtkontrolle: "Vorstellungsentgelt zur Teilpr. (nur Abfahrtkontr./Handf.)",
    VorstellungTeilVerbindenTrennen: "Vorstellungsentgelt zur Teilpr. (nur Verb. und Trennen)",
    Lernmittel: "Lernmittel",
    Mofa: "Mofa-Ausbildungskurs",
};
exports.StudentTranslations = {
    LastName: "last-name",
    FirstName: "first-name",
    Birthname: "birthname",
    Address: "address",
    DateOfBirth: "date-of-birth",
    PlaceOfBirth: "place-of-birth",
    Phone: "phone",
    Email: "e-mail",
    Citizenship: "citizenship",
    Employer: "employer",
    ListNumber: "list-number",
    LicenseNumber: "license-number",
    EndProbation: "end-probation",
    Prices: "prices",
    ClassesRequested: "classes-requested",
    ClassesOwned: "classes-owned",
    PartnerSchool: "partner-school",
    PrivacyAccepted: "privacy-accepted",
    SignatureAccepted: "signature-accepted", // 0, 1 (yes, sign every time), or 2 (reuse signature)
    DateOfRegistration: "date-of-registration",
};
