"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicRequire = void 0;
const path_1 = __importDefault(require("path"));
// don't require from my location, require from the user's location
const dynamicRequire = (requirePath) => require(path_1.default.join(process.cwd(), requirePath));
exports.dynamicRequire = dynamicRequire;
exports.default = exports.dynamicRequire;
