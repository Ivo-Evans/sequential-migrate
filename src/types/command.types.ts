/**
 * These are the commands available to the user
 */
export enum COMMAND {
  /**
   * Usage:
   * 
   * ```
   * sequential-migrate scaffold
   * ```
   * 
   * No arguments.
   * 
   * 
   * Initialises the framework by creating the required files in the `migration` folder at the root of your project. The framework is initialised with a minimal example for Postgres which can be customised to your needs. The required files are:
   * 
   * ```
   * migration/
   *   migrations/
   *   newMigrationBuilder.js
   *   stateInterface.js
   * ```
   * 
   * New files and folders in `migrations/` can be created by runing {@link COMMAND.NEW | new}. This calls `newMigrationBuilder.js`, which should use CommonJS (`module.exports`) to export a {@link MigrationBuilder} object. 
   * 
   * Migrations in the `migrations` folder should be sorted alphabetically from oldest to newest. For this reason, the default {@link MigrationBuilder} prepends migrations with a timestamp.
   * 
   * Migrations can be either files or folders containing `index.js` files. For instance, this would be valid:
   * 
   * 
   * ```
   * .
   * ├── migrations
   * │ ├── 01
   * │ │ └── index.js
   * │ └── 02.js
   * ```
   * 
   * The commands {@link COMMAND.UP | up}, {@link COMMAND.DOWN | down} and {@link COMMAND.STATUS | status} use `stateInterface.js`. `stateInterface.js` should use CommonJS to export an object which meets the {@link StateScript} interface. 
   * 
   * The location of all the files created by {@link COMMAND.NEW} can be customised after the command has been run by placing a `.migrationrc.js` at the root of your project. The `.migrationrc.js` should export an object with the {@link ConfigurationFile} interface.
   */

  SCAFFOLD = "scaffold",
  /**
   * Usage:
   * 
   * ```
   * sequential-migrate status
   * ```
   * 
   * No arguments.
   * 
   * Reads the `migrations` folder and displays a list of migrations along with their {@link MIGRATION_STATUS}
   */

  STATUS = "status",
  /**
   * Usage:
   * 
   * ```
   * sequential-migrate new
   * sequential-migrate new create-users-table
   * ```
   * 
   * Accepts migration name as an optional second argument, which is passed to the {@link MigrationBuilder.build} function.
   * 
   * Creates a new blank migration in the `migrations` folder or folder specified in a custom {@link RuntimeConfiguration} by calling {@link MigrationBuilder.build}.
   */

  NEW = "new",
  /**
   * Usage:
   * 
   * ```
   * sequential-migrate up
   * sequential-migrate up 1641813498181
   * ```
   * 
   * Accepts a migration name as a second optional argument. Runs the {@link up} library function, passing a migration name, if provided, as the first argument. See that entry for further details.
   * 
   */

  UP = "up",
    /**
   * Usage:
   * 
   * ```
   * sequential-migrate down
   * sequential-migrate down 1641813498181
   * ```
   * 
   * Accepts a migration name as a second optional argument. Runs the {@link down} library function, passing a migration name, if provided, as the first argument. See that entry for further details.
   * */

  DOWN = "down",
  /**
   * Usage:
   * 
   * ```
   * sequential-migrate help
   * ```
   * 
   * Prints the list of commands
   */
  HELP = "help",

  /**
   * A command to use in automated environments like CI/CD pipelines.
   * 
   * Exits with code 1 and logs {@link EXIT_MESSAGE.ABORT} if the migration state contains a {@link MIGRATION_STATUS.MISSING | mising} or {@link MIGRATION_STATUS.SKIPPED | skipped} migration. If the migration state is OK, it exits with code 0 and logs {@link EXIT_MESSAGE.OK}. 
   * 
   */
  CHECK = "ci-check"
}