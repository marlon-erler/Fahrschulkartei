import UISidebar, {UISidebarOption} from "./sidebar"

export default function UIBase(title: string, options: UISidebarOption[], mainCode: string): string {
    return `
<!DOCTYPE HTML>
<html lang="de">
    <head>
	<title>${title}</title>
	<meta charset="utf-u" />
	<meta name="viewport" content="scale=1.0,initial-scale=1.0,width=device-width" />

	<link rel="stylesheet" href="/static/styles/index.css" />
	<link rel="stylesheet" href="/static/styles/layout.css" />
	<link rel="stylesheet" href="/static/styles/theme.css" />
	<link rel="stylesheet" href="/static/styles/icons.css" />
    </head>
    <body>
	${UISidebar(title, ...options)}
	<main>
	    ${mainCode}
	</main>
    </body>
</html>
`
}
