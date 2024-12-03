import Express from "express";
import Ws from "express-ws";
import Model from "../Model/model";
import {WebSocket} from "ws";

export default class Server {
    app: Ws.Application;
    model: Model;

    constructor(model: Model) {
	const wsInstance: Ws.Instance = Ws(Express());
	this.app = wsInstance.app;

	this.model = model;
    }

    start(port: number): Promise<void> {
	return new Promise((resolve) => {
	    this.app.ws("/", (ws: WebSocket) => {
		ws.on("message", (messageBuffer: Buffer) => {
		    const message: string = messageBuffer.toString();
		    this.handleWebSocketMessage(ws, message);
		});
	    });

	    this.app.use(Express.static("Frontend/dist"));

	    this.app.listen(port, () => {
		console.log(`### SERVER RUNNING ON PORT ${port} ###`);
		resolve();
	    });
	});
    }

    handleWebSocketMessage(ws: WebSocket, message: string): void {
    }
}

