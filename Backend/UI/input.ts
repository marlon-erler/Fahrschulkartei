export default function UIInput(placeholder: string, name: string): string {
    return `
<input name="${name}" placeholder="${placeholder}" />
`
}
