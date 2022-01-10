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
const dynamicRequire_1 = __importDefault(require("./dynamicRequire"));
const runMigration = (config, stateItem, stateScript) => __awaiter(void 0, void 0, void 0, function* () {
    const migrationScript = yield (0, dynamicRequire_1.default)(config.migrations, stateItem.name);
    yield migrationScript.up();
    const state = yield stateScript.get();
    const newState = [
        ...state,
        {
            name: stateItem.name,
            description: stateItem.description,
            runAt: Date.now(),
        },
    ];
    yield stateScript.set(newState);
});
exports.default = runMigration;
