"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIFormInline;
function UIFormInline(action, method, label, element) {
    return `
<form action="${action}" method="${method}" class="inline">
    <label>
	${label}${element}
    </label>
    <input type="submit" value="arrow_forward" class="button primary" />
</form>
`;
}
