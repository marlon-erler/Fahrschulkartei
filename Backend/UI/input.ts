export default function UIInput(id: string, placeholder: string, name: string): string {
    return `
<input id="${id}" name="${name}" placeholder="${placeholder}" />
`
}
