"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticalClassKeys = exports.TheoryClassAttendanceKeys = exports.TheoryClassKeys = exports.StudentLegalRequirementKeys = exports.StudentKeys = exports.PricingChartKeys = exports.SchoolKeys = exports.Tables = void 0;
/*
 * Tables
 */
var Tables;
(function (Tables) {
    Tables["SchoolData"] = "school-data";
    Tables["Pricing"] = "pricing";
    Tables["Students"] = "students";
    Tables["StudentLegalRequirements"] = "student-legal-requirements";
    Tables["TheoryClasses"] = "theory-classes";
    Tables["TheoryClassAttendances"] = "theory-class-attendances";
    Tables["PracticalClasses"] = "practical-classes";
})(Tables || (exports.Tables = Tables = {}));
/*
 * General
 */
var SchoolKeys;
(function (SchoolKeys) {
    SchoolKeys["Name"] = "name";
    SchoolKeys["Street"] = "street";
    SchoolKeys["BuildingNumber"] = "building-number";
    SchoolKeys["ZipCode"] = "zip-code";
    SchoolKeys["City"] = "city";
})(SchoolKeys || (exports.SchoolKeys = SchoolKeys = {}));
var PricingChartKeys;
(function (PricingChartKeys) {
    PricingChartKeys["Fahrstunde45Min"] = "fahrstunde-45min";
    PricingChartKeys["Ueberlandfahrt45Min"] = "ueberlandfahrt-45min";
    PricingChartKeys["Nachtfahrt45Min"] = "nachtfahrt-45min";
    PricingChartKeys["PraktischeUnterweisung45Min"] = "praktische-unterweisung-45min";
    PricingChartKeys["VorstellungTheoriepruefung"] = "vorstellung-theoriepruefung";
    PricingChartKeys["VorstellungPraktischePruefung"] = "vorstellung-praktische-pruefung";
    PricingChartKeys["VorstellungTeilPraktisch"] = "vorstellung-teil-praktisch";
    PricingChartKeys["VorstellungTeilAbfahrtkontrolle"] = "vorstellung-teil-abfahrtkontrolle";
    PricingChartKeys["VorstellungTeilVerbindenTrennen"] = "vorstellung-teil-verbinden-trennen";
    PricingChartKeys["Lernmittel"] = "lernmittel";
    PricingChartKeys["Mofa"] = "mofa";
})(PricingChartKeys || (exports.PricingChartKeys = PricingChartKeys = {}));
/*
 * Students
 */
var StudentKeys;
(function (StudentKeys) {
    StudentKeys["LastName"] = "last-name";
    StudentKeys["FirstName"] = "first-name";
    StudentKeys["Index"] = "index";
    StudentKeys["Birthname"] = "birthname";
    StudentKeys["Address"] = "address";
    StudentKeys["DateOfBirth"] = "date-of-birth";
    StudentKeys["PlaceOfBirth"] = "place-of-birth";
    StudentKeys["Phone"] = "phone";
    StudentKeys["Email"] = "e-mail";
    StudentKeys["Citizenship"] = "citizenship";
    StudentKeys["Employer"] = "employer";
    StudentKeys["ListNumber"] = "list-number";
    StudentKeys["LicenseNumber"] = "license-number";
    StudentKeys["EndProbation"] = "end-probation";
    StudentKeys["Prices"] = "prices";
    StudentKeys["ClassesRequested"] = "classes-requested";
    StudentKeys["ClassesOwned"] = "classes-owned";
    StudentKeys["PartnerSchool"] = "partner-school";
    StudentKeys["PrivacyAccepted"] = "privacy-accepted";
    StudentKeys["SignatureAccepted"] = "signature-accepted";
    StudentKeys["DateOfRegistration"] = "date-of-registration";
})(StudentKeys || (exports.StudentKeys = StudentKeys = {}));
var StudentLegalRequirementKeys;
(function (StudentLegalRequirementKeys) {
    StudentLegalRequirementKeys["Student"] = "student";
    StudentLegalRequirementKeys["Description"] = "description";
    StudentLegalRequirementKeys["Issuer"] = "issuer";
    StudentLegalRequirementKeys["Date"] = "date";
})(StudentLegalRequirementKeys || (exports.StudentLegalRequirementKeys = StudentLegalRequirementKeys = {}));
/*
 * Classes
 */
var TheoryClassKeys;
(function (TheoryClassKeys) {
    TheoryClassKeys["Date"] = "date";
    TheoryClassKeys["StartTime"] = "start-time";
    TheoryClassKeys["Duration"] = "duration";
    TheoryClassKeys["Type"] = "type";
    TheoryClassKeys["Unit"] = "unit";
    TheoryClassKeys["Class"] = "class";
})(TheoryClassKeys || (exports.TheoryClassKeys = TheoryClassKeys = {}));
var TheoryClassAttendanceKeys;
(function (TheoryClassAttendanceKeys) {
    TheoryClassAttendanceKeys["Student"] = "student";
    TheoryClassAttendanceKeys["Class"] = "class";
    TheoryClassAttendanceKeys["Signature"] = "signature";
})(TheoryClassAttendanceKeys || (exports.TheoryClassAttendanceKeys = TheoryClassAttendanceKeys = {}));
var PracticalClassKeys;
(function (PracticalClassKeys) {
    PracticalClassKeys["Date"] = "date";
    PracticalClassKeys["StartTime"] = "start-time";
    PracticalClassKeys["DurationMain"] = "duration-main";
    PracticalClassKeys["DurationOther"] = "duration-other";
    PracticalClassKeys["Instructor"] = "instructor";
    PracticalClassKeys["Vehicle"] = "vehicle";
    PracticalClassKeys["ClassType"] = "class-type";
    PracticalClassKeys["Student"] = "student";
    PracticalClassKeys["Signature"] = "signature";
})(PracticalClassKeys || (exports.PracticalClassKeys = PracticalClassKeys = {}));
