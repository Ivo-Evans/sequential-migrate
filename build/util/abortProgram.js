"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exitMessage_types_1 = require("../types/exitMessage.types");
const abortProgram = () => {
    console.error(exitMessage_types_1.EXIT_MESSAGE.ABORT);
    process.exit(1);
};
exports.default = abortProgram;
