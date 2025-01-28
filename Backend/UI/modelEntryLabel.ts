import {EntryDataMap} from "../Core/types";
import UIInput from "./input";
import UILabel from "./label";

export default async function UIModelEntryLabels<T>(getData: (key: keyof T) => Promise<string|undefined>, dataMap: EntryDataMap<string>): Promise<string[]> {
    return Promise.all(
	Object.entries(dataMap).map(async entry => {
	    const key = entry[0] as keyof T;
	    const [translation, type, convert, isDisabled] = entry[1];

	    const data: string = convert(await getData(key) ?? "");
	    return UILabel(translation, UIInput(data, key as any, type, isDisabled));
	})
    )
}
