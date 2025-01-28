export default function UIInput(value: string, name: string, type: string = "text", isDisabled?: boolean): string {
    return `
<input name="${name}" value="${value}" type="${type}" ${isDisabled ? "disabled" : ""} />
`
}
