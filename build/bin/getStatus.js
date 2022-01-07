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
const printState_1 = __importDefault(require("../util/printState"));
const getFormattedState_1 = __importDefault(require("../util/getFormattedState"));
const types_1 = require("../types");
const printMissingDebugMessage_1 = __importDefault(require("../util/printMissingDebugMessage"));
const printSkippedDebugMessage_1 = __importDefault(require("../util/printSkippedDebugMessage"));
const getStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const formattedState = yield (0, getFormattedState_1.default)();
    (0, printState_1.default)(formattedState);
    const isThereAMissingMigration = formattedState.some(({ status }) => status === types_1.MIGRATION_STATUS.MISSING);
    if (isThereAMissingMigration) {
        (0, printMissingDebugMessage_1.default)();
    }
    const isThereASkippedMigration = formattedState.some(({ status }) => status === types_1.MIGRATION_STATUS.SKIPPED);
    if (isThereASkippedMigration) {
        (0, printSkippedDebugMessage_1.default)();
    }
});
exports.default = getStatus;
