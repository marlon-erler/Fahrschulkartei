export default function UIGroup(title: string, ...elements: string[]): string {
    return `
<div class="group">
    <h2>${title}</h2>
    ${elements.join("\n")}
</div>
`
}
