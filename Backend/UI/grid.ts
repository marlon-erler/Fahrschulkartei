export default function UIGrid(columnWidth: number, ...items: string[]): string {
    return `
<div class="item-grid" style="--column-width: ${columnWidth}px;">
    ${items.join("\n")}
</div>
`
}
