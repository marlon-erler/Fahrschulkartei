import * as UUID from "uuid";

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
	await setData(key as keyof T, value);
    }
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
