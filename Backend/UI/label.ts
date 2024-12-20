export default function UILabel(text: string, id: string, element: string): string {
    return `
<label>${text}${element}</label>
`
}
