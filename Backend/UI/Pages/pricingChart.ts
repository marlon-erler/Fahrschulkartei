import {formatStringifiedDateAndTime} from "../../Core/utility";
import {PricingChartKeys} from "../../Model/keys";
import Model from "../../Model/model";
import UIBase from "../base";
import UIButton from "../button";
import UIForm from "../form";
import UIGroup from "../group";
import UIModelEntryLabels from "../modelEntryLabel";
import * as T from "../translations";

export default async function PricingChartPage(model: Model, chartId: string): Promise<string> {
    const inputs = await UIModelEntryLabels<typeof PricingChartKeys> (
	model,
	(key) => model.getPricingChartData(chartId, PricingChartKeys[key]),
	T.PricingChartTranslations
    );

    return UIBase(T.Generic.PricingCharts, [],
	UIForm(`/pricing-chart/${chartId}`, "POST", 
	    UIGroup(formatStringifiedDateAndTime(chartId), "pricing-chart",
		...inputs,
		UIButton(T.Generic.Save, "primary"),
	    ),
	)
    );
}
