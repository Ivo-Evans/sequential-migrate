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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getConfig_1 = __importDefault(require("./getConfig"));
const getState_1 = __importDefault(require("./getState"));
const inferState_1 = __importDefault(require("./inferState"));
const hasDuplicates_1 = __importDefault(require("./hasDuplicates"));
const abortProgram_1 = __importDefault(require("./abortProgram"));
const getInferredState = () => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield (0, getConfig_1.default)();
    const migrationNames = fs_1.default.readdirSync(path_1.default.join(process.cwd(), config.migrations));
    const areThereDuplicateMigrations = (0, hasDuplicates_1.default)(migrationNames.map(migrationName => migrationName.replace(/\.[jt]s$/, '')));
    if (areThereDuplicateMigrations) {
        console.error("Two migration scripts with the same name detected");
        return (0, abortProgram_1.default)();
    }
    const state = yield (0, getState_1.default)(config.stateScript);
    const isThereDuplicateState = (0, hasDuplicates_1.default)(state.map(stateItem => stateItem.name));
    if (isThereDuplicateState) {
        console.error("Two state entries with the same name detected");
        return (0, abortProgram_1.default)();
    }
    const inferredState = (0, inferState_1.default)(migrationNames, state);
    return inferredState;
});
exports.default = getInferredState;
