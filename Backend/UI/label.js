"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UILabel;
function UILabel(text, element) {
    return `
<label>${text}${element}</label>
<hr>
`;
}
