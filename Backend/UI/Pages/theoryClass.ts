import {ButtonStyles} from "../../Core/types";
import {getTheoryClassName} from "../../Core/utility";
import {TheoryClassKeys} from "../../Model/keys";
import Model from "../../Model/model";
import UIBase from "../base";
import UIButton from "../button";
import UIForm from "../form";
import UIGroup from "../group";
import UIModelEntryLabels from "../modelEntryLabel";
import {UISidebarOption} from "../sidebar";
import * as T from "../translations";

export default async function TheoryClassPage(model: Model, classId: string): Promise<string> {
    const inputs = await UIModelEntryLabels<typeof TheoryClassKeys>(
	model,
	(key) => model.getTheoryClassData(classId, TheoryClassKeys[key]),
	T.TheoryClassTranslations
    );

    const title: string = await getTheoryClassName(model, classId);

    const buttons: UISidebarOption[] = [
	[ButtonStyles.Destructive, T.Generic.Delete, "delete", "/"],
    ]

    return UIBase(T.Generic.TheoryClasses, buttons,
	UIForm(`/theory-class/${classId}`, "POST", 
	    UIGroup(title, "theory-class",
		...inputs,
		UIButton(T.Generic.Save, "primary"),
	    ),
	)
    );
}
