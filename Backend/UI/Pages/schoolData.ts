import UIBase from "../base";
import UIButton from "../button";
import UICheckbox from "../checkbox";
import UIForm from "../form";
import UIGrid from "../grid";
import UIGroup from "../group";
import UIInput from "../input";
import UIItem from "../item";
import UILabel from "../label";
import {Translations} from "../translations";

export default function SchoolDataPage(): string {
    return UIBase(Translations.SchoolData,
	UIForm("/student/123", "POST", 
	    UIGroup("Title", 
		UIGrid(100,
		    UIItem("A", "/"),
		    UIItem("B", "/"),
		    UIItem("C", "/"),
		    UIItem("D", "/"),
		),
		`<hr>`,
		UILabel("Text Input", UIInput("Type here", "input")),
		UILabel("Checkbox", UICheckbox("checkbox")),
		`<hr>`,
		UIButton("Submit", "primary"),
	    )
	)
    );
}
