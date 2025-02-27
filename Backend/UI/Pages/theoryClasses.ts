import {ButtonStyles} from "../../Core/types";
import {formatStringifiedDateAndTime} from "../../Core/utility";
import Model from "../../Model/model";
import UIBase from "../base";
import UIFormInline from "../formInline";
import UIGrid from "../grid";
import UIGroup from "../group";
import UIInput from "../input";
import UIModelItems from "../modelItem";
import * as T from "../translations";

export default async function theoryClassesPage(model: Model, date: string): Promise<string> {
    const items = await UIModelItems(async () => {
	const keys: string[] = await model.getTheoryClassesForDay(date);
	return keys
	    .map(key => [formatStringifiedDateAndTime(key), `/pricing-chart/${key}`])
	    .sort((a, b) => b[0].localeCompare(a[0])) as [string, string][];
    });

    return UIBase(T.Generic.TheoryClasses, [
	[ButtonStyles.Primary, T.Generic.CreateNew, "add", `/new-theory-class/${date}`],
    ],
	UIGroup(T.Generic.TheoryClasses, "",
	    UIFormInline("/theory-classes", "GET", T.Generic.ClassDate,
		UIInput(date, "date", "date"),
	    ),
	    "<hr>",
	    UIGrid(190,
		...items,
	    ),
	),
    )
}
