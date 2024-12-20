export default function UIForm(action: string, method: string, ...elements: string[]): string {
    return `
<form action="${action}" method="${method}">
    ${elements.join("\n")}
</form>
`
}
