#! /usr/bin/env node
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
const types_1 = require("../../types");
const scaffold_1 = __importDefault(require("./scaffold"));
const getStatus_1 = __importDefault(require("./getStatus"));
const newMigration_1 = __importDefault(require("./newMigration"));
const up_1 = __importDefault(require("../shared/up"));
const down_1 = __importDefault(require("../shared/down"));
const help_1 = __importDefault(require("./help"));
const ciCheck_1 = __importDefault(require("./ciCheck"));
const { argv } = process;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    if (argv.includes(types_1.COMMAND.SCAFFOLD)) {
        yield (0, scaffold_1.default)();
    }
    else if (argv.includes(types_1.COMMAND.STATUS)) {
        yield (0, getStatus_1.default)();
    }
    else if (argv.includes(types_1.COMMAND.NEW)) {
        const name = argv[argv.indexOf(types_1.COMMAND.NEW) + 1];
        yield (0, newMigration_1.default)(name);
    }
    else if (argv.includes(types_1.COMMAND.UP)) {
        const to = argv[argv.indexOf(types_1.COMMAND.UP) + 1];
        yield (0, up_1.default)(to);
    }
    else if (argv.includes(types_1.COMMAND.DOWN)) {
        const to = argv[argv.indexOf(types_1.COMMAND.DOWN) + 1];
        yield (0, down_1.default)(to);
    }
    else if (argv.includes(types_1.COMMAND.CHECK)) {
        yield (0, ciCheck_1.default)();
    }
    else {
        // no need to actually check for the help command because it is the default for unrecognised commands
        (0, help_1.default)();
    }
    process.exit(0);
});
main();
