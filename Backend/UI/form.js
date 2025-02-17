"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIForm;
function UIForm(action, method, ...elements) {
    return `
<form action="${action}" method="${method}">
    ${elements.join("\n")}
</form>
`;
}
