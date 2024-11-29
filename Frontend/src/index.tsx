import "@pwa-fundament/stylesheet/index.css";
import "@pwa-fundament/themes/themes/standard";

import { setTheme } from "@pwa-fundament/themes";

import ViewRoot from "./Main/viewRoot";

// prepare
document.title = "PWA Fundament";
setTheme("standard");

// build UI
document.body.append(ViewRoot());
