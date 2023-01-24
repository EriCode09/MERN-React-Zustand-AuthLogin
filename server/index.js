"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const DEFAULT_SERVER_PORT = 3000;
app_1.default.listen(DEFAULT_SERVER_PORT);
console.log(`Server live in port ${DEFAULT_SERVER_PORT}`);
