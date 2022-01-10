"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasDuplicates = (inputArray) => new Set(inputArray).size !== inputArray.length;
exports.default = hasDuplicates;
