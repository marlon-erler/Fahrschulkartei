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
        this.app.post("/school-data", (req, res) => {
            console.log(req.body);
            res.send("school-data");
        });
        // Pricing Charts
        this.app.get("/pricing-charts", (req, res) => {
            res.send("pricing charts");
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
exports.default = Server;
