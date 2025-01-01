"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIBase;
const sidebar_1 = __importDefault(require("./sidebar"));
const translations_1 = require("./translations");
function UIBase(title, mainCode) {
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
	${(0, sidebar_1.default)(translations_1.Generic.SchoolData)}
	<main>
	    ${mainCode}
	</main>
    </body>
</html>
`;
}
