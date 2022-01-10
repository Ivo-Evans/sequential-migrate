"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIG = void 0;
const dynamicRequire_1 = __importDefault(require("./dynamicRequire"));
exports.DEFAULT_CONFIG = {
    migrations: 'migration/migrations',
    newMigrationBuilder: 'migration/newMigrationBuilder',
    stateScript: 'migration/stateScript',
};
const getConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = yield (0, dynamicRequire_1.default)('.migrationrc.js');
        return Object.assign(Object.assign({}, exports.DEFAULT_CONFIG), config);
    }
    catch (e) {
        console.log('Could not find config file, using defaults...');
        return exports.DEFAULT_CONFIG;
    }
});
exports.default = getConfig;
