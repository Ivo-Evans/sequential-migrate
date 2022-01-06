"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamicRequire_1 = __importDefault(require("./dynamicRequire"));
const DEFAULT_CONFIG = {
    migrations: 'migration/migrations',
    newMigrationBuilder: 'migration/newMigrationBuilder',
    stateInterface: 'migration/stateInterface',
};
const getConfig = () => {
    try {
        const config = (0, dynamicRequire_1.default)('.migrationrc.js');
        return Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
    }
    catch (e) {
        console.log('Could not find config file, using defaults...');
        return DEFAULT_CONFIG;
    }
};
exports.default = getConfig;
