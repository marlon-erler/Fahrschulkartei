"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../Model/model"));
const server_1 = __importDefault(require("./server"));
const model = new model_1.default();
const server = new server_1.default(model);
server.start(8000);
