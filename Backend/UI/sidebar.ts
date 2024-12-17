import {Translations} from "./translations";

export default function UISidebar(activeButton: string): string {
    return `
<div class="sidebar">
    ${[
	[Translations.SchoolData, "/"],
	[Translations.PricingCharts, "/pricing-charts"],
	[Translations.Students, "/students"],
	[Translations.TheoryClasses, "/theory-classes"],
	[Translations.PracticalClasses, "/practical-classes"],
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
