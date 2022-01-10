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
const types_1 = require("../types");
const runMigration_1 = __importDefault(require("./runMigration"));
const migrateUp = (inferredState, stateScript, to) => __awaiter(void 0, void 0, void 0, function* () {
    loop: for (let i = 0; i < inferredState.length; i++) {
        const stateItem = inferredState[i];
        switch (stateItem.status) {
            case types_1.MIGRATION_STATUS.RUN:
                continue;
            case types_1.MIGRATION_STATUS.MISSING:
            case types_1.MIGRATION_STATUS.SKIPPED:
                console.log(`Stopped at ${stateItem.name} because it has status ${stateItem.status}`);
                break loop;
            case types_1.MIGRATION_STATUS.PENDING:
                yield (0, runMigration_1.default)(stateItem, stateScript);
                break;
            default:
                throw new Error(`Item at index ${i} of state has invalid status`);
        }
        if (stateItem.name === to) {
            break;
        }
    }
});
exports.default = migrateUp;
