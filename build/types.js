"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIGRATION_STATUS = void 0;
var MIGRATION_STATUS;
(function (MIGRATION_STATUS) {
    MIGRATION_STATUS["PENDING"] = "Pending";
    MIGRATION_STATUS["RAN"] = "Ran";
    MIGRATION_STATUS["SKIPPED"] = "Present in the migrations but missing in the state - was this added in another branch, but not run in this branch?";
    MIGRATION_STATUS["MISSING"] = "Missing from the migrations but present in the state - was this run in another branch, but not added in this branch?";
})(MIGRATION_STATUS = exports.MIGRATION_STATUS || (exports.MIGRATION_STATUS = {}));
