import Os from "os";
import Path from "path";

import {Database, Table} from "pfsdb";
import {PricingChartKeys, SchoolKeys, StudentKeys} from "./keys";

const BASE_PATH = Path.join(Os.homedir(), "Fahrschulkartei");
const SCHOOL_ENTRY_ID = "main";

export default class Model {
    database: Database;

    schoolDataTable: Table;
    pricingTable: Table;
    studentTable: Table;
    studentLegalRequirementTable: Table;
    theoryClassTable: Table;
    theoryClassAttendanceTable: Table;
    practicalClassTable: Table;

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
    async setSchoolData(key: keyof SchoolKeys, value: string): Promise<void> {
	return await this.schoolDataTable.setFieldValuesForEntry(SCHOOL_ENTRY_ID, key, [value]);
    }

    async getSchoolData(key: keyof SchoolKeys): Promise<string|undefined> {
	const values = await this.schoolDataTable.getValuesForField(SCHOOL_ENTRY_ID, key);
	return values[0] ?? undefined;
    }

    /*
     * Pricing Chart
     */
    async setPricingChartData(chartId: string, key: keyof PricingChartKeys, value: string): Promise<void> {
	return await this.pricingTable.setFieldValuesForEntry(chartId, key, [value]);
    }

    async getPricingChartData(chartId: string, key: keyof PricingChartKeys): Promise<string|undefined> {
	const values = await this.pricingTable.getValuesForField(chartId, key);
	return values[0] ?? undefined;
    }

    async getPricingCharts(): Promise<string[]> {
	return await this.pricingTable.getAllEntries();
    }

    async getPricingChart(chartId: string): Promise<string[][]> {
	const entries: string[] = await this.pricingTable.getFieldsOfEntry(chartId);
	const entriesWithValues: string[][] = [];
	for (const key of entries) {
	    const values = await this.pricingTable.getValuesForField(chartId, key);
	    if (values.length == 0) continue;
	    entriesWithValues.push([key, values[0]]);
	};
	return entriesWithValues;
    }

    /*
     * Students
     */
    async setStudentData(studentId: string, key: keyof StudentKeys, value: string): Promise<void> {
	return await this.studentTable.setFieldValuesForEntry(studentId, key, [value]);
    }

    async getStudentData(studentId: string, key: keyof StudentKeys): Promise<string|undefined> {
	const values = await this.studentTable.getValuesForField(studentId, key);
	return values[0] ?? undefined;
    }

    async getStudentsForIndex(index: string): Promise<string[]> {
	const key: keyof typeof StudentKeys = "index";
	return await this.studentTable.getEntriesByFieldValue(key, [index]);
    }
}
