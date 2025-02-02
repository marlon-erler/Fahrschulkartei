import {SelectTypes, TranslationDataMap} from "../Core/types";
import {formatStringifiedDateAndTime} from "../Core/utility";
import Model from "../Model/model";
import UIInput from "./input";
import UILabel from "./label";
import UISelect from "./select";
import * as T from "./translations";

export default async function UIModelEntryLabels<T>(model: Model, getData: (key: keyof T) => Promise<string|undefined>, dataMap: TranslationDataMap<string>): Promise<string[]> {
    const allEntries: (string|undefined)[] = await Promise.all(
	Object.entries(dataMap).map(async entry => {
	    if (entry[1] == undefined) return undefined;
	    const key = entry[0] as keyof T;
	    const translationData = entry[1];

	    const value: string = translationData.converter(await getData(key) ?? "");
	    let element: string = "";

	    if (translationData.selectType != undefined) {
		let options: [string, string][];

		switch (translationData.selectType) {
		    case SelectTypes.PricingCharts: {
			const optionIds: string[] = await model.getPricingCharts();
			options = optionIds.map(x => [x, formatStringifiedDateAndTime(x)]);
		    }
		}

		element = UISelect(value, key as any, ...options)
	    } else {
		element = UIInput(value, key as any, translationData.inputType ?? "text", translationData.isDisabled ?? false)
	    }
	    return UILabel(translationData.translation, element);
	})
    )
    return allEntries.filter(x => x != undefined)
}
