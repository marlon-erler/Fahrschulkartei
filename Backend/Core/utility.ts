import * as UUID from "uuid";
import Model from "../Model/model";
import {StudentKeys, TheoryClassKeys} from "../Model/keys";
import * as T from "../UI/translations";

/*
 * General
 */
export function uuid(): string {
    return UUID.v4();
}

export type Enum<T> = {[key: string]: T};

/*
 * Processing
 */
export async function handleRequestFormData<T>(setData: (key: keyof T, value: string) => Promise<void>, keyMap: Enum<string>, entries: [string, any][]): Promise<void> {
    const keys: string[] = Object.keys(keyMap);
    for (const entry of entries) {
	const [key, value] = entry;
	if (keys.indexOf(key) == -1) return;
	if (typeof value != "string") return;
	console.log("dev", key, value);
	await setData(key as keyof T, value);
    }
}

/*
 * Format
 */
export function padZero(input: number, size: number): string {
    return input.toString().padStart(size, "0");
}

export function stringifyDate(date: Date) {
    const parts: string[] = [
	padZero(date.getFullYear(), 4),
	...[date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes()].map(x => padZero(x, 2)),
    ];
    return parts.join("-");
}

export function formatStringifiedDateAndTime(input: string): string {
    const [year, month, date, hours, minutes] = input.split("-");
    return `${year}-${month}-${date} ${hours}:${minutes}`;
}

export function formatStringifiedDate(input: string): string {
    const [year, month, date] = input.split("-");
    return `${year}-${month}-${date}`;
}

export function formatName(lastName: string, firstName: string): string|false {
    if (lastName == "" || firstName == "")
	return false;

    return `${lastName}, ${firstName}`;
}

export function formatDateStamp(date: string, time: string): string {
    const formattedDate: string = formatStringifiedDate(date);
    return `${formattedDate} ${time}`
}

export async function getFormattedName(model: Model, studentId: string): Promise<string> {
    const lastName: string = await model.getStudentData(studentId, StudentKeys.LastName) ?? "";
    const firstName: string = await model.getStudentData(studentId, StudentKeys.FirstName) ?? "";
    return formatName(lastName, firstName) || T.Generic.StudentNameUnknown;
}

export async function getFormattedClassDate(model: Model, classId: string): Promise<string> {
    const date: string = await model.getTheoryClassData(classId, TheoryClassKeys.Date) ?? "";
    const time: string = await model.getTheoryClassData(classId, TheoryClassKeys.StartTime) ?? "00:00";
    return formatDateStamp(date, time) || T.Generic.DateUnknown;
}

/*
 * Generate
 */
export function generateDateBasedId(): string {
    return stringifyDate(new Date());
}

export function generateDateString(): string {
    return formatStringifiedDate(stringifyDate(new Date()));
}
