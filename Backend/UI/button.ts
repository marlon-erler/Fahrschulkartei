export default function UIButton(text: string, style: string): string {
    return `
<input class="button ${style}" type="submit" value="${text}" />
`
}
