"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIGRATION_STATUS = void 0;
/**
 * The possible statuses of a migration. These are determined during the runtime of the CLI by comparing the migrations folder with the stored state.
 */
var MIGRATION_STATUS;
(function (MIGRATION_STATUS) {
    /**
     * The migration is present in the migrations folder, but not reported by {@link StateScript.get}. Furthermore, there is no later migration with {@link MIGRATION_STATUS.RUN}.
     */
    MIGRATION_STATUS["PENDING"] = "\u3030\uFE0F PENDING";
    /**
     * The migration is present in the migrations folder, and is reported by {@link StateScript.get}.
     */
    MIGRATION_STATUS["RUN"] = "\u2705 RUN";
    /**
       * The migration is present in the migrations folder, but not reported by {@link StateScript.get}. However, there is a later migration with {@link MIGRATION_STATUS.RUN}, indicating that the integrity of the migrations has been compromised.
       */
    MIGRATION_STATUS["SKIPPED"] = "\u274C SKIPPED";
    /**
     * The mgiration has been reported by {@link StateScript.get}, but can't be found in the migrations folder, indicating that the integrity of the migrations has been compromised.
     */
    MIGRATION_STATUS["MISSING"] = "\u274C MISSING";
})(MIGRATION_STATUS = exports.MIGRATION_STATUS || (exports.MIGRATION_STATUS = {}));
