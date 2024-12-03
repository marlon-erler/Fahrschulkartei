import Express from "express";
import Ws from "express-ws";
import Model from "../Model/model";
import {WebSocket} from "ws";
import {Tables} from "../Model/keys";

export interface ClientInfo {
    loadedEntry: string;
    loadedKeys: string[];
}

export interface ParsedMessage {
    messageId: string;
    methodName: string;
}

export default class Server {
    app: Ws.Application;
    model: Model;

    tracker = new Map<WebSocket, ClientInfo>();

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

    // message handling
    private handleWebSocketMessage(ws: WebSocket, message: string): void {
	try {
	    const parsedMessage: any = JSON.parse(message);

	    // ensure properties exist
	    if (typeof parsedMessage.messageId != "string") {
		throw "messageId not defined";
	    } else if (typeof parsedMessage.methodName != "string") {
		throw "methodName not defined";
	    } 

	    this.handleParsedMessage(ws, parsedMessage);
	} catch (e) {
	    console.error(`could not parse message "${message}"`, e);
	}
    }

    private handleParsedMessage(ws: WebSocket, message: ParsedMessage): void {

    }

    // tracking
    private updateTracking(ws: WebSocket, entry: string, keys: string[]): void {
	const clientInfo = () => this.tracker.get(ws);

	const currentInfo = clientInfo();
	if (currentInfo == undefined || currentInfo.loadedEntry != entry) {
	    const newInfo: ClientInfo = {
		loadedEntry: entry,
		loadedKeys: [],
	    }
	    this.tracker.set(ws, newInfo);
	}

	clientInfo()?.loadedKeys.push(...keys);
    }
}

