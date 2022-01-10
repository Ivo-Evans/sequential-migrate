import { RuntimeConfiguration } from "./configurationFile.types"

/**
 * The export of   {@link RuntimeConfiguration.newMigrationBuilder}.
 */
export interface MigrationBuilder {
  /**
    * A function which will be called to create a new migration file.
 * @param migrationsFolder The folder to write the migration to
 * @param name The name entered on the command line, if any, for the new migration
   */
  build: (migrationsFolder: RuntimeConfiguration["migrations"], name?: string) => Promise<unknown>;
}

