export default function UIFormInline(action: string, method: string, label: string, element: string): string {
    return `
<form action="${action}" method="${method}" class="inline">
    <label>
	${label}${element}
    </label>
    <input type="submit" value="arrow_forward" class="button primary" />
</form>
`
}
