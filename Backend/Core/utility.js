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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = uuid;
exports.handleRequestFormData = handleRequestFormData;
exports.padZero = padZero;
exports.stringifyDate = stringifyDate;
exports.formatStringifiedDateAndTime = formatStringifiedDateAndTime;
exports.formatStringifiedDate = formatStringifiedDate;
exports.formatName = formatName;
exports.formatDateStamp = formatDateStamp;
exports.getStudentName = getStudentName;
exports.getTheoryClassName = getTheoryClassName;
exports.getPracticalClassName = getPracticalClassName;
exports.generateDateBasedId = generateDateBasedId;
exports.generateDateString = generateDateString;
const UUID = __importStar(require("uuid"));
const keys_1 = require("../Model/keys");
const T = __importStar(require("../UI/translations"));
/*
 * General
 */
function uuid() {
    return UUID.v4();
}
/*
 * Processing
 */
function handleRequestFormData(setData, keyMap, entries) {
    return __awaiter(this, void 0, void 0, function* () {
        const keys = Object.keys(keyMap);
        for (const entry of entries) {
            const [key, value] = entry;
            if (keys.indexOf(key) == -1)
                return;
            if (typeof value != "string")
                return;
            console.log("dev", key, value);
            yield setData(key, value);
        }
    });
}
/*
 * Format
 */
function padZero(input, size) {
    return input.toString().padStart(size, "0");
}
function stringifyDate(date) {
    const parts = [
        padZero(date.getFullYear(), 4),
        ...[date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()].map(x => padZero(x, 2)),
    ];
    return parts.join("-");
}
function formatStringifiedDateAndTime(input) {
    const [year, month, date, hours, minutes] = input.split("-");
    return `${year}-${month}-${date} ${hours}:${minutes}`;
}
function formatStringifiedDate(input) {
    const [year, month, date] = input.split("-");
    return `${year}-${month}-${date}`;
}
function formatName(lastName, firstName) {
    if (lastName == "" || firstName == "")
        return false;
    return `${lastName}, ${firstName}`;
}
function formatDateStamp(date, time) {
    const formattedDate = formatStringifiedDate(date);
    return `${formattedDate} ${time}`;
}
function getStudentName(model, studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const lastName = (_a = yield model.getStudentData(studentId, keys_1.StudentKeys.LastName)) !== null && _a !== void 0 ? _a : "";
        const firstName = (_b = yield model.getStudentData(studentId, keys_1.StudentKeys.FirstName)) !== null && _b !== void 0 ? _b : "";
        return formatName(lastName, firstName) || T.Generic.StudentNameUnknown;
    });
}
function getTheoryClassName(model, classId) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const date = (_a = yield model.getTheoryClassData(classId, keys_1.TheoryClassKeys.Date)) !== null && _a !== void 0 ? _a : "";
        const time = (_b = yield model.getTheoryClassData(classId, keys_1.TheoryClassKeys.StartTime)) !== null && _b !== void 0 ? _b : "00:00";
        return formatDateStamp(date, time) || T.Generic.DateUnknown;
    });
}
function getPracticalClassName(date_1) {
    return __awaiter(this, arguments, void 0, function* (date, time = "00:00", student = T.Generic.StudentNameUnknown) {
        return `${formatDateStamp(date, time)}, ${student}`;
    });
}
/*
 * Generate
 */
function generateDateBasedId() {
    return stringifyDate(new Date());
}
function generateDateString() {
    return formatStringifiedDate(stringifyDate(new Date()));
}
