"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIGroup;
function UIGroup(title, ...elements) {
    return `
<div class="group">
    <h2>${title}</h2>
    ${elements.join("\n")}
</div>
`;
}
