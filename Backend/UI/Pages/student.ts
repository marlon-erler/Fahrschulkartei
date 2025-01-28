import {ButtonStyles} from "../../Core/types";
import {getFormattedName} from "../../Core/utility";
import {StudentKeys} from "../../Model/keys";
import Model from "../../Model/model";
import UIBase from "../base";
import UIButton from "../button";
import UIForm from "../form";
import UIGroup from "../group";
import UIModelEntryLabels from "../modelEntryLabel";
import * as T from "../translations";

export default async function StudentPage(model: Model, studentId: string): Promise<string> {
    const inputs = await UIModelEntryLabels<typeof StudentKeys>(
	(key) => model.getStudentData(studentId, StudentKeys[key]),
	T.StudentTranslations
    );

    const title: string = await getFormattedName(model, studentId);

    return UIBase(T.Generic.Students, [
	[ButtonStyles.Destructive, T.Generic.Delete, "delete", "/"],
    ],
	UIForm(`/student/${studentId}`, "POST", 
	    UIGroup(title, "student",
		...inputs,
		UIButton(T.Generic.Save, "primary"),
	    ),
	)
    );
}
