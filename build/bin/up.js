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
const dynamicRequire_1 = __importDefault(require("../util/dynamicRequire"));
const getConfig_1 = __importDefault(require("../util/getConfig"));
const getFormattedState_1 = __importDefault(require("../util/getFormattedState"));
const migrateUp_1 = __importDefault(require("../util/migrateUp"));
const up = (to) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🍍   to", to);
    const config = (0, getConfig_1.default)();
    const formattedState = yield (0, getFormattedState_1.default)();
    const stateInterface = (0, dynamicRequire_1.default)(config.stateInterface);
    yield (0, migrateUp_1.default)(formattedState, stateInterface, to);
});
exports.default = up;
