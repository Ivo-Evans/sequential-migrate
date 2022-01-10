"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMAND = void 0;
/**
 * These are the commands available to the program
 */
var COMMAND;
(function (COMMAND) {
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
     * Initialises the framework by creating the required files in the `migration` folder at the root of your project.
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
     * Migrations can either files or folders containing `index.js` files. For instance, this would be valid:
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
     * The location of all the files created by {@link COMMAND.NEW} can be customised by placing a `.migrationrc.js` at the root of your project. The `.migrationrc.js` should export an object meeting the {@link ConfigurationFile} interface.
     */
    COMMAND["SCAFFOLD"] = "scaffold";
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
    COMMAND["STATUS"] = "status";
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
    COMMAND["NEW"] = "new";
    /**
     * Usage:
     *
     * ```
     * sequential-migrate up
     * sequential-migrate up 1641813498181
     * ```
     *
     * Accepts a migration name as a second optional argument
     *
     * Runs {@link MIGRATION_STATUS.PENDING | pending} migrations from the most recent {@link MIGRATION_STATUS.RUN | run} migration up to (and including) the named migration, or the most recent migration if no migration name is provided.
     *
     * The `up` script halts and exits if it encounters a migration with status {@link MIGRATION_STATUS.MISSING | missing} or {@link MIGRATION_STATUS.SKIPPED | skipped}, running all migrations it has already encountered.
     *
     * The `up` script runs {@link MigrationScript.up} before {@link StateScript.set}. This means that your first migration can be the one that creates the migration table or collection in your database. Just make sure that {@link StateScript.get} can handle a table that doesn't exist.
     */
    COMMAND["UP"] = "up";
    /**
   * Usage:
   *
   * ```
   * sequential-migrate down
   * sequential-migrate down 1641813498181
   * ```
   *
   * Accepts a migration name as a second optional argument
   *
   * Rolls back {@link MIGRATION_STATUS.RUN | run} migrations down to (but not including) the named migration. If no migration is provided, and there are no {@link MIGRATION_STATUS.MISSING | mising} or {@link MIGRATION_STATUS.SKIPPED | skipped} migrations, rolls back all migrations.
   *
   * The `up` script halts and exits if it encounters a migration with status {@link MIGRATION_STATUS.MISSING | missing} or {@link MIGRATION_STATUS.SKIPPED | skipped}, running all migrations it has already encountered.
   * */
    COMMAND["DOWN"] = "down";
    /**
     * Usage:
     *
     * ```
     * sequential-migrate help
     * ```
     *
     * Prints the list of commands
     */
    COMMAND["HELP"] = "help";
    /**
     * A command to use in automated environments like CI/CD pipelines.
     *
     * Exits with code 1 and logs the word 'abort' if the migration state contains a {@link MIGRATION_STATUS.MISSING | mising} {@link MIGRATION_STATUS.SKIPPED | skipped} migration. If the migration state is OK, it exits with code 0 and logs 'ok'. See {@link EXIT_MESSAGE}.
     *
     * If
     *
     */
    COMMAND["CHECK"] = "ci-check";
})(COMMAND = exports.COMMAND || (exports.COMMAND = {}));
