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
    Fahrstunde45Min: ["Fahrstunde zu je 45 Minuten", "string", x => x],
    Ueberlandfahrt45Min: ["Überlandfahrt zu je 45 Minuten", "string", x => x],
    Nachtfahrt45Min: ["Nachtfahrt zu je 45 Minuten", "string", x => x],
    PraktischeUnterweisung45Min: ["Praktische Unterweisung zu je 45 Minuten", "string", x => x],
    VorstellungTheoriepruefung: ["Vorstellungsentgelt zur Theorieprüfung", "string", x => x],
    VorstellungPraktischePruefung: ["Vorstellungsentgelt zur praktischen Prüfung (komplett)", "string", x => x],
    VorstellungTeilPraktisch: ["Vorstellungsentgelt zur Teilpr. (nur prakt. Fahren/Gf)", "string", x => x],
    VorstellungTeilAbfahrtkontrolle: ["Vorstellungsentgelt zur Teilpr. (nur Abfahrtkontr./Handf.)", "string", x => x],
    VorstellungTeilVerbindenTrennen: ["Vorstellungsentgelt zur Teilpr. (nur Verb. und Trennen)", "string", x => x],
    Lernmittel: ["Lernmittel", "string", x => x],
    Mofa: ["Mofa-Ausbildungskurs", "string", x => x],
}
export const StudentTranslations: EntryDataMap<keyof typeof StudentKeys> = {
    DateOfRegistration: ["Registrierungsdatum", "date", x => formatStringifiedDate(x), true],
    LastName: ["Nachname", "string", x => x],
    FirstName: ["Vorname", "string", x => x],
    Birthname: ["Geburtsname", "string", x => x],
    Address: ["Adresse", "string", x => x],
    DateOfBirth: ["Geburtsdatum", "date", x => x],
    PlaceOfBirth: ["Geburtsort", "string", x => x],
    Phone: ["Telefon", "phone", x => x],
    Email: ["E-Mail", "email", x => x],
    Citizenship: ["Staatsangehörigkeit", "string", x => x],
    Employer: ["Arbeitgeber", "string", x => x],
    ListNumber: ["Listennummer", "string", x => x],
    LicenseNumber: ["Führerscheinnummer", "string", x => x],
    EndProbation: ["Ende der Bewährungszeit", "date", x => x],
    Prices: ["Preise", "string", x => x],
    ClassesRequested: ["Beantragte Klassen", "string", x => x],
    ClassesOwned: ["Vorbesitz der Klasse(n)", "string", x => x],
    PartnerSchool: ["Partnerschule", "string", x => x],
    PrivacyAccepted: ["Datenschutz Akzeptiert", "checkbox", x => x],
    SignatureAccepted: ["Unterschrift Akzeptiert", "checkbox", x => x],
}
