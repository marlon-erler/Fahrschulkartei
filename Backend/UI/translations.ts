import {PricingChartKeys, SchoolKeys} from "../Model/keys";

export enum Translations {
    SchoolData = "Schuldaten",
    PricingCharts = "Preistabellen",
    Students = "Schüler",
    TheoryClasses = "Theoriestunden",
    PracticalClasses = "Fahrstunden",
}

export const SchoolTranslations: Record<keyof typeof SchoolKeys, string> = {
    Name: "Name der Schule",
    Street: "Straße",
    BuildingNumber: "Hausnummer",
    ZipCode: "Postleitzahl",
    City: "Stadt",
}
export const PricingChartTranslations: Record<keyof typeof PricingChartKeys, string> = {
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
}
