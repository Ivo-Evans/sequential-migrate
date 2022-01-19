import { InferredState } from ".";
/**
 * Runs {@link MIGRATION_STATUS.PENDING | pending} migrations from the most recent {@link MIGRATION_STATUS.RUN | run} migration up to (and including) the migration supplied, or to the most recent migration if none is supplied.
 *
 * `up` halts and exits if it encounters a migration with status {@link MIGRATION_STATUS.MISSING | missing} or {@link MIGRATION_STATUS.SKIPPED | skipped}, running all migrations it has already encountered.
 *
 * `up` runs {@link MigrationScript.up} before {@link StateScript.add}. This means that your first migration can be the one that creates the migration table or collection in your database. Just make sure that {@link StateScript.get} can handle a table that doesn't exist.
 *
 *
 * @param to - the name of the migration to migrate up to
 */
export declare type up = (to?: string) => Promise<void>;
/**
  * Rolls back {@link MIGRATION_STATUS.RUN | run} migrations down to (but not including) the named migration. If no migration is provided, and there are no {@link MIGRATION_STATUS.MISSING | mising} or {@link MIGRATION_STATUS.SKIPPED | skipped} migrations, rolls back all migrations.
 *
 * The `down` script halts and exits if it encounters a migration with status {@link MIGRATION_STATUS.MISSING | missing} or {@link MIGRATION_STATUS.SKIPPED | skipped}, running all migrations it has already encountered.
 *
 * @param to - the name of the migration to migrate down to
 *
 */
export declare type down = (to?: string) => Promise<void>;
/**
 * Reads the `migrations` folder and returns the {@link InferredState}. For convenience, booleans indicating whether there are {@link MIGRATION_STATUS.MISSING | missing} and {@link MIGRATION_STATUS.SKIPPED | skipped} migrations are also returned.
 */
export declare type getStatus = () => Promise<{
    state: InferredState;
    containsMissing: boolean;
    containsSkipped: boolean;
}>;
