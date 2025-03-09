import Express from "express";
import BodyParser from "body-parser";
import Model from "../Model/model";
import SchoolDataPage from "../UI/Pages/schoolData";
import {generateDateBasedId, generateDateString, handleRequestFormData, stringifyDate, uuid} from "./utility";
import {PricingChartKeys, SchoolKeys, StudentKeys, TheoryClassKeys} from "../Model/keys";
import PricingChartsPage from "../UI/Pages/pricingCharts";
import PricingChartPage from "../UI/Pages/pricingChart";
import StudentsPage from "../UI/Pages/students";
import StudentPage from "../UI/Pages/student";
import theoryClassesPage from "../UI/Pages/theoryClasses";
import TheoryClassPage from "../UI/Pages/theoryClass";

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
	    const chartId: string = generateDateBasedId();
	    await this.model.setPricingChartData(chartId, PricingChartKeys.Fahrstunde45Min, "");
	    res.redirect(`/pricing-chart/${chartId}`);
	});
	this.app.post("/pricing-chart/:id", async (req, res) => {
	    const id = req.params.id;
	    await handleRequestFormData<typeof PricingChartKeys>(
		(key, value) => this.model.setPricingChartData(id, PricingChartKeys[key], value),
		PricingChartKeys, 
		Object.entries(req.body)
	    );
	    res.redirect(`/pricing-chart/${id}`);
	});

	// Students
	this.app.get("/students", async (req, res) => {
	    res.send(await StudentsPage(this.model));
	});
	this.app.get("/student/:id", async (req, res) => {
	    res.send(await StudentPage(this.model, req.params.id));
	});
	this.app.get("/new-student", async (req, res) => {
	    const newId: string = uuid();
	    await this.model.setStudentData(newId, StudentKeys.DateOfRegistration, stringifyDate(new Date()));
	    res.redirect(`/student/${newId}`);
	});
	this.app.get("/student-requirements/student/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.post("/student/:id", async (req, res) => {
	    const id = req.params.id;
	    await handleRequestFormData<typeof StudentKeys>(
		(key, value) => this.model.setStudentData(id, StudentKeys[key], value),
		StudentKeys, 
		Object.entries(req.body)
	    );
	    res.redirect(`/student/${id}`);
	});
	this.app.post("/student-requirement/:id", (req, res) => {
	    console.log(req.body);
	    res.send(req.params.id);
	});

	// Theory Classes
	this.app.get("/theory-classes", async (req, res) => {
	    const queryDate = req.query.date;
	    const date: string = typeof queryDate == "string" ? req.query.date as string : generateDateString();
	    res.send(await theoryClassesPage(this.model, date));
	});
	this.app.get("/theory-classes/student/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.get("/new-theory-class/:date", async (req, res) => {
	    const date: string = req.params.date;
	    const newId: string = uuid();
	    await this.model.setTheoryClassData(newId, TheoryClassKeys.Date, date)
	    res.redirect(`/theory-class/${newId}`);
	});
	this.app.get("/theory-class/:id", async (req, res) => {
	    res.send(await TheoryClassPage(this.model, req.params.id));
	});
	this.app.post("/theory-class/:id", async (req, res) => {
	    const id = req.params.id;
	    await handleRequestFormData<typeof TheoryClassKeys>(
		(key, value) => this.model.setTheoryClassData(id, TheoryClassKeys[key], value),
		TheoryClassKeys, 
		Object.entries(req.body)
	    );
	    res.redirect(`/theory-class/${id}`);
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
	this.app.get("/delete/student/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.get("/delete/student-requirement/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.get("/delete/theory-class/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.get("/delete/theory-class-attendance/:id", (req, res) => {
	    res.send(req.params.id);
	});
	this.app.get("/delete/practical-class/:id", (req, res) => {
	    res.send(req.params.id);
	});
    }
}

