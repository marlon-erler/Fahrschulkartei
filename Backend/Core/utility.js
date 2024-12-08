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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCodes = void 0;
exports.uuid = uuid;
exports.formatDate = formatDate;
exports.formatTime = formatTime;
exports.generatePricingChartId = generatePricingChartId;
exports.generateStudentId = generateStudentId;
exports.generateTheoryClassId = generateTheoryClassId;
exports.generateTheoryAttendanceId = generateTheoryAttendanceId;
exports.generatePracticalClassId = generatePracticalClassId;
exports.createResponse = createResponse;
exports.confirmStringEntries = confirmStringEntries;
exports.confirmStringInEnum = confirmStringInEnum;
const UUID = __importStar(require("uuid"));
/*
 * General
 */
function uuid() {
    return UUID.v4();
}
/*
 * Format
 */
function formatDate(date) {
    return date.getUTCFullYear().toString() + (date.getUTCMonth() + 1).toString() + date.getUTCDate().toString();
}
function formatTime(time) {
    return time.getUTCHours().toString() + time.getUTCMinutes().toString();
}
/*
 * IDs
 */
function generatePricingChartId(date, time) {
    return date + time;
}
function generateStudentId(firstName, lastName, dateOfBirth) {
    return lastName + firstName + dateOfBirth;
}
function generateTheoryClassId(date, time) {
    return date + time;
}
function generateTheoryAttendanceId(classId, studentId) {
    return classId + studentId;
}
function generatePracticalClassId(date, time, studentId) {
    return date + time + studentId;
}
/*
 * Messaging
 */
var ResponseCodes;
(function (ResponseCodes) {
    ResponseCodes["Success"] = "S";
    ResponseCodes["UnknownError"] = "E0";
    ResponseCodes["MethodNotFound"] = "E1";
    ResponseCodes["MessageIncomplete"] = "E2";
    ResponseCodes["DataNotFound"] = "E3";
})(ResponseCodes || (exports.ResponseCodes = ResponseCodes = {}));
function createResponse(messageId, code) {
    const object = {
        messageId,
        code,
    };
    return JSON.stringify(object);
}
/*
 * Safety
 */
function confirmStringEntries(object, keys) {
    for (const key of keys) {
        const value = object[key];
        if (typeof value != "string") {
            return false;
        }
    }
    return true;
}
function confirmStringInEnum(enumeration, string) {
    return string in Object.values(enumeration);
}
