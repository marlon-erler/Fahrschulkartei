/*
 * General
 */
export enum SchoolKeys {
    "name",
    "street",
    "building-number",
    "zip-code",
    "city",
}

export enum PricingChartKeys {
    "fahrstunde-45min",
    "ueberlandfahrt-45min",
    "nachtfahrt-45min",
    "praktische-unterweisung-45min",
    "vorstellung-theoriepruefung",
    "vorstellung-praktische-pruefung",
    "vorstellung-teil-praktisch",
    "vorstellung-teil-abfahrtkontrolle",
    "vorstellung-teil-verbinden-trennen",
    "lernmittel",
    "mofa",
}

/*
 * Students
 */
export enum StudentKeys {
    "last-name",
    "first-name",
    "index",
    "birthname",
    "address",
    "date-of-birth",
    "place-of-birth",
    "phone",
    "e-mail",
    "citizenship",
    "employer",
    "list-number",
    "license-number",
    "end-probation",
    "prices",
    "classes-requested",
    "classes-owned",
    "partner-school",
    "privacy-accepted",
    "signature-accepted 0, 1 (yes, sign everytime), or 2 (reuse signature)",
    "date-of-registration",
}

export enum StudentLegalRequirementKeys {
    "student",
    "description",
    "issuer",
    "date",
}

/*
 * Classes
 */
export enum TheoryClassKeys {
    "date",
    "start-time",
    "duration",
    "type",
    "unit",
    "class",
}

export enum TheoryClassAttendanceKeys {
    "student",
    "class",
    "signature",
}

export enum PracticalClassKeys {
    "date",
    "start-time",
    "duration-main",
    "duration-other",
    "instructor",
    "vehicle",
    "class-type",
    "student",
    "signature",
}
