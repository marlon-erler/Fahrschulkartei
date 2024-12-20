import UIBase from "../base";
import UIButton from "../button";
import UICheckbox from "../checkbox";
import UIForm from "../form";
import UIGroup from "../group";
import UIInput from "../input";
import UILabel from "../label";
import {Translations} from "../translations";

export default function SchoolDataPage(): string {
    return UIBase(Translations.SchoolData,
	UIForm("/student/123", "POST", 
	    UIGroup("Title", 
		UILabel("Text Input", UIInput("Type here", "input")),
		UILabel("Checkbox", UICheckbox("checkbox")),
		`<hr>`,
		UIButton("Submit", "primary"),
	    )
	)
    );
}
