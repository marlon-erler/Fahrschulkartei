import {formatStringifiedDate} from "../../Core/utility";
import Model from "../../Model/model";
import UIBase from "../base";
import UIGrid from "../grid";
import UIGroup from "../group";
import * as T from "../translations";

export default async function PricingChartPage(model: Model, chartId: string): Promise<string> {
    return UIBase(T.Generic.PricingCharts, [
	],
	UIGroup(formatStringifiedDate(chartId),
	    UIGrid(300,
	    )
	),
    )
}
