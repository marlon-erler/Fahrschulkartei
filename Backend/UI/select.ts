export default function UISelect(value: string, name: string, ...options: [string, string][]): string {
    return `
<select name="${name}">
    ${options.map(x => `<option value=${x[0]} ${x[0] == value ? 'selected="selected"' : ""}>${x[1]}</option>`).join("\n")}
</select>
`
}
