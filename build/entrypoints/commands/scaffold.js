"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const exitSadPath_1 = __importDefault(require("../../util/exitSadPath"));
const copyDirectory_1 = __importDefault(require("../../util/copyDirectory"));
const scaffold = () => {
    const folderPath = path_1.default.join(process.cwd(), 'migration');
    const doesItAlreadyExist = fs_1.default.existsSync(folderPath);
    if (doesItAlreadyExist) {
        console.log(`\n\nWARN: ${folderPath} already exists`);
        return (0, exitSadPath_1.default)();
    }
    (0, copyDirectory_1.default)(path_1.default.join(__dirname, '..', 'scaffold'), folderPath);
};
exports.default = scaffold;
