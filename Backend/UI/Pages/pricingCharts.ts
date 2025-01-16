import {formatStringifiedDate} from "../../Core/utility";
import Model from "../../Model/model";
import UIBase from "../base";
import UIGrid from "../grid";
import UIGroup from "../group";
import UIModelItems from "../modelItem";
import * as T from "../translations";

export default async function PricingChartsPage(model: Model): Promise<string> {
    const items = await UIModelItems(async () => {
	const keys: string[] = await model.getPricingCharts();
	return keys
	    .map(key => [formatStringifiedDate(key), `/pricing-chart/${key}`])
	    .sort((a, b) => b[0].localeCompare(a[0])) as [string, string][];
    });

    return UIBase(T.Generic.PricingCharts, [
	    [T.Generic.CreateNew, "add", "/new-pricing-chart"],
	],
	UIGroup(T.Generic.PricingCharts,
	    UIGrid(300,
		...items,
	    )
	),
    )
}
