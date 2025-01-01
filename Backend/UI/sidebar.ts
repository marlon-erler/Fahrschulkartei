import {Generic} from "./translations";

export default function UISidebar(activeButton: string): string {
    return `
<div class="sidebar">
    ${[
	[Generic.SchoolData, "/"],
	[Generic.PricingCharts, "/pricing-charts"],
	[Generic.Students, "/students"],
	[Generic.TheoryClasses, "/theory-classes"],
	[Generic.PracticalClasses, "/practical-classes"],
    ].map(x => UISidebarButton(x as [string, string], activeButton)).join("\n")}
</div>
`
}

function UISidebarButton(data: [string, string], activeButton: string): string {
    const [label, href] = data;
    return `
    <a class="button ${label == activeButton ? "primary" : "standard"}" href="${href}">${label}</a>
`
}
