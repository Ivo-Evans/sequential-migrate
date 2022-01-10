/**
 * The possible statuses of a migration. These are determined during the runtime of the CLI by comparing the migrations folder with the stored state.
 */
export declare enum MIGRATION_STATUS {
    /**
     * The migration is present in the migrations folder, but not reported by {@link StateScript.get}. Furthermore, there is no later migration with {@link MIGRATION_STATUS.RUN}.
     */
    PENDING = "\u3030\uFE0F PENDING",
    /**
     * The migration is present in the migrations folder, and is reported by {@link StateScript.get}.
     */
    RUN = "\u2705 RUN",
    /**
       * The migration is present in the migrations folder, but not reported by {@link StateScript.get}. However, there is a later migration with {@link MIGRATION_STATUS.RUN}, indicating that the integrity of the migrations has been compromised.
       */
    SKIPPED = "\u274C SKIPPED",
    /**
     * The migration has been reported by {@link StateScript.get}, but can't be found in the migrations folder, indicating that the integrity of the migrations has been compromised.
     */
    MISSING = "\u274C MISSING"
}
