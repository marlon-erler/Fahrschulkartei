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
exports.default = UIModelEntryLabels;
const input_1 = __importDefault(require("./input"));
const label_1 = __importDefault(require("./label"));
function UIModelEntryLabels(getData, keys, translations) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.all(Object.entries(translations).map((entry) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const key = entry[0];
            const value = entry[1];
            const data = (_a = yield getData(key)) !== null && _a !== void 0 ? _a : "";
            console.log(key, keys[key], data);
            return (0, label_1.default)(value, (0, input_1.default)(data, key));
        })));
    });
}
