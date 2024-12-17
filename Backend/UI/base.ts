export default function UIBase(title: string, mainCode: string): string {
    return `
<!DOCTYPE HTML>
<html>
    <head>
	<title>${title}</title>
	<meta charset="utf-u" />
	<meta name="viewport" content="scale=1.0,initial-scale=1.0,width=device-width" />

	<link rel="stylesheet" href="/static/styles/index.css" />
	<link rel="stylesheet" href="/static/styles/theme.css" />
    </head>
    <body>
	${mainCode}
    </body>
</html>
`
}
