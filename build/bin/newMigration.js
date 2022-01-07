"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getConfig_1 = __importDefault(require("../util/getConfig"));
const dynamicRequire_1 = __importDefault(require("../util/dynamicRequire"));
const newMigration = (name) => {
    const config = (0, getConfig_1.default)();
    const migrationBuilder = (0, dynamicRequire_1.default)(config.newMigrationBuilder);
    migrationBuilder(config.migrations, name);
};
exports.default = newMigration;
