export default function UIInput(value: string, name: string): string {
    return `
<input name="${name}" value="${value}" />
`
}
