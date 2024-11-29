"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = startServer;
const express_1 = __importDefault(require("express"));
function startServer(port) {
    return new Promise((resolve) => {
        const app = (0, express_1.default)();
        app.use(express_1.default.static("Frontend/dist"));
        app.listen(port, () => {
            console.log(`### SERVER RUNNING ON PORT ${port} ###`);
            resolve();
        });
    });
}
