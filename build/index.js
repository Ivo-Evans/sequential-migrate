#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getStatus_1 = __importDefault(require("./bin/getStatus"));
const newMigration_1 = __importDefault(require("./bin/newMigration"));
const { argv } = process;
if (argv.includes('status')) {
    (0, getStatus_1.default)();
}
else if (argv.includes('new')) {
    (0, newMigration_1.default)();
}
else if (argv.includes('up')) {
    console.log("up");
}
else if (argv.includes("down")) {
    console.log("Down");
}
