import {SelectTypes, TranslationDataMap} from "../Core/types";
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

export const SchoolTranslations: TranslationDataMap<keyof typeof SchoolKeys> = {
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
}
export const PricingChartTranslations: TranslationDataMap<keyof typeof PricingChartKeys> = {
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
}
export const StudentTranslations: TranslationDataMap<keyof typeof StudentKeys> = {
    DateOfRegistration: {
	translation: "Registrierungsdatum", 
	inputType: "date", 
	converter: x => formatStringifiedDate(x),
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
	converter: x => formatStringifiedDate(x),
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
	converter: x => formatStringifiedDate(x),
    },
    Prices: {
	translation: "Preistabelle",
	converter: x => x,
	selectType: SelectTypes.PricingCharts,
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
}
