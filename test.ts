import * as Utility from "./Backend/Core/utility";

console.log("UUID", Utility.uuid());

console.log("Date", Utility.formatDate(new Date()));
console.log("Time", Utility.formatTime(new Date()));

const pricingChartId = Utility.generatePricingChartId("a", "b");
if (pricingChartId != "ab") {
    throw `generated pricing chart id ${pricingChartId}`
}
console.log("pricing chart id ok");

const studentId = Utility.generateStudentId("a", "b", "c");
if (studentId != "bac") {
    throw `generated student id ${studentId}`
}
console.log("student id ok");

const theoryClassId = Utility.generateTheoryClassId("a", "b");
if (theoryClassId != "ab") {
    throw `generated theory class id ${theoryClassId}`
}
console.log("theory class id ok");

const theoryAttendanceId = Utility.generateTheoryAttendanceId("a", "b");
if (theoryAttendanceId != "ab") {
    throw `generated theory attendance id ${theoryAttendanceId}`
}
console.log("theory attendance id ok");

const practicalClassId = Utility.generatePracticalClassId("a", "b", "c");
if (practicalClassId != "abc") {
    throw `generated practical class id ${practicalClassId}`
}
console.log("practical class id ok");
