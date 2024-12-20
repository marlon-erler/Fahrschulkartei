export default function UILabel(text: string, element: string): string {
    return `
<label>${text}${element}</label>
`
}
