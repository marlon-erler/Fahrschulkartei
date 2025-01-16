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

export function formatStringifiedDate(input: string): string {
    const [year, month, date, hours, minutes] = input.split("-");
    return `${year}-${month}-${date} ${hours}:${minutes}`;
}

/*
 * IDs
 */
export function generatePricingChartId(): string {
    return stringifyDate(new Date());
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
