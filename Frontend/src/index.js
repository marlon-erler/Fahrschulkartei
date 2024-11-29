"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@pwa-fundament/stylesheet/index.css");
require("@pwa-fundament/themes/themes/standard");
const themes_1 = require("@pwa-fundament/themes");
const viewRoot_1 = __importDefault(require("./Main/viewRoot"));
// prepare
document.title = "PWA Fundament";
(0, themes_1.setTheme)("standard");
// build UI
document.body.append((0, viewRoot_1.default)());
