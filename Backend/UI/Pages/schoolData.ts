import {SchoolKeys} from "../../Model/keys";
import Model from "../../Model/model";
import UIBase from "../base";
import UIButton from "../button";
import UIForm from "../form";
import UIGroup from "../group";
import UIModelEntryLabels from "../modelEntryLabel";
import * as T from "../translations";

export default async function SchoolDataPage(model: Model): Promise<string> {
    const inputs = await UIModelEntryLabels<typeof SchoolKeys>(
	(key) => model.getSchoolData(SchoolKeys[key]),
	SchoolKeys, 
	T.SchoolTranslations
    );

    return UIBase(T.Generic.SchoolData,
	UIForm("/school-data", "POST", 
	    UIGroup(T.Generic.SchoolData,
		...inputs,
		UIButton(T.Generic.Save, "primary"),
	    ),
	)
    );
}
