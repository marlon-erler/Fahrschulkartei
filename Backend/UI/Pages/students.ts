import {ButtonStyles} from "../../Core/types";
import {getStudentName} from "../../Core/utility";
import Model from "../../Model/model";
import UIBase from "../base";
import UIGrid from "../grid";
import UIGroup from "../group";
import UIModelItems from "../modelItem";
import * as T from "../translations";

export default async function StudentsPage(model: Model): Promise<string> {
    const items = await UIModelItems(async () => {
	const keys: string[] = await model.getStudents();
	const mapped = await Promise.all(keys.map(async key => [await getStudentName(model, key), `/student/${key}`]))
	return mapped.sort((a, b) => a[0].localeCompare(b[0])) as [string, string][];
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
