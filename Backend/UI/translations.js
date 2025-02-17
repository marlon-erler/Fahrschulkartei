"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTranslations = exports.PricingChartTranslations = exports.SchoolTranslations = exports.Generic = void 0;
const types_1 = require("../Core/types");
const utility_1 = require("../Core/utility");
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
    Generic["StudentNameUnknown"] = "(Name unbekannt)";
    Generic["ShowStudentPrices"] = "Preistabelle";
})(Generic || (exports.Generic = Generic = {}));
exports.SchoolTranslations = {
    Name: {
        translation: "Name der Schule",
        inputType: "string",
        converter: x => x,
    },
    Street: {
        translation: "Straße",
        inputType: "string",
        converter: x => x,
    },
    BuildingNumber: {
        translation: "Hausnummer",
        inputType: "string",
        converter: x => x,
    },
    ZipCode: {
        translation: "Postleitzahl",
        inputType: "string",
        converter: x => x,
    },
    City: {
        translation: "Stadt",
        inputType: "string",
        converter: x => x,
    },
};
exports.PricingChartTranslations = {
    Fahrstunde45Min: {
        translation: "Fahrstunde zu je 45 Minuten",
        inputType: "text",
        converter: x => x,
    },
    Ueberlandfahrt45Min: {
        translation: "Überlandfahrt zu je 45 Minuten",
        inputType: "text",
        converter: x => x,
    },
    Nachtfahrt45Min: {
        translation: "Nachtfahrt zu je 45 Minuten",
        inputType: "text",
        converter: x => x,
    },
    PraktischeUnterweisung45Min: {
        translation: "Praktische Unterweisung zu je 45 Minuten",
        inputType: "text",
        converter: x => x,
    },
    VorstellungTheoriepruefung: {
        translation: "Vorstellungsentgelt zur Theorieprüfung",
        inputType: "text",
        converter: x => x,
    },
    VorstellungPraktischePruefung: {
        translation: "Vorstellungsentgelt zur praktischen Prüfung (komplett)",
        inputType: "text",
        converter: x => x,
    },
    VorstellungTeilPraktisch: {
        translation: "Vorstellungsentgelt zur Teilpr. (nur prakt. Fahren/Gf)",
        inputType: "text",
        converter: x => x,
    },
    VorstellungTeilAbfahrtkontrolle: {
        translation: "Vorstellungsentgelt zur Teilpr. (nur Abfahrtkontr./Handf.)",
        inputType: "text",
        converter: x => x,
    },
    VorstellungTeilVerbindenTrennen: {
        translation: "Vorstellungsentgelt zur Teilpr. (nur Verb. und Trennen)",
        inputType: "text",
        converter: x => x,
    },
    Lernmittel: {
        translation: "Lernmittel",
        inputType: "text",
        converter: x => x,
    },
    Mofa: {
        translation: "Mofa-Ausbildungskurs",
        inputType: "text",
        converter: x => x,
    },
};
exports.StudentTranslations = {
    DateOfRegistration: {
        translation: "Registrierungsdatum",
        inputType: "date",
        converter: x => (0, utility_1.formatStringifiedDate)(x),
        isDisabled: true,
    },
    LastName: {
        translation: "Nachname",
        inputType: "text",
        converter: x => x,
    },
    FirstName: {
        translation: "Vorname",
        inputType: "text",
        converter: x => x,
    },
    Birthname: {
        translation: "Geburtsname",
        inputType: "text",
        converter: x => x,
    },
    Address: {
        translation: "Adresse",
        inputType: "text",
        converter: x => x,
    },
    DateOfBirth: {
        translation: "Geburtsdatum",
        inputType: "date",
        converter: x => (0, utility_1.formatStringifiedDate)(x),
    },
    PlaceOfBirth: {
        translation: "Geburtsort",
        inputType: "text",
        converter: x => x,
    },
    Phone: {
        translation: "Telefon",
        inputType: "phone",
        converter: x => x,
    },
    Email: {
        translation: "E-Mail",
        inputType: "email",
        converter: x => x,
    },
    Citizenship: {
        translation: "Staatsangehörigkeit",
        inputType: "text",
        converter: x => x,
    },
    Employer: {
        translation: "Arbeitgeber",
        inputType: "text",
        converter: x => x,
    },
    ListNumber: {
        translation: "Listennummer",
        inputType: "text",
        converter: x => x,
    },
    LicenseNumber: {
        translation: "Führerscheinnummer",
        inputType: "text",
        converter: x => x,
    },
    EndProbation: {
        translation: "Ende der Bewährungszeit",
        inputType: "date",
        converter: x => (0, utility_1.formatStringifiedDate)(x),
    },
    Prices: {
        translation: "Preistabelle",
        converter: x => x,
        selectType: types_1.SelectTypes.PricingCharts,
    },
    ClassesRequested: {
        translation: "Beantragte Klassen",
        inputType: "text",
        converter: x => x,
    },
    ClassesOwned: {
        translation: "Vorbesitz der Klasse(n)",
        inputType: "text",
        converter: x => x,
    },
    PartnerSchool: {
        translation: "Partnerschule",
        inputType: "text",
        converter: x => x,
    },
};
