import {app, BrowserWindow} from "electron";
import Ip from "ip";
import startServer from "./server";

const PORT = 8000;
const IP = Ip.address();
const ADDRESS = `http://${IP}:${PORT}`

function createWindow(): void {
    const window = new BrowserWindow({
	width: 1400,
	height: 900,

	autoHideMenuBar: true,
    });

    window.loadURL(ADDRESS);
}

app.whenReady().then(async () => {
    await startServer(PORT);
    createWindow();

    app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
	    createWindow();
	}
    });
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
	app.quit();
    }
})
