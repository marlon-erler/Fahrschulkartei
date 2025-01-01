"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIButton;
function UIButton(text, style) {
    return `
<input class="button ${style}" type="submit" value="${text}" />
`;
}
