"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIGroup;
function UIGroup(title, className, ...elements) {
    return `
<div class="group ${className}">
    <h2>${title}</h2>
    ${elements.join("\n")}
</div>
`;
}
