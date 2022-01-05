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
const getConfig_1 = __importDefault(require("../util/getConfig"));
const getFolderContentsAlphabetised_1 = __importDefault(require("../util/getFolderContentsAlphabetised"));
const getState_1 = __importDefault(require("../util/getState"));
const formatState_1 = __importDefault(require("../util/formatState"));
const getFormattedState = () => __awaiter(void 0, void 0, void 0, function* () {
    const config = (0, getConfig_1.default)();
    const migrationNames = (0, getFolderContentsAlphabetised_1.default)(config.migrations);
    const state = yield (0, getState_1.default)(config.stateInterface);
    const formattedState = (0, formatState_1.default)(migrationNames, state);
    return formattedState;
});
exports.default = getFormattedState;
