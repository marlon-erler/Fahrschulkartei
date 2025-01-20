import Express from "express";
import BodyParser from "body-parser";
import Model from "../Model/model";
import SchoolDataPage from "../UI/Pages/schoolData";
import {generatePricingChartId, handleRequestFormData} from "./utility";
import {PricingChartKeys, SchoolKeys} from "../Model/keys";
import PricingChartsPage from "../UI/Pages/pricingCharts";
import PricingChartPage from "../UI/Pages/pricingChart";

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
	this.app.post("/school-data", async (req, res) => {
	    await handleRequestFormData<typeof SchoolKeys>(
		(key, value) => this.model.setSchoolData(SchoolKeys[key], value),
		SchoolKeys, 
		Object.entries(req.body)
	    );
	    res.redirect("/");
	});

	// Pricing Charts
	this.app.get("/pricing-charts", async (req, res) => {
	    res.send(await PricingChartsPage(this.model));
	});
	this.app.get("/pricing-chart/:id", async (req, res) => {
	    res.send(await PricingChartPage(this.model, req.params.id));
	});
	this.app.get("/new-pricing-chart", async (req, res) => {
	    const chartId: string = generatePricingChartId();
	    await this.model.setPricingChartData(chartId, PricingChartKeys.Fahrstunde45Min, "");
	    res.redirect("/pricing-charts");
	});
	this.app.post("/pricing-chart/:id", async (req, res) => {
	    console.log(req.body);
	    const id = req.params.id;
	    await handleRequestFormData<typeof PricingChartKeys>(
		(key, value) => this.model.setPricingChartData(id, PricingChartKeys[key], value),
		PricingChartKeys, 
		Object.entries(req.body)
	    );
	    res.redirect(`/pricing-chart/${id}`);
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

