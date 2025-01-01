import UIBase from "../base";
import UIButton from "../button";
import UIForm from "../form";
import UIGroup from "../group";
import UIInput from "../input";
import UILabel from "../label";
import * as T from "../translations";

export default function SchoolDataPage(): string {
    return UIBase(T.Generic.SchoolData,
	UIForm("/school-data", "POST", 
	    UIGroup(T.Generic.SchoolData, 
		...Object.entries(T.SchoolTranslations).map(entry => 
		    UILabel(entry[1], UIInput("", entry[0])),
		),
		UIButton(T.Generic.Save, "primary"),
	    ),
	)
    );
}
