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
const express_ws_1 = __importDefault(require("express-ws"));
const utility_1 = require("./utility");
const keys_1 = require("../Model/keys");
class Server {
    constructor(model) {
        this.tracker = new Map();
        const wsInstance = (0, express_ws_1.default)((0, express_1.default)());
        this.app = wsInstance.app;
        this.model = model;
    }
    start(port) {
        return new Promise((resolve) => {
            this.app.ws("/", (ws) => {
                ws.on("message", (messageBuffer) => {
                    const message = messageBuffer.toString();
                    this.handleWebSocketMessage(ws, message);
                });
            });
            this.app.use(express_1.default.static("Frontend/dist"));
            this.app.listen(port, () => {
                console.log(`### SERVER RUNNING ON PORT ${port} ###`);
                resolve();
            });
        });
    }
    // message handling
    handleWebSocketMessage(ws, message) {
        try {
            const parsedMessage = JSON.parse(message);
            // ensure properties exist
            if (typeof parsedMessage.messageId != "string") {
                throw "messageId not defined";
            }
            else if (typeof parsedMessage.methodName != "string") {
                throw "methodName not defined";
            }
            this.handleParsedMessage(this.model, ws, parsedMessage);
        }
        catch (e) {
            console.error(`could not parse message "${message}"`, e);
        }
    }
    handleParsedMessage(model, ws, message) {
        return __awaiter(this, void 0, void 0, function* () {
            function respond(code) {
                const response = (0, utility_1.createResponse)(message.messageId, code);
                ws.send(response);
            }
            function respondIncomplete() {
                respond(utility_1.ResponseCodes.MessageIncomplete);
            }
            function assistMethodExecution(keys, fn, enumeration) {
                return __awaiter(this, void 0, void 0, function* () {
                    const isComplete = (0, utility_1.confirmStringEntries)(message, keys);
                    if (isComplete == false) {
                        return respondIncomplete();
                    }
                    if (enumeration != undefined) {
                        const doesMatch = (0, utility_1.confirmStringInEnum)(enumeration, message.key);
                        if (doesMatch == false)
                            return respondIncomplete();
                    }
                    yield fn();
                });
            }
            function assistSetMethodExecution(keys, fn, enumeration) {
                return __awaiter(this, void 0, void 0, function* () {
                    assistMethodExecution(keys, () => __awaiter(this, void 0, void 0, function* () {
                        yield fn();
                        respond(utility_1.ResponseCodes.Success);
                    }), enumeration);
                });
            }
            function assistGetMethodExecution(keys, fn, enumeration) {
                return __awaiter(this, void 0, void 0, function* () {
                    assistMethodExecution(keys, () => __awaiter(this, void 0, void 0, function* () {
                        const response = Object.assign({ methodName: message.methodName }, yield fn());
                        const stringified = JSON.stringify(response);
                        ws.send(stringified);
                    }), enumeration);
                });
            }
            switch (message.methodName) {
                // set requests
                case "setSchoolData":
                    return assistSetMethodExecution(["key", "value"], () => __awaiter(this, void 0, void 0, function* () {
                        yield model.setSchoolData(message.key, message.value);
                    }), keys_1.SchoolKeys);
                case "setPricingChartData":
                    return assistSetMethodExecution(["chartId", "key", "value"], () => __awaiter(this, void 0, void 0, function* () {
                        yield model.setPricingChartData(message.chartId, message.key, message.value);
                    }), keys_1.PricingChartKeys);
                case "setStudentData":
                    return assistSetMethodExecution(["studentId", "key", "value"], () => __awaiter(this, void 0, void 0, function* () {
                        yield model.setStudentData(message.studentId, message.key, message.value);
                    }), keys_1.StudentKeys);
                case "setStudentLegalRequirementData":
                    return assistSetMethodExecution(["requirementId", "key", "value"], () => __awaiter(this, void 0, void 0, function* () {
                        yield model.setStudentLegalRequirementData(message.requirementId, message.key, message.value);
                    }), keys_1.StudentLegalRequirementKeys);
                case "setTheoryClassData":
                    return assistSetMethodExecution(["classId", "key", "value"], () => __awaiter(this, void 0, void 0, function* () {
                        yield model.setTheoryClassData(message.classId, message.key, message.value);
                    }), keys_1.TheoryClassKeys);
                case "addStudentToTheoryClass":
                    return assistSetMethodExecution(["classId", "studentId", "signature"], () => __awaiter(this, void 0, void 0, function* () {
                        yield model.addStudentToTheoryClass(message.classId, message.studentId, message.signature);
                    }));
                case "setPracticalClassData":
                    return assistSetMethodExecution(["classId", "key", "value"], () => __awaiter(this, void 0, void 0, function* () {
                        yield model.setPracticalClassData(message.classId, message.key, message.value);
                    }), keys_1.PracticalClassKeys);
                // get requests
                case "getSchoolData":
                    return assistGetMethodExecution(["key"], () => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        return {
                            key: message.key,
                            value: (_a = yield model.getSchoolData(message.key)) !== null && _a !== void 0 ? _a : "",
                        };
                    }), keys_1.SchoolKeys);
                case "getPricingChartData":
                    return assistGetMethodExecution(["chartId", "key", "value"], () => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        return {
                            entryId: message.chartId,
                            key: message.key,
                            value: (_a = yield model.getPricingChartData(message.chartId, message.key)) !== null && _a !== void 0 ? _a : "",
                        };
                    }), keys_1.PricingChartKeys);
                // default
                default:
                    return respond(utility_1.ResponseCodes.MethodNotFound);
            }
        });
    }
    // tracking
    updateTracking(ws, entry, newKeys) {
        var _a;
        const clientInfo = () => this.tracker.get(ws);
        const currentInfo = clientInfo();
        if (currentInfo == undefined || currentInfo.loadedEntry != entry) {
            const newInfo = {
                loadedEntry: entry,
                loadedKeys: [],
            };
            this.tracker.set(ws, newInfo);
        }
        (_a = clientInfo()) === null || _a === void 0 ? void 0 : _a.loadedKeys.push(...newKeys);
    }
}
exports.default = Server;
