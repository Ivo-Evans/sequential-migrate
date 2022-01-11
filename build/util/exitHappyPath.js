"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exitMessage_types_1 = require("../types/exitMessage.types");
const exitHappyPath = () => {
    console.log(exitMessage_types_1.EXIT_MESSAGE.OK);
    process.exit(0);
};
exports.default = exitHappyPath;
