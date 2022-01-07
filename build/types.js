"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIGRATION_STATUS = exports.COMMAND = void 0;
var COMMAND;
(function (COMMAND) {
    COMMAND["SCAFFOLD"] = "scaffold";
    COMMAND["STATUS"] = "status";
    COMMAND["NEW"] = "new";
    COMMAND["UP"] = "up";
    COMMAND["DOWN"] = "down";
})(COMMAND = exports.COMMAND || (exports.COMMAND = {}));
var MIGRATION_STATUS;
(function (MIGRATION_STATUS) {
    MIGRATION_STATUS["PENDING"] = "\u3030\uFE0F PENDING";
    MIGRATION_STATUS["RUN"] = "\u2705 RUN";
    MIGRATION_STATUS["SKIPPED"] = "\u274C SKIPPED";
    MIGRATION_STATUS["MISSING"] = "\u274C MISSING";
})(MIGRATION_STATUS = exports.MIGRATION_STATUS || (exports.MIGRATION_STATUS = {}));
