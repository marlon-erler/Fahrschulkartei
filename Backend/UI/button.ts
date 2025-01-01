export default function UIButton(text: string, style: string): string {
    return `
<div class="submit-wrapper">
    <input class="button ${style}" type="submit" value="${text}" />
</div>
`
}
