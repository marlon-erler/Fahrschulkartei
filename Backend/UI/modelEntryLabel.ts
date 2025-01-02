import Model from "../Model/model";
import UIInput from "./input";
import UILabel from "./label";

export default async function UIModelEntryLabels<T>(getData: (key: keyof T) => Promise<string|undefined>, keys: T, translations: Record<any, string>): Promise<string[]> {
    return Promise.all(
	Object.entries(translations).map(async entry => {
	    const key = entry[0] as keyof T;
	    const value = entry[1];
	    const data: string = await getData(key) ?? "";
	    console.log(key, keys[key], data);
	    return UILabel(value, UIInput(data, key as any));
	})
    )
}
