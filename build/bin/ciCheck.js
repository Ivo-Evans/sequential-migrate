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
const getInferredState_1 = __importDefault(require("../util/getInferredState"));
const types_1 = require("../types");
const exitSadPath_1 = __importDefault(require("../util/exitSadPath"));
const exitHappyPath_1 = __importDefault(require("../util/exitHappyPath"));
const ciCheck = () => __awaiter(void 0, void 0, void 0, function* () {
    const inferredState = yield (0, getInferredState_1.default)();
    const isThereAMissingMigration = inferredState.some(({ status }) => status === types_1.MIGRATION_STATUS.MISSING);
    const isThereASkippedMigration = inferredState.some(({ status }) => status === types_1.MIGRATION_STATUS.SKIPPED);
    if (isThereAMissingMigration || isThereASkippedMigration) {
        return (0, exitSadPath_1.default)();
    }
    return (isThereAMissingMigration || isThereASkippedMigration) ? (0, exitSadPath_1.default)() : (0, exitHappyPath_1.default)();
});
exports.default = ciCheck;
