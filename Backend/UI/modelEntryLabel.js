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
const types_1 = require("../Core/types");
const utility_1 = require("../Core/utility");
const input_1 = __importDefault(require("./input"));
const label_1 = __importDefault(require("./label"));
const select_1 = __importDefault(require("./select"));
function UIModelEntryLabels(model, getData, dataMap) {
    return __awaiter(this, void 0, void 0, function* () {
        const allEntries = yield Promise.all(Object.entries(dataMap).map((entry) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            if (entry[1] == undefined)
                return undefined;
            const key = entry[0];
            const translationData = entry[1];
            const value = translationData.converter((_a = yield getData(key)) !== null && _a !== void 0 ? _a : "");
            let element = "";
            if (translationData.selectType != undefined) {
                let options;
                switch (translationData.selectType) {
                    case types_1.SelectTypes.PricingCharts: {
                        const optionIds = yield model.getPricingCharts();
                        options = optionIds
                            .reverse()
                            .map(x => [x, (0, utility_1.formatStringifiedDateAndTime)(x)]);
                    }
                }
                element = (0, select_1.default)(value, key, ...options);
            }
            else {
                element = (0, input_1.default)(value, key, (_b = translationData.inputType) !== null && _b !== void 0 ? _b : "text", (_c = translationData.isDisabled) !== null && _c !== void 0 ? _c : false);
            }
            return (0, label_1.default)(translationData.translation, element);
        })));
        return allEntries.filter(x => x != undefined);
    });
}
