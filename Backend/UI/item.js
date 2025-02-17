"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIItem;
function UIItem(text, href) {
    return `
<a class="button standard item" href="${href}">${text}</a>
`;
}
