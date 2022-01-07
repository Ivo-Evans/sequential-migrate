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
const rollbackMigration_1 = __importDefault(require("./rollbackMigration"));
const migrateDown = (formattedState, stateInterface, to) => __awaiter(void 0, void 0, void 0, function* () {
    loop: for (let i = formattedState.length - 1; i >= 0; i--) {
        const stateItem = formattedState[i];
        if (stateItem.name === to) {
            break;
        }
        switch (stateItem.status) {
            case types_1.MIGRATION_STATUS.PENDING:
                continue;
            case types_1.MIGRATION_STATUS.MISSING:
            case types_1.MIGRATION_STATUS.SKIPPED:
                console.log(`Stopped at ${stateItem.name} because it has status ${stateItem.status}`);
                break loop;
            case types_1.MIGRATION_STATUS.RUN:
                yield (0, rollbackMigration_1.default)(stateItem, stateInterface);
                break;
            default:
                throw new Error(`Item at index ${i} of state has an invalid status`);
        }
    }
});
exports.default = migrateDown;
