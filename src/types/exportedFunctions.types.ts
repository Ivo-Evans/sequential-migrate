import { InferredState } from ".";


/**
 * Runs {@link MIGRATION_STATUS.PENDING | pending} migrations from the most recent {@link MIGRATION_STATUS.RUN | run} migration up to (and including) the migration supplied, or to the most recent migration if none is supplied.
 *
 * `up` halts and exits if it encounters a migration with status {@link MIGRATION_STATUS.MISSING | missing} or {@link MIGRATION_STATUS.SKIPPED | skipped}, running all migrations it has already encountered.
 *
 * `up` runs {@link MigrationScript.up} before {@link StateScript.add}. This means that your first migration can be the one that creates the migration table or collection in your database. Just make sure that your {@link StateScript} can handle a table that doesn't exist.
 * 
 *
 * @param to - the name of the migration to migrate up to
 * @category Library Exports
 */
export type up = (to?: string) => Promise<void>;

/**
 * Rolls back {@link MIGRATION_STATUS.RUN | run} migrations down to (but not including) the named migration. If no migration is provided, rolls back all migrations.
 *
 * The `down` script halts and exits if it encounters a migration with status {@link MIGRATION_STATUS.MISSING | missing} or {@link MIGRATION_STATUS.SKIPPED | skipped}, running all migrations it has already encountered.
 * 
 * @param to - the name of the migration to migrate down to
 * @category Library Exports
 *
 */
export type down = (to?: string) => Promise<void>;

/**
 * Compares the `migrations` folder with the value returned by {@link StateScript.get} to return the {@link InferredState}. For convenience, booleans indicating whether there are {@link MIGRATION_STATUS.MISSING | missing} and {@link MIGRATION_STATUS.SKIPPED | skipped} migrations are also returned.
 @category Library Exports
 */
export type getStatus = () => Promise<{
  state: InferredState;
  containsMissing: boolean;
  containsSkipped: boolean;
}>;
