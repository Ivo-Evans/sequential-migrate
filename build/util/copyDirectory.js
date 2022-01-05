"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const copyDirectory = (src, dest) => {
    fs_1.default.mkdirSync(dest, { recursive: true });
    let entries = fs_1.default.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        let srcPath = path_1.default.join(src, entry.name);
        let destPath = path_1.default.join(dest, entry.name);
        entry.isDirectory()
            ? copyDirectory(srcPath, destPath)
            : fs_1.default.copyFileSync(srcPath, destPath);
    }
};
exports.default = copyDirectory;
