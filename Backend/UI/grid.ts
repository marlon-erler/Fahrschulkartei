export default function UIGrid(...items: string[]): string {
    return `
<div class="item-grid">
    ${items.join("\n")}
</div>
`
}
