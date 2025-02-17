"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UISelect;
function UISelect(value, name, ...options) {
    return `
<div class="select-wrapper">
    <select name="${name}">
        ${options.map(x => `<option value=${x[0]} ${x[0] == value ? 'selected="selected"' : ""}>${x[1]}</option>`).join("\n")}
    </select>
    <span class="icon">arrow_drop_down</span>
</div>
`;
}
