import Express from "express";
import BodyParser from "body-parser";
import Model from "../Model/model";
import SchoolDataPage from "../UI/Pages/schoolData";

export default class Server {
    app: Express.Application;
    model: Model;

    constructor(model: Model) {
	this.app = Express();
	this.app.use(BodyParser.urlencoded({ extended: false }));
	this.app.use(BodyParser.json());

	this.model = model;
    }

    start(port: number): Promise<void> {
	return new Promise((resolve) => {
	    this.configureRoutes();
	    this.app.use("/static", Express.static("Frontend/static"));
	    this.app.listen(port, () => {
		console.log(`### SERVER RUNNING ON PORT ${port} ###`);
		resolve();
	    });
	});
    }

    private configureRoutes() {
	// School Data
	this.app.get("/", async (req, res) => {
	    res.send(await SchoolDataPage(this.model));
	});
	this.app.post("/school-data", (req, res) => {
	    console.log(req.body);
	    res.redirect("/");
	});

	// Pricing Charts
	this.app.get("/pricing-charts", (req, res) => {
	    res.send("pricing charts")
	});
	this.app.get("/pricing-chart/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/pricing-chart/:id", (req, res) => {
	    console.log(req.body);
	    res.send(req.params.id);
	});

	// Students
	this.app.get("/students", (req, res) => {
	    res.send("students");
	});
	this.app.get("/students/index/:index", (req, res) => {
	    res.send(req.params.index);
	});
	this.app.get("/student/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.get("/student-requirements/student/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/student/:id", (req, res) => {
	    console.log(req.body);
	    res.send(req.params.id);
	});
	this.app.post("/student-requirement/:id", (req, res) => {
	    console.log(req.body);
	    res.send(req.params.id);
	});

	// Theory Classes
	this.app.get("/theory-classes", (req, res) => {
	    res.send("theory-classes");
	});
	this.app.get("/theory-classes/date/:date", (req, res) => {
	    res.send(req.params.date);
	});
	this.app.get("/theory-classes/student/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.get("/theory-class/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/theory-class/:id", (req, res) => {
	    console.log(req.body);
	    res.send(req.params.id);
	});
	this.app.post("/theory-class-student/:id", (req, res) => {
	    console.log(req.body);
	    res.send(req.params.id);
	});

	// Practical Classes
	this.app.get("/practical-classes", (req, res) => {
	    res.send("practical-classes");
	});
	this.app.get("/practical-classes/date/:date", (req, res) => {
	    res.send(req.params.date);
	});
	this.app.get("/practical-classes/student/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.get("/practical-class/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/practical-class/:id", (req, res) => {
	    console.log(req.body);
	    res.send(req.params.id);
	});

	// Deletion
	this.app.post("/delete/student/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/delete/student-requirement/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/delete/theory-class/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/delete/theory-class-attendance/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/delete/practical-class/:id", (req, res) => {
	    res.send(req.params.id);
	});
    }
}

