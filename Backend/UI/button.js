"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIButton;
function UIButton(text, style) {
    return `
<div class="submit-wrapper">
    <input class="button ${style}" type="submit" value="${text}" />
</div>
`;
}
