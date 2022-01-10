#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const scaffold_1 = __importDefault(require("./bin/scaffold"));
const getStatus_1 = __importDefault(require("./bin/getStatus"));
const newMigration_1 = __importDefault(require("./bin/newMigration"));
const up_1 = __importDefault(require("./bin/up"));
const down_1 = __importDefault(require("./bin/down"));
const help_1 = __importDefault(require("./bin/help"));
const { argv } = process;
if (argv.includes(types_1.COMMAND.SCAFFOLD)) {
    (0, scaffold_1.default)();
}
else if (argv.includes(types_1.COMMAND.STATUS)) {
    (0, getStatus_1.default)();
}
else if (argv.includes(types_1.COMMAND.NEW)) {
    const name = argv[argv.indexOf(types_1.COMMAND.NEW) + 1];
    (0, newMigration_1.default)(name);
}
else if (argv.includes(types_1.COMMAND.UP)) {
    const to = argv[argv.indexOf(types_1.COMMAND.UP) + 1];
    (0, up_1.default)(to);
}
else if (argv.includes(types_1.COMMAND.DOWN)) {
    const to = argv[argv.indexOf(types_1.COMMAND.UP) + 1];
    (0, down_1.default)(to);
}
else {
    // no need to actually check for the help command because it is the default for unrecoggnised commands
    (0, help_1.default)();
}
