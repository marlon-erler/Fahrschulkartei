"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor(model) {
        this.app = (0, express_1.default)();
        this.app.use(body_parser_1.default.json());
        this.model = model;
    }
    start(port) {
        return new Promise((resolve) => {
            this.configureRoutes();
            this.app.listen(port, () => {
                console.log(`### SERVER RUNNING ON PORT ${port} ###`);
                resolve();
            });
        });
    }
    configureRoutes() {
        // School Data
        this.app.get("/school-data", (req, res) => {
            res.send("school-data");
        });
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
    }
}
exports.default = Server;
