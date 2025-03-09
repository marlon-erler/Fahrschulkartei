"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const schoolData_1 = __importDefault(require("../UI/Pages/schoolData"));
const utility_1 = require("./utility");
const keys_1 = require("../Model/keys");
const pricingCharts_1 = __importDefault(require("../UI/Pages/pricingCharts"));
const pricingChart_1 = __importDefault(require("../UI/Pages/pricingChart"));
const students_1 = __importDefault(require("../UI/Pages/students"));
const student_1 = __importDefault(require("../UI/Pages/student"));
const theoryClasses_1 = __importDefault(require("../UI/Pages/theoryClasses"));
const theoryClass_1 = __importDefault(require("../UI/Pages/theoryClass"));
class Server {
    constructor(model) {
        this.app = (0, express_1.default)();
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.model = model;
    }
    start(port) {
        return new Promise((resolve) => {
            this.configureRoutes();
            this.app.use("/static", express_1.default.static("Frontend/static"));
            this.app.listen(port, () => {
                console.log(`### SERVER RUNNING ON PORT ${port} ###`);
                resolve();
            });
        });
    }
    configureRoutes() {
        // School Data
        this.app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield (0, schoolData_1.default)(this.model));
        }));
        this.app.post("/school-data", (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield (0, utility_1.handleRequestFormData)((key, value) => this.model.setSchoolData(keys_1.SchoolKeys[key], value), keys_1.SchoolKeys, Object.entries(req.body));
            res.redirect("/");
        }));
        // Pricing Charts
        this.app.get("/pricing-charts", (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield (0, pricingCharts_1.default)(this.model));
        }));
        this.app.get("/pricing-chart/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield (0, pricingChart_1.default)(this.model, req.params.id));
        }));
        this.app.get("/new-pricing-chart", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const chartId = (0, utility_1.generateDateBasedId)();
            yield this.model.setPricingChartData(chartId, keys_1.PricingChartKeys.Fahrstunde45Min, "");
            res.redirect(`/pricing-chart/${chartId}`);
        }));
        this.app.post("/pricing-chart/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield (0, utility_1.handleRequestFormData)((key, value) => this.model.setPricingChartData(id, keys_1.PricingChartKeys[key], value), keys_1.PricingChartKeys, Object.entries(req.body));
            res.redirect(`/pricing-chart/${id}`);
        }));
        // Students
        this.app.get("/students", (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield (0, students_1.default)(this.model));
        }));
        this.app.get("/student/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield (0, student_1.default)(this.model, req.params.id));
        }));
        this.app.get("/new-student", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const newId = (0, utility_1.uuid)();
            yield this.model.setStudentData(newId, keys_1.StudentKeys.DateOfRegistration, (0, utility_1.stringifyDate)(new Date()));
            res.redirect(`/student/${newId}`);
        }));
        this.app.get("/student-requirements/student/:id", (req, res) => {
            res.send(req.params.id);
        });
        this.app.post("/student/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield (0, utility_1.handleRequestFormData)((key, value) => this.model.setStudentData(id, keys_1.StudentKeys[key], value), keys_1.StudentKeys, Object.entries(req.body));
            res.redirect(`/student/${id}`);
        }));
        this.app.post("/student-requirement/:id", (req, res) => {
            console.log(req.body);
            res.send(req.params.id);
        });
        // Theory Classes
        this.app.get("/theory-classes", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const queryDate = req.query.date;
            const date = typeof queryDate == "string" ? req.query.date : (0, utility_1.generateDateString)();
            res.send(yield (0, theoryClasses_1.default)(this.model, date));
        }));
        this.app.get("/theory-classes/student/:id", (req, res) => {
            res.send(req.params.id);
        });
        this.app.get("/new-theory-class/:date", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const date = req.params.date;
            const newId = (0, utility_1.uuid)();
            yield this.model.setTheoryClassData(newId, keys_1.TheoryClassKeys.Date, date);
            res.redirect(`/theory-class/${newId}`);
        }));
        this.app.get("/theory-class/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield (0, theoryClass_1.default)(this.model, req.params.id));
        }));
        this.app.post("/theory-class/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield (0, utility_1.handleRequestFormData)((key, value) => this.model.setTheoryClassData(id, keys_1.TheoryClassKeys[key], value), keys_1.TheoryClassKeys, Object.entries(req.body));
            res.redirect(`/theory-class/${id}`);
        }));
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
exports.default = Server;
