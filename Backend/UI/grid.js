"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIGrid;
function UIGrid(columnWidth, ...items) {
    return `
<div class="item-grid" style="--column-width: ${columnWidth}px;">
    ${items.join("\n")}
</div>
`;
}
