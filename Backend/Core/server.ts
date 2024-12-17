import Express from "express";
import Model from "../Model/model";

export default class Server {
    app: Express.Application;
    model: Model;

    constructor(model: Model) {
	this.app = Express();

	this.model = model;
    }

    start(port: number): Promise<void> {
	return new Promise((resolve) => {
	    this.app.listen(port, () => {
		console.log(`### SERVER RUNNING ON PORT ${port} ###`);
		resolve();
	    });
	});
    }
}

