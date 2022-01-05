#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scaffold_1 = __importDefault(require("./bin/scaffold"));
const getStatus_1 = __importDefault(require("./bin/getStatus"));
const newMigration_1 = __importDefault(require("./bin/newMigration"));
const up_1 = __importDefault(require("./bin/up"));
const down_1 = __importDefault(require("./bin/down"));
const { argv } = process;
if (argv.includes('scaffold')) {
    (0, scaffold_1.default)();
}
else if (argv.includes('status')) {
    (0, getStatus_1.default)();
}
else if (argv.includes('new')) {
    (0, newMigration_1.default)();
}
else if (argv.includes('up')) {
    (0, up_1.default)();
}
else if (argv.includes('down')) {
    (0, down_1.default)();
}
