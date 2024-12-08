import Express from "express";
import Ws from "express-ws";
import Model from "../Model/model";
import {WebSocket} from "ws";
import {confirmStringEntries, confirmStringInEnum, createResponse, ResponseCodes} from "./utility";
import {PracticalClassKeys, PricingChartKeys, SchoolKeys, StudentKeys, StudentLegalRequirementKeys, TheoryClassKeys} from "../Model/keys";

export interface ClientInfo {
    loadedEntry: string;
    loadedKeys: string[];
}

export interface ParsedMessage {
    messageId: string;
    methodName: string;
    [key: string]: any;
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

	    this.handleParsedMessage(this.model, ws, parsedMessage);
	} catch (e) {
	    console.error(`could not parse message "${message}"`, e);
	}
    }

    private async handleParsedMessage(model: Model, ws: WebSocket, message: ParsedMessage): Promise<void> {
	function respond(code: ResponseCodes) {
	    const response: string = createResponse(message.messageId, code);
	    ws.send(response);
	}
	function respondIncomplete() {
	    respond(ResponseCodes.MessageIncomplete);
	}
	async function assistMethodExecution(keys: string[], fn: () => Promise<void>, enumeration?: Object) {
	    const isComplete: boolean = confirmStringEntries(message, keys);
	    if (isComplete == false) {
		return respondIncomplete();
	    }

	    if (enumeration != undefined) {
		const doesMatch: boolean = confirmStringInEnum(enumeration, message.key);
		if (doesMatch == false) return respondIncomplete();
	    }

	    await fn();
	}
	async function assistSetMethodExecution(keys: string[], fn: () => Promise<void>, enumeration?: Object) {
	    assistMethodExecution(keys, async () => {
		await fn();
		respond(ResponseCodes.Success);
	    }, enumeration);
	}
	async function assistGetMethodExecution(keys: string[], fn: () => Promise<Object>, enumeration?: Object) {
	    assistMethodExecution(keys, async () => {
		const response = {
		    methodName: message.methodName,
		    ...await fn(),
		}
		const stringified: string = JSON.stringify(response);
		ws.send(stringified);
	    }, enumeration);
	}
	async function assistGenericGetMethodExecution(idKeyName: string, fn: () => Promise<string|undefined>, enumeration?: Object) {
	    assistGetMethodExecution([idKeyName, "key"], async () => {
		return {
		    entryId: message[idKeyName],
		    key: message.key,
		    value: await fn() ?? undefined,
		}
	    }, enumeration)
	}

	switch (message.methodName) {
		// set requests
	    case "setSchoolData":
		return assistSetMethodExecution(["key", "value"], async () => {
		    await model.setSchoolData(message.key, message.value);
		}, SchoolKeys);
	    case "setPricingChartData":
		return assistSetMethodExecution(["chartId", "key", "value"], async () => {
		    await model.setPricingChartData(message.chartId, message.key, message.value);
		}, PricingChartKeys);
	    case "setStudentData":
		return assistSetMethodExecution(["studentId", "key", "value"], async () => {
		    await model.setStudentData(message.studentId, message.key, message.value);
		}, StudentKeys);
	    case "setStudentLegalRequirementData":
		return assistSetMethodExecution(["requirementId", "key", "value"], async () => {
		    await model.setStudentLegalRequirementData(message.requirementId, message.key, message.value);
		}, StudentLegalRequirementKeys);
	    case "setTheoryClassData":
		return assistSetMethodExecution(["classId", "key", "value"], async () => {
		    await model.setTheoryClassData(message.classId, message.key, message.value);
		}, TheoryClassKeys);
	    case "addStudentToTheoryClass":
		return assistSetMethodExecution(["classId", "studentId", "signature"], async () => {
		    await model.addStudentToTheoryClass(message.classId, message.studentId, message.signature);
		});
	    case "setPracticalClassData":
		return assistSetMethodExecution(["classId", "key", "value"], async () => {
		    await model.setPracticalClassData(message.classId, message.key, message.value);
		}, PracticalClassKeys);

		// get requests
	    case "getSchoolData":
		return assistGetMethodExecution(["key"], async () => {
		    return {
			key: message.key,
			value: await model.getSchoolData(message.key) ?? "",
		    }
		}, SchoolKeys);
	    case "getPricingChartData":
		return assistGenericGetMethodExecution(
		    "chartId",
		    async () => model.getPricingChartData(message.chartId, message.key),
		    PricingChartKeys
		);
	    case "getPricingCharts":
		return assistGetMethodExecution([], async () => {
		    return {
			entryIds: await model.getPricingCharts(),
		    }
		});
	    case "getPricingChart":
		return assistGetMethodExecution(["chartId"], async () => {
		    return {
			entries: await model.getPricingChart(message.chartId),
		    }
		});

		// default
	    default:
		return respond(ResponseCodes.MethodNotFound);
	}
    }

    // tracking
    private updateTracking(ws: WebSocket, entry: string, newKeys: string[]): void {
	const clientInfo = () => this.tracker.get(ws);

	const currentInfo = clientInfo();
	if (currentInfo == undefined || currentInfo.loadedEntry != entry) {
	    const newInfo: ClientInfo = {
		loadedEntry: entry,
		loadedKeys: [],
	    }
	    this.tracker.set(ws, newInfo);
	}

	clientInfo()?.loadedKeys.push(...newKeys);
    }
}

