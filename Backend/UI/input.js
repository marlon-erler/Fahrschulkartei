"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIInput;
function UIInput(value, name) {
    return `
<input name="${name}" value="${value}" />
`;
}
