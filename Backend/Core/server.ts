import Express from "express";

export default function startServer(port: number): Promise<void> {
    return new Promise((resolve) => {
	const app = Express()
	app.use(Express.static("Frontend/dist"));

	app.listen(port, () => {
	    console.log(`### SERVER RUNNING ON PORT ${port} ###`);
	    resolve();
	});
    });
}
