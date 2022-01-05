"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const getFolderContentsAlphabetised = (folderPath) => {
    const files = (0, fs_1.readdirSync)(path_1.default.join(process.cwd(), folderPath));
    return files.sort((a, b) => a.localeCompare(b));
};
exports.default = getFolderContentsAlphabetised;
