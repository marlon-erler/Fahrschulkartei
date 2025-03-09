"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.default = practicalClassesPage;
const types_1 = require("../../Core/types");
const utility_1 = require("../../Core/utility");
const keys_1 = require("../../Model/keys");
const base_1 = __importDefault(require("../base"));
const formInline_1 = __importDefault(require("../formInline"));
const grid_1 = __importDefault(require("../grid"));
const group_1 = __importDefault(require("../group"));
const input_1 = __importDefault(require("../input"));
const modelItem_1 = __importDefault(require("../modelItem"));
const T = __importStar(require("../translations"));
function practicalClassesPage(model, day) {
    return __awaiter(this, void 0, void 0, function* () {
        const items = yield (0, modelItem_1.default)(() => __awaiter(this, void 0, void 0, function* () {
            const keys = yield model.getPracticalClassesForDay(day);
            const mapped = yield Promise.all(keys.map((key) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const date = (_a = yield model.getPracticalClassData(key, keys_1.PracticalClassKeys.Date)) !== null && _a !== void 0 ? _a : "";
                const time = yield model.getPracticalClassData(key, keys_1.PracticalClassKeys.StartTime);
                const student = yield model.getPracticalClassData(key, keys_1.PracticalClassKeys.Student);
                return [yield (0, utility_1.getPracticalClassName)(date, time, student), `/pratcical-class/${key}`];
            })));
            return mapped.sort((a, b) => a[0].localeCompare(b[0]));
        }));
        return (0, base_1.default)(T.Generic.PracticalClasses, [
            [types_1.ButtonStyles.Primary, T.Generic.CreateNew, "add", `/new-practical-class/${day}`],
        ], (0, group_1.default)(T.Generic.PracticalClasses, "", (0, formInline_1.default)("/practical-classes", "GET", T.Generic.ClassDate, (0, input_1.default)(day, "date", "date")), "<hr>", (0, grid_1.default)(190, ...items)));
    });
}
