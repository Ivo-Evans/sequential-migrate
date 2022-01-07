"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIG = void 0;
const dynamicRequire_1 = __importDefault(require("./dynamicRequire"));
exports.DEFAULT_CONFIG = {
    migrations: 'migration/migrations',
    newMigrationBuilder: 'migration/newMigrationBuilder',
    stateInterface: 'migration/stateInterface',
};
const getConfig = () => {
    try {
        const config = (0, dynamicRequire_1.default)('.migrationrc.js');
        return Object.assign(Object.assign({}, exports.DEFAULT_CONFIG), config);
    }
    catch (e) {
        console.log('Could not find config file, using defaults...');
        return exports.DEFAULT_CONFIG;
    }
};
exports.default = getConfig;
