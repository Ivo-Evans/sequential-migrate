"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printState = (inferredState) => {
    if (!inferredState.length) {
        console.log("No migrations recorded");
        return;
    }
    console.table(inferredState);
};
exports.default = printState;
