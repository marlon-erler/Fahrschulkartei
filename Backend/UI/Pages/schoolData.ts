import {SchoolKeys} from "../../Model/keys";
import Model from "../../Model/model";
import UIBase from "../base";
import UIButton from "../button";
import UIForm from "../form";
import UIGroup from "../group";
import UIInput from "../input";
import UILabel from "../label";
import * as T from "../translations";

export default async function SchoolDataPage(model: Model): Promise<string> {
    const inputs: string[] = await Promise.all(
	Object.entries(T.SchoolTranslations).map(async entry => {
	    const key = entry[0] as keyof typeof SchoolKeys;
	    const value = entry[1];
	    const data: string = await model.getSchoolData(SchoolKeys[key]) ?? "";
	    console.log(key, SchoolKeys[key], data);
	    return UILabel(value, UIInput(data, key));
	})
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
