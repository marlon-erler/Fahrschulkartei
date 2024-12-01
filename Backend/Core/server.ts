import Express from "express";
import Ws from "express-ws";
import Model from "../Model/model";

export default function startServer(port: number, model: Model): Promise<void> {
    return new Promise((resolve) => {
	const wsInstance: Ws.Instance = Ws(Express());
	const app = wsInstance.app;

	app.ws("/", (ws) => {
	    console.log("websocket connected");
	    ws.on("message", (messageBuffer: Buffer) => {
		const message: string = messageBuffer.toString();
		console.log("received message", message);
	    });
	    ws.send("welcome");
	});

	app.use(Express.static("Frontend/dist"));

	app.listen(port, () => {
	    console.log(`### SERVER RUNNING ON PORT ${port} ###`);
	    resolve();
	});
    });
}
