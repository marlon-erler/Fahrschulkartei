"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIInput;
function UIInput(placeholder, name) {
    return `
<input name="${name}" placeholder="${placeholder}" />
`;
}
