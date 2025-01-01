"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UISidebar;
const translations_1 = require("./translations");
function UISidebar(activeButton) {
    return `
<div class="sidebar">
    ${[
        [translations_1.Generic.SchoolData, "/"],
        [translations_1.Generic.PricingCharts, "/pricing-charts"],
        [translations_1.Generic.Students, "/students"],
        [translations_1.Generic.TheoryClasses, "/theory-classes"],
        [translations_1.Generic.PracticalClasses, "/practical-classes"],
    ].map(x => UISidebarButton(x, activeButton)).join("\n")}
</div>
`;
}
function UISidebarButton(data, activeButton) {
    const [label, href] = data;
    return `
    <a class="button ${label == activeButton ? "primary" : "standard"}" href="${href}">${label}</a>
`;
}
