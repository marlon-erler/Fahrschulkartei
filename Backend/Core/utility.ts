import * as UUID from "uuid";
import {Tables} from "../Model/keys";

/*
 * General
 */
export function uuid(): string {
    return UUID.v4();
}

/*
 * Format
 */
export function formatDate(date: Date): string {
    return date.getUTCFullYear().toString() + (date.getUTCMonth()+1).toString() + date.getUTCDate().toString();
}

export function formatTime(time: Date): string {
    return time.getUTCHours().toString() + time.getUTCMinutes().toString();
}

/*
 * IDs
 */
export function generatePricingChartId(date: string, time: string): string {
    return date + time;
}

export function generateStudentId(firstName: string, lastName: string, dateOfBirth: string): string {
    return lastName + firstName + dateOfBirth;
}

export function generateTheoryClassId(date: string, time: string): string {
    return date + time;
}

export function generateTheoryAttendanceId(classId: string, studentId: string): string {
    return classId + studentId;
}

export function generatePracticalClassId(date: string, time: string, studentId: string): string {
    return date + time + studentId;
}

/*
 * Messaging
 */
export enum ResponseCodes {
    Success = "S",
    UnknownError = "E0",
    MethodNotFound = "E1",
    MessageIncomplete = "E2",
    DataNotFound = "E3",
}

export function createResponse(messageId: string, code: ResponseCodes): string {
    const object = {
	messageId,
	code,
    }
    return JSON.stringify(object);
}

export function createEntryResponse(table: Tables, id: string, key: string, value: string): string {
    const object = {
	table, id, key, value
    }
    return JSON.stringify(object);
}

/*
 * Safety
 */
export function confirmStringEntries(object: Object, keys: string[]): boolean {
    for (const key of keys) {
	const value: any = object[key as keyof typeof object];
	if (typeof value != "string") {
	    return false;
	}
    }
    return true;
}

export function confirmStringInEnum(enumeration: Object, string: string): boolean {
    return string in Object.values(enumeration);
}
