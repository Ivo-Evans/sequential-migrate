import { RuntimeConfiguration } from "./configurationFile.types"

/**
 * A function which will be called to create a new migration file. This file is found by checking {@link RuntimeConfiguration.newMigrationBuilder}.
 * @param migrationsFolder The folder to write the migration to
 * @param name The name entered on the command line, if any, for the new migration
 */
export interface MigrationBuilder {
  build: (migrationsFolder: RuntimeConfiguration["migrations"], name?: string) => Promise<unknown>;
}

