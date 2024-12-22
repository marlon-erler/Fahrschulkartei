export default function UIItem(text: string, href: string): string {
    return `
<a class="button standard item" href="${href}">${text}</a>
`
}
