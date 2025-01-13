import {Generic} from "./translations";

export type UISidebarOption = [string, string, string]

export default function UISidebar(activeButton: string, ...options: UISidebarOption[]): string {
    return `
<div class="sidebar">
    ${[
	[Generic.SchoolData, "/"],
	[Generic.PricingCharts, "/pricing-charts"],
	[Generic.Students, "/students"],
	[Generic.TheoryClasses, "/theory-classes"],
	[Generic.PracticalClasses, "/practical-classes"],
    ].map(x => UISidebarNavigationButton(x as [string, string], activeButton)).join("\n")}
    ${options.length > 0 ? "<hr>" : ""}
    ${options.map(x => UISidebarOptionButton(...x)).join("\n")}
</div>
`
}

function UISidebarNavigationButton(data: [string, string], activeButton: string): string {
    const [label, href] = data;
    return `
    <a class="button ${label == activeButton ? "primary" : "standard"}" href="${href}">${label}</a>
`
}

function UISidebarOptionButton(label: string, icon: string, href: string): string {
    return `
    <a class="button standard" href="${href}">
	${label}
	<span class="icon">${icon}</span>
    </a>
`
}
