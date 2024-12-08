"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const ip_1 = __importDefault(require("ip"));
const model_1 = __importDefault(require("../Model/model"));
const server_1 = __importDefault(require("./server"));
const PORT = 8000;
const IP = ip_1.default.address();
const ADDRESS = `http://${IP}:${PORT}`;
function createWindow() {
    const window = new electron_1.BrowserWindow({
        width: 1400,
        height: 900,
        autoHideMenuBar: true,
    });
    window.loadURL(ADDRESS);
}
electron_1.app.whenReady().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const model = new model_1.default();
    const server = new server_1.default(model);
    yield server.start(PORT);
    createWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
}));
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
