/*
 * Tables
 */
export enum Tables {
    SchoolData = "school-data",
    Pricing = "pricing",
    Students = "students",
    StudentLegalRequirements = "student-legal-requirements",
    TheoryClasses = "theory-classes",
    TheoryClassAttendances = "theory-class-attendances",
    PracticalClasses = "practical-classes",
}

/*
 * General
 */
export enum SchoolKeys {
    Name = "name",
    Street = "street",
    BuildingNumber = "building-number",
    ZipCode = "zip-code",
    City = "city",
}

export enum PricingChartKeys {
    Fahrstunde45Min = "fahrstunde-45min",
    Ueberlandfahrt45Min = "ueberlandfahrt-45min",
    Nachtfahrt45Min = "nachtfahrt-45min",
    PraktischeUnterweisung45Min = "praktische-unterweisung-45min",
    VorstellungTheoriepruefung = "vorstellung-theoriepruefung",
    VorstellungPraktischePruefung = "vorstellung-praktische-pruefung",
    VorstellungTeilPraktisch = "vorstellung-teil-praktisch",
    VorstellungTeilAbfahrtkontrolle = "vorstellung-teil-abfahrtkontrolle",
    VorstellungTeilVerbindenTrennen = "vorstellung-teil-verbinden-trennen",
    Lernmittel = "lernmittel",
    Mofa = "mofa",
}

/*
 * Students
 */
export enum StudentKeys {
    LastName = "last-name",
    FirstName = "first-name",
    Birthname = "birthname",
    Address = "address",
    DateOfBirth = "date-of-birth",
    PlaceOfBirth = "place-of-birth",
    Phone = "phone",
    Email = "e-mail",
    Citizenship = "citizenship",
    Employer = "employer",
    ListNumber = "list-number",
    LicenseNumber = "license-number",
    EndProbation = "end-probation",
    Prices = "prices",
    ClassesRequested = "classes-requested",
    ClassesOwned = "classes-owned",
    PartnerSchool = "partner-school",
    DateOfRegistration = "date-of-registration",
}

export enum StudentLegalRequirementKeys {
    Student = "student",
    Description = "description",
    Issuer = "issuer",
    Date = "date",
}

/*
 * Classes
 */
export enum TheoryClassKeys {
    Date = "date",
    StartTime = "start-time",
    Duration = "duration",
    Type = "type",
    Unit = "unit",
    Class = "class",
}

export enum TheoryClassAttendanceKeys {
    Student = "student",
    Class = "class",
    Signature = "signature",
}

export enum PracticalClassKeys {
    Date = "date",
    StartTime = "start-time",
    DurationMain = "duration-main",
    DurationOther = "duration-other",
    Instructor = "instructor",
    Vehicle = "vehicle",
    ClassType = "class-type",
    Student = "student",
    Signature = "signature",
}
