import {EntryDataMap} from "../Core/types";
import {formatStringifiedDate} from "../Core/utility";
import {PricingChartKeys, SchoolKeys, StudentKeys} from "../Model/keys";

export enum Generic {
    SchoolData = "Schuldaten",    
    PricingCharts = "Preistabellen",
    Students = "Schüler",
    TheoryClasses = "Theoriestunden",
    PracticalClasses = "Fahrstunden",

    Save = "Speichern",
    Delete = "Löschen",
    CreateNew = "Erstellen",

    RegisterStudent = "Registrieren",
    StudentNameUnknown = "(Name unbekannt)",
}

export const SchoolTranslations: EntryDataMap<keyof typeof SchoolKeys> = {
    Name: ["Name der Schule", "string", x => x],
    Street: ["Straße", "string", x => x],
    BuildingNumber: ["Hausnummer", "string", x => x],
    ZipCode: ["Postleitzahl", "string", x => x],
    City: ["Stadt", "string", x => x],
}
export const PricingChartTranslations: EntryDataMap<keyof typeof PricingChartKeys> = {
    Fahrstunde45Min: ["Fahrstunde zu je 45 Minuten", "text", x => x],
    Ueberlandfahrt45Min: ["Überlandfahrt zu je 45 Minuten", "text", x => x],
    Nachtfahrt45Min: ["Nachtfahrt zu je 45 Minuten", "text", x => x],
    PraktischeUnterweisung45Min: ["Praktische Unterweisung zu je 45 Minuten", "text", x => x],
    VorstellungTheoriepruefung: ["Vorstellungsentgelt zur Theorieprüfung", "text", x => x],
    VorstellungPraktischePruefung: ["Vorstellungsentgelt zur praktischen Prüfung (komplett)", "text", x => x],
    VorstellungTeilPraktisch: ["Vorstellungsentgelt zur Teilpr. (nur prakt. Fahren/Gf)", "text", x => x],
    VorstellungTeilAbfahrtkontrolle: ["Vorstellungsentgelt zur Teilpr. (nur Abfahrtkontr./Handf.)", "text", x => x],
    VorstellungTeilVerbindenTrennen: ["Vorstellungsentgelt zur Teilpr. (nur Verb. und Trennen)", "text", x => x],
    Lernmittel: ["Lernmittel", "text", x => x],
    Mofa: ["Mofa-Ausbildungskurs", "text", x => x],
}
export const StudentTranslations: EntryDataMap<keyof typeof StudentKeys> = {
    DateOfRegistration: ["Registrierungsdatum", "date", x => formatStringifiedDate(x), true],
    LastName: ["Nachname", "text", x => x],
    FirstName: ["Vorname", "text", x => x],
    Birthname: ["Geburtsname", "text", x => x],
    Address: ["Adresse", "text", x => x],
    DateOfBirth: ["Geburtsdatum", "date", x => x],
    PlaceOfBirth: ["Geburtsort", "text", x => x],
    Phone: ["Telefon", "phone", x => x],
    Email: ["E-Mail", "email", x => x],
    Citizenship: ["Staatsangehörigkeit", "text", x => x],
    Employer: ["Arbeitgeber", "text", x => x],
    ListNumber: ["Listennummer", "text", x => x],
    LicenseNumber: ["Führerscheinnummer", "text", x => x],
    EndProbation: ["Ende der Bewährungszeit", "date", x => x],
    Prices: ["Preise", "text", x => x],
    ClassesRequested: ["Beantragte Klassen", "text", x => x],
    ClassesOwned: ["Vorbesitz der Klasse(n)", "text", x => x],
    PartnerSchool: ["Partnerschule", "text", x => x],
}
