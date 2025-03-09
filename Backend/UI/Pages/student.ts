import {ButtonStyles} from "../../Core/types";
import {getStudentName} from "../../Core/utility";
import {StudentKeys} from "../../Model/keys";
import Model from "../../Model/model";
import UIBase from "../base";
import UIButton from "../button";
import UIForm from "../form";
import UIGroup from "../group";
import UIModelEntryLabels from "../modelEntryLabel";
import {UISidebarOption} from "../sidebar";
import * as T from "../translations";

export default async function StudentPage(model: Model, studentId: string): Promise<string> {
    const inputs = await UIModelEntryLabels<typeof StudentKeys>(
	model,
	(key) => model.getStudentData(studentId, StudentKeys[key]),
	T.StudentTranslations
    );

    const title: string = await getStudentName(model, studentId);
    const pricingChartId: string|undefined = await model.getStudentData(studentId, StudentKeys.Prices);

    const buttons: UISidebarOption[] = [
	[ButtonStyles.Destructive, T.Generic.Delete, "delete", "/"],
    ]
    if (pricingChartId != undefined) {
	buttons.push(
	    [ButtonStyles.Standard, T.Generic.ShowStudentPrices, "arrow_forward", `/pricing-chart/${pricingChartId}`],
	);
    }

    return UIBase(T.Generic.Students, buttons,
	UIForm(`/student/${studentId}`, "POST", 
	    UIGroup(title, "student",
		...inputs,
		UIButton(T.Generic.Save, "primary"),
	    ),
	)
    );
}
