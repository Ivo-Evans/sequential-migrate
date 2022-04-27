import { LastMigrationResult } from "./LastMigrationResult.types";

/**
 * The value exported by a migration created by {@link MigrationBuilder.build}.
 */
export interface MigrationScript {
  /** Description of the migration. Can be empty string */
  description: string;
  /** Function called with `await` to perform the migration */
  up: (lastMigrationResult?: LastMigrationResult) => Promise<unknown>;
  /** Function called with `await` to roll back the migration */
  down: (lastMigrationResult?: LastMigrationResult) => Promise<unknown>;
}
