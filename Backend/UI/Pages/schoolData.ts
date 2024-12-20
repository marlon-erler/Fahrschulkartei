import UIBase from "../base";
import UIButton from "../button";
import UICheckbox from "../checkbox";
import UIGroup from "../group";
import UIInput from "../input";
import UILabel from "../label";
import {Translations} from "../translations";

export default function SchoolDataPage(): string {
    return UIBase(Translations.SchoolData, `
	${UIGroup("Title", 
	    UILabel("Text Input", "a", UIInput("a", "Type here", "")),
	    UILabel("Checkbox", "b", UICheckbox("b", "")),
	    `<hr>`,
	    UIButton("Submit", "primary"),
	)}
    `);
}
