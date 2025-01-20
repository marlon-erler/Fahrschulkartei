export default function UIGroup(title: string, className: string, ...elements: string[]): string {
    return `
<div class="group ${className}">
    <h2>${title}</h2>
    ${elements.join("\n")}
</div>
`
}
