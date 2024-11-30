import Os from "os";
import Path from "path";

import {Database, Table} from "pfsdb";
import {SchoolKeys} from "./keys";

const BASE_PATH = Path.join(Os.homedir(), "Fahrschulkartei");
const SCHOOL_ENTRY_ID = "main";

export default class Model {
    database: Database;

    schoolDataTable: Table;
    pricingTable: Table;
    studentTable: Table;
    theoryClassTable: Table;
    theoryClassAttendanceTable: Table;
    practicalClassTable: Table;

    constructor() {
	this.database = new Database(BASE_PATH);

	this.schoolDataTable = new Table("school-data", this.database);
	this.pricingTable = new Table("pricing", this.database);
	this.studentTable = new Table("students", this.database);
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
}
