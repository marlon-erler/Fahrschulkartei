"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIInput;
function UIInput(value, name, type = "text", isDisabled) {
    return `
<input name="${name}" value="${value}" type="${type}" ${isDisabled ? "disabled" : ""} />
`;
}
