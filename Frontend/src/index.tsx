import "@pwa-fundament/stylesheet/index.css";
import "@pwa-fundament/themes/themes/standard";

import { setTheme } from "@pwa-fundament/themes";

import ViewRoot from "./Main/viewRoot";

// prepare
document.title = "PWA Fundament";
setTheme("standard");

// websocket
const ws = new WebSocket(`ws://${location.host}`);
ws.addEventListener("open", () => {
    console.log("socket opened");
    ws.send("Hello!");
})
ws.addEventListener("message", (event: MessageEvent<any>) => {
    const message: string = event.data;
    console.log(message);
})

// build UI
document.body.append(ViewRoot());
