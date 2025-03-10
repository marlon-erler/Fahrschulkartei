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
exports.default = StudentPage;
const types_1 = require("../../Core/types");
const utility_1 = require("../../Core/utility");
const keys_1 = require("../../Model/keys");
const base_1 = __importDefault(require("../base"));
const button_1 = __importDefault(require("../button"));
const form_1 = __importDefault(require("../form"));
const group_1 = __importDefault(require("../group"));
const modelEntryLabel_1 = __importDefault(require("../modelEntryLabel"));
const T = __importStar(require("../translations"));
function StudentPage(model, studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        const inputs = yield (0, modelEntryLabel_1.default)(model, (key) => model.getStudentData(studentId, keys_1.StudentKeys[key]), T.StudentTranslations);
        const title = yield (0, utility_1.getStudentName)(model, studentId);
        const pricingChartId = yield model.getStudentData(studentId, keys_1.StudentKeys.Prices);
        const buttons = [
            [types_1.ButtonStyles.Destructive, T.Generic.Delete, "delete", "/"],
        ];
        if (pricingChartId != undefined) {
            buttons.push([types_1.ButtonStyles.Standard, T.Generic.ShowStudentPrices, "arrow_forward", `/pricing-chart/${pricingChartId}`]);
        }
        return (0, base_1.default)(T.Generic.Students, buttons, (0, form_1.default)(`/student/${studentId}`, "POST", (0, group_1.default)(title, "student", ...inputs, (0, button_1.default)(T.Generic.Save, "primary"))));
    });
}
