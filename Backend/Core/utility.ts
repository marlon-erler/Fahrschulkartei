import * as UUID from "uuid";
import Model from "../Model/model";
import {StudentKeys} from "../Model/keys";
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
    console.log(entries);
    for (const entry of entries) {
	const [key, value] = entry;
	if (keys.indexOf(key) == -1) return;
	if (typeof value != "string") return;
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

export async function getFormattedName(model: Model, studentId: string): Promise<string> {
    const lastName: string = await model.getStudentData(studentId, StudentKeys.LastName) ?? "";
    const firstName: string = await model.getStudentData(studentId, StudentKeys.FirstName) ?? "";
    return formatName(lastName, firstName) || T.Generic.StudentNameUnknown;
}

/*
 * IDs
 */
export function generatePricingChartId(): string {
    return stringifyDate(new Date());
}
