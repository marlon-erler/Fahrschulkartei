import { app, BrowserWindow } from "electron";

function createWindow(): void {
    const window = new BrowserWindow({
	width: 900,
	height: 700,
    });
    window.loadURL("https://google.com");
}

app.whenReady().then(() => {
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
