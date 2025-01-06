import {Enum} from "../Core/utility";
import UIInput from "./input";
import UILabel from "./label";

export default async function UIModelEntryLabels<T>(getData: (key: keyof T) => Promise<string|undefined>, keyMap: T, translations: Record<any, string>): Promise<string[]> {
    return Promise.all(
	Object.entries(translations).map(async entry => {
	    const key = entry[0] as keyof T;
	    const translation = entry[1];

	    const data: string = await getData(key) ?? "";
	    return UILabel(translation, UIInput(data, key as any));
	})
    )
}
