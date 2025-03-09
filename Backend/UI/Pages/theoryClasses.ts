import {ButtonStyles} from "../../Core/types";
import {getTheoryClassName} from "../../Core/utility";
import Model from "../../Model/model";
import UIBase from "../base";
import UIFormInline from "../formInline";
import UIGrid from "../grid";
import UIGroup from "../group";
import UIInput from "../input";
import UIModelItems from "../modelItem";
import * as T from "../translations";

export default async function theoryClassesPage(model: Model, day: string): Promise<string> {
    const items = await UIModelItems(async () => {
	const keys: string[] = await model.getTheoryClassesForDay(day);
	const mapped = await Promise.all(keys.map(async key => [await getTheoryClassName(model, key), `/theory-class/${key}`]));
	return mapped.sort((a, b) => a[0].localeCompare(b[0])) as [string, string][];
    });

    return UIBase(T.Generic.TheoryClasses, [
	[ButtonStyles.Primary, T.Generic.CreateNew, "add", `/new-theory-class/${day}`],
    ],
	UIGroup(T.Generic.TheoryClasses, "",
	    UIFormInline("/theory-classes", "GET", T.Generic.ClassDate,
		UIInput(day, "date", "date"),
	    ),
	    "<hr>",
	    UIGrid(190,
		...items,
	    ),
	),
    )
}
