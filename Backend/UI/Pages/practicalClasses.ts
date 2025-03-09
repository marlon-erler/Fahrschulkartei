import {ButtonStyles} from "../../Core/types";
import {getPracticalClassName} from "../../Core/utility";
import Model from "../../Model/model";
import UIBase from "../base";
import UIFormInline from "../formInline";
import UIGrid from "../grid";
import UIGroup from "../group";
import UIInput from "../input";
import UIModelItems from "../modelItem";
import * as T from "../translations";

export default async function practicalClassesPage(model: Model, day: string): Promise<string> {
    const items = await UIModelItems(async () => {
	const keys: string[] = await model.getPracticalClassesForDay(day);
	const mapped = await Promise.all(keys.map(async key => [await getPracticalClassName(model, key), `/practical-class/${key}`]));
	return mapped.sort((a, b) => a[0].localeCompare(b[0])) as [string, string][];
    });

    return UIBase(T.Generic.PracticalClasses, [
	[ButtonStyles.Primary, T.Generic.CreateNew, "add", `/new-practical-class/${day}`],
    ],
	UIGroup(T.Generic.PracticalClasses, "",
	    UIFormInline("/practical-classes", "GET", T.Generic.ClassDate,
		UIInput(day, "date", "date"),
	    ),
	    "<hr>",
	    UIGrid(400,
		...items,
	    ),
	),
    )
}
