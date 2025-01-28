import {ButtonStyles} from "../../Core/types";
import Model from "../../Model/model";
import UIBase from "../base";
import UIGrid from "../grid";
import UIGroup from "../group";
import UIModelItems from "../modelItem";
import * as T from "../translations";

export default async function StudentsPage(model: Model): Promise<string> {
    const items = await UIModelItems(async () => {
	const keys: string[] = await model.getStudents();
	console.log(keys);
	return keys
	    .map(key => [key, `/student/${key}`])
	    .sort((a, b) => b[0].localeCompare(a[0])) as [string, string][];
    });

    return UIBase(T.Generic.Students, [
	    [ButtonStyles.Primary, T.Generic.RegisterStudent, "add", "/new-student"],
	],
	UIGroup(T.Generic.Students, "",
	    UIGrid(190,
		...items,
	    )
	),
    )
}
