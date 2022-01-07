"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printState = (formattedState) => {
    if (!formattedState.length) {
        console.log("No migrations recorded");
        return;
    }
    console.table(formattedState);
};
exports.default = printState;
