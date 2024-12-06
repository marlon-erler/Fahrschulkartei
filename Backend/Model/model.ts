import Os from "os";
import Path from "path";

import {Database, Table} from "pfsdb";
import {PracticalClassKeys, PricingChartKeys, SchoolKeys, StudentKeys, StudentLegalRequirementKeys, TheoryClassAttendanceKeys, TheoryClassKeys} from "./keys";
import {generateTheoryAttendanceId} from "../Core/utility";
import {DeletionErrors} from "../errors";

const BASE_PATH = Path.join(Os.homedir(), "Fahrschulkartei");
const SCHOOL_ENTRY_ID = "main";

export default class Model {
    database: Database;

    schoolDataTable: Table<SchoolKeys>;
    pricingTable: Table<PricingChartKeys>;
    studentTable: Table<StudentKeys>;
    studentLegalRequirementTable: Table<StudentLegalRequirementKeys>;
    theoryClassTable: Table<TheoryClassKeys>;
    theoryClassAttendanceTable: Table<TheoryClassAttendanceKeys>;
    practicalClassTable: Table<PracticalClassKeys>;

    constructor() {
	this.database = new Database(BASE_PATH);

	this.schoolDataTable = new Table("school-data", this.database);
	this.pricingTable = new Table("pricing", this.database);
	this.studentTable = new Table("students", this.database);
	this.studentLegalRequirementTable = new Table("legal-requirements", this.database);
	this.theoryClassTable = new Table("theory-classes", this.database);
	this.theoryClassAttendanceTable = new Table("theory-class-attendances", this.database);
	this.practicalClassTable = new Table("practical-clases", this.database);
    }

    /*
     * School Data
     */
    async setSchoolData(key: SchoolKeys, value: string): Promise<void> {
	return await this.schoolDataTable.setFieldValuesForEntry(SCHOOL_ENTRY_ID, key, [value]);
    }

    async getSchoolData(key: SchoolKeys): Promise<string|undefined> {
	const values: string[] = await this.schoolDataTable.getValuesForField(SCHOOL_ENTRY_ID, key);
	return values[0] ?? undefined;
    }

    /*
     * Pricing Chart
     */
    async setPricingChartData(chartId: string, key: PricingChartKeys, value: string): Promise<void> {
	return await this.pricingTable.setFieldValuesForEntry(chartId, key, [value]);
    }

    async getPricingChartData(chartId: string, key: PricingChartKeys): Promise<string|undefined> {
	const values: string[] = await this.pricingTable.getValuesForField(chartId, key);
	return values[0] ?? undefined;
    }

    async getPricingCharts(): Promise<string[]> {
	return await this.pricingTable.getAllEntries();
    }

    async getPricingChart(chartId: string): Promise<string[][]> {
	const entries: string[] = await this.pricingTable.getFieldsOfEntry(chartId);
	const entriesWithValues: string[][] = [];
	for (const key of entries) {
	    const values: string[] = await this.pricingTable.getValuesForField(chartId, key as any);
	    if (values.length == 0) continue;
	    entriesWithValues.push([key, values[0]]);
	};
	return entriesWithValues;
    }

    /*
     * Students
     */
    async setStudentData(studentId: string, key: StudentKeys, value: string): Promise<void> {
	return await this.studentTable.setFieldValuesForEntry(studentId, key, [value]);
    }

    async getStudentData(studentId: string, key: StudentKeys): Promise<string|undefined> {
	const values: string[] = await this.studentTable.getValuesForField(studentId, key);
	return values[0] ?? undefined;
    }

    async getStudentsForIndex(index: string): Promise<string[]> {
	return await this.studentTable.getEntriesByFieldValue(StudentKeys.Index, [index]);
    }

    /*
     * Legal Requirements
     */
    async setStudentLegalRequirementData(requirementId: string, key: StudentLegalRequirementKeys, value: string): Promise<void> {
	return await this.studentLegalRequirementTable.setFieldValuesForEntry(requirementId, key, [value]);
    }

    async getStudentLegalRequirementData(requirementId: string, key: StudentLegalRequirementKeys): Promise<string|undefined> {
	const values: string[] = await this.studentLegalRequirementTable.getValuesForField(requirementId, key);
	return values[0] ?? undefined;
    }

    async getLegalRequirementsForStudent(studentId: string): Promise<string[]> {
	return await this.studentLegalRequirementTable.getEntriesByFieldValue(StudentLegalRequirementKeys.Student, [studentId]);
    }

    /*
     * Theory Classes
     */
    async setTheoryClassData(classId: string, key: TheoryClassKeys, value: string): Promise<void> {
	return await this.theoryClassTable.setFieldValuesForEntry(classId, key, [value]);
    }

    async getTheoryClassData(classId: string, key: TheoryClassKeys): Promise<string|undefined> {
	const values: string[] = await this.theoryClassTable.getValuesForField(classId, key);
	return values[0] ?? undefined;
    }

    async addStudentToTheoryClass(classId: string, studentId: string, signature: string): Promise<void> {
	const attendanceId: string = generateTheoryAttendanceId(classId, studentId);
	await this.theoryClassAttendanceTable.setFieldValuesForEntry(attendanceId, "student" as TheoryClassAttendanceKeys, [studentId]);
	await this.theoryClassAttendanceTable.setFieldValuesForEntry(attendanceId, "class" as TheoryClassAttendanceKeys, [classId]);
	await this.theoryClassAttendanceTable.setFieldValuesForEntry(attendanceId, "signature" as TheoryClassAttendanceKeys, [signature]);
    }

    async getAttendancesForTheoryClass(classId: string): Promise<string[]> {
	return await this.theoryClassAttendanceTable.getEntriesByFieldValue(TheoryClassAttendanceKeys.Class, [classId]);
    }

    async getTheoryClassAttendancesForStudent(studentId: string): Promise<string[]> {
	return await this.theoryClassAttendanceTable.getEntriesByFieldValue(TheoryClassAttendanceKeys.Student, [studentId]);
    }

    async getTheoryClassesForDay(date: string): Promise<string[]> {
	return await this.theoryClassTable.getEntriesByFieldValue(TheoryClassAttendanceKeys.Date, [date]);
    }

    /*
     * Practical Classes
     */
    async setPracticalClassData(classId: string, key: PracticalClassKeys, value: string): Promise<void> {
	return await this.practicalClassTable.setFieldValuesForEntry(classId, key, [value]);
    }

    async getPracticalClassData(classId: string, key: PracticalClassKeys): Promise<string|undefined> {
	const values: string[] = await this.practicalClassTable.getValuesForField(classId, key);
	return values[0] ?? undefined;
    }

    async getPracticalClassesForStudent(studentId: string): Promise<string[]> {
	return await this.practicalClassTable.getEntriesByFieldValue(PracticalClassKeys.Student, [studentId]);
    }

    async getPracticalClassesForDay(date: string): Promise<string[]> {
	return await this.practicalClassTable.getEntriesByFieldValue(PracticalClassKeys.Date, [date]);
    }

    /*
     * Deletion
     */
    async deleteStudentOrFail(studentId: string): Promise<void> {
	const theoryClassAttendances: string[] = await this.getTheoryClassAttendancesForStudent(studentId);
	if (theoryClassAttendances.length != 0) {
	    throw DeletionErrors.StudentHasTheoryClasses;
	}

	const practicalClasses: string[] = await this.getPracticalClassesForStudent(studentId);
	if (practicalClasses.length != 0) {
	    throw DeletionErrors.StudentHasPracticalClasses;
	}

	const legalRequirements: string[] = await this.getLegalRequirementsForStudent(studentId);
	for (const requirementId of legalRequirements) {
	    this.deleteStudentLegalRequirement(requirementId);
	}

	return await this.studentTable.removeEntry(studentId);
    }

    async deleteStudentLegalRequirement(requirementId: string): Promise<void> {
	return await this.studentLegalRequirementTable.removeEntry(requirementId);
    }

    async deleteTheoryClassOrFail(classId: string): Promise<void> {
	const attendances: string[] = await this.getAttendancesForTheoryClass(classId);
	if (attendances.length != 0) {
	    throw DeletionErrors.TheoryClassHasAttendees;
	}

	return await this.theoryClassTable.removeEntry(classId);
    }

    async deleteTheoryClassAttendance(attendanceId: string): Promise<void> {
	return await this.theoryClassAttendanceTable.removeEntry(attendanceId);
    }

    async deletePracticalClass(classId: string): Promise<void> {
	return await this.practicalClassTable.removeEntry(classId);
    }
}
