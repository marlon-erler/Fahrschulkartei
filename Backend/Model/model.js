"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const pfsdb_1 = require("pfsdb");
const keys_1 = require("./keys");
const errors_1 = require("../errors");
const utility_1 = require("../Core/utility");
const BASE_PATH = path_1.default.join(os_1.default.homedir(), "Fahrschulkartei");
const SCHOOL_ENTRY_ID = "main";
class Model {
    constructor() {
        this.database = new pfsdb_1.Database(BASE_PATH);
        this.schoolDataTable = new pfsdb_1.Table("school-data", this.database);
        this.pricingTable = new pfsdb_1.Table("pricing", this.database);
        this.studentTable = new pfsdb_1.Table("students", this.database);
        this.studentLegalRequirementTable = new pfsdb_1.Table("legal-requirements", this.database);
        this.theoryClassTable = new pfsdb_1.Table("theory-classes", this.database);
        this.theoryClassAttendanceTable = new pfsdb_1.Table("theory-class-attendances", this.database);
        this.practicalClassTable = new pfsdb_1.Table("practical-clases", this.database);
    }
    /*
     * School Data
     */
    setSchoolData(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(key, value);
            return yield this.schoolDataTable.setFieldValuesForEntry(SCHOOL_ENTRY_ID, key, [value]);
        });
    }
    getSchoolData(key) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const values = yield this.schoolDataTable.getValuesForField(SCHOOL_ENTRY_ID, key);
            return (_a = values[0]) !== null && _a !== void 0 ? _a : undefined;
        });
    }
    /*
     * Pricing Chart
     */
    setPricingChartData(chartId, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pricingTable.setFieldValuesForEntry(chartId, key, [value]);
        });
    }
    getPricingChartData(chartId, key) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const values = yield this.pricingTable.getValuesForField(chartId, key);
            return (_a = values[0]) !== null && _a !== void 0 ? _a : undefined;
        });
    }
    getPricingCharts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pricingTable.getAllEntries();
        });
    }
    getPricingChart(chartId) {
        return __awaiter(this, void 0, void 0, function* () {
            const entries = yield this.pricingTable.getFieldsOfEntry(chartId);
            const entriesWithValues = [];
            for (const key of entries) {
                const values = yield this.pricingTable.getValuesForField(chartId, key);
                if (values.length == 0)
                    continue;
                entriesWithValues.push([key, values[0]]);
            }
            ;
            return entriesWithValues;
        });
    }
    /*
     * Students
     */
    setStudentData(studentId, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.studentTable.setFieldValuesForEntry(studentId, key, [value]);
        });
    }
    getStudentData(studentId, key) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const values = yield this.studentTable.getValuesForField(studentId, key);
            return (_a = values[0]) !== null && _a !== void 0 ? _a : undefined;
        });
    }
    getStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.studentTable.getAllEntries();
        });
    }
    /*
     * Legal Requirements
     */
    setStudentLegalRequirementData(requirementId, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.studentLegalRequirementTable.setFieldValuesForEntry(requirementId, key, [value]);
        });
    }
    getStudentLegalRequirementData(requirementId, key) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const values = yield this.studentLegalRequirementTable.getValuesForField(requirementId, key);
            return (_a = values[0]) !== null && _a !== void 0 ? _a : undefined;
        });
    }
    getLegalRequirementsForStudent(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.studentLegalRequirementTable.getEntriesByFieldValue(keys_1.StudentLegalRequirementKeys.Student, [studentId]);
        });
    }
    /*
     * Theory Classes
     */
    setTheoryClassData(classId, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.theoryClassTable.setFieldValuesForEntry(classId, key, [value]);
        });
    }
    getTheoryClassData(classId, key) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const values = yield this.theoryClassTable.getValuesForField(classId, key);
            return (_a = values[0]) !== null && _a !== void 0 ? _a : undefined;
        });
    }
    addStudentToTheoryClass(classId, studentId, signature) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendanceId = (0, utility_1.uuid)();
            yield this.theoryClassAttendanceTable.setFieldValuesForEntry(attendanceId, "student", [studentId]);
            yield this.theoryClassAttendanceTable.setFieldValuesForEntry(attendanceId, "class", [classId]);
            yield this.theoryClassAttendanceTable.setFieldValuesForEntry(attendanceId, "signature", [signature]);
        });
    }
    getAttendancesForTheoryClass(classId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.theoryClassAttendanceTable.getEntriesByFieldValue(keys_1.TheoryClassAttendanceKeys.Class, [classId]);
        });
    }
    getTheoryClassAttendancesForStudent(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.theoryClassAttendanceTable.getEntriesByFieldValue(keys_1.TheoryClassAttendanceKeys.Student, [studentId]);
        });
    }
    getTheoryClassesForDay(date) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.theoryClassTable.getEntriesByFieldValue(keys_1.TheoryClassKeys.Date, [date]);
        });
    }
    /*
     * Practical Classes
     */
    setPracticalClassData(classId, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.practicalClassTable.setFieldValuesForEntry(classId, key, [value]);
        });
    }
    getPracticalClassData(classId, key) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const values = yield this.practicalClassTable.getValuesForField(classId, key);
            return (_a = values[0]) !== null && _a !== void 0 ? _a : undefined;
        });
    }
    getPracticalClassesForStudent(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.practicalClassTable.getEntriesByFieldValue(keys_1.PracticalClassKeys.Student, [studentId]);
        });
    }
    getPracticalClassesForDay(date) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.practicalClassTable.getEntriesByFieldValue(keys_1.PracticalClassKeys.Date, [date]);
        });
    }
    /*
     * Deletion
     */
    deleteStudentOrFail(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const theoryClassAttendances = yield this.getTheoryClassAttendancesForStudent(studentId);
            if (theoryClassAttendances.length != 0) {
                throw errors_1.DeletionErrors.StudentHasTheoryClasses;
            }
            const practicalClasses = yield this.getPracticalClassesForStudent(studentId);
            if (practicalClasses.length != 0) {
                throw errors_1.DeletionErrors.StudentHasPracticalClasses;
            }
            const legalRequirements = yield this.getLegalRequirementsForStudent(studentId);
            for (const requirementId of legalRequirements) {
                this.deleteStudentLegalRequirement(requirementId);
            }
            return yield this.studentTable.removeEntry(studentId);
        });
    }
    deleteStudentLegalRequirement(requirementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.studentLegalRequirementTable.removeEntry(requirementId);
        });
    }
    deleteTheoryClassOrFail(classId) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendances = yield this.getAttendancesForTheoryClass(classId);
            if (attendances.length != 0) {
                throw errors_1.DeletionErrors.TheoryClassHasAttendees;
            }
            return yield this.theoryClassTable.removeEntry(classId);
        });
    }
    deleteTheoryClassAttendance(attendanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.theoryClassAttendanceTable.removeEntry(attendanceId);
        });
    }
    deletePracticalClass(classId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.practicalClassTable.removeEntry(classId);
        });
    }
}
exports.default = Model;
