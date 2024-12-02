import "@pwa-fundament/stylesheet/index.css";
import "@pwa-fundament/themes/themes/standard";

import { setTheme } from "@pwa-fundament/themes";
import {Base} from "./Model/base";

// prepare
document.title = "PWA Fundament";
setTheme("standard");

// setup
const base = new Base(document.body);
