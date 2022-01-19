[sequential-migrate](../README.md) / [Exports](../modules.md) / COMMAND

# Enumeration: COMMAND

These are the commands available to the user

## Table of contents

### Enumeration members

- [CHECK](COMMAND.md#check)
- [DOWN](COMMAND.md#down)
- [HELP](COMMAND.md#help)
- [NEW](COMMAND.md#new)
- [SCAFFOLD](COMMAND.md#scaffold)
- [STATUS](COMMAND.md#status)
- [UP](COMMAND.md#up)

## Enumeration members

### CHECK

• **CHECK** = `"ci-check"`

A command to use in automated environments like CI/CD pipelines.

Exits with code 1 and logs [EXIT_MESSAGE.ABORT](EXIT_MESSAGE.md#abort) if the migration state contains a [mising](MIGRATION_STATUS.md#missing) or [skipped](MIGRATION_STATUS.md#skipped) migration. If the migration state is OK, it exits with code 0 and logs [EXIT_MESSAGE.OK](EXIT_MESSAGE.md#ok).

#### Defined in

[command.types.ts:114](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/command.types.ts#L114)

___

### DOWN

• **DOWN** = `"down"`

Usage:

```
sequential-migrate down
sequential-migrate down 1641813498181
```

Accepts a migration name as a second optional argument. Runs the [down](../modules.md#down) library function, passing a migration name, if provided, as the first argument. See that entry for further details.

#### Defined in

[command.types.ts:96](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/command.types.ts#L96)

___

### HELP

• **HELP** = `"help"`

Usage:

```
sequential-migrate help
```

Prints the list of commands

#### Defined in

[command.types.ts:106](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/command.types.ts#L106)

___

### NEW

• **NEW** = `"new"`

Usage:

```
sequential-migrate new
sequential-migrate new create-users-table
```

Accepts migration name as an optional second argument, which is passed to the [MigrationBuilder.build](../interfaces/MigrationBuilder.md#build) function.

Creates a new blank migration in the `migrations` folder or folder specified in a custom [RuntimeConfiguration](../interfaces/RuntimeConfiguration.md) by calling [MigrationBuilder.build](../interfaces/MigrationBuilder.md#build).

#### Defined in

[command.types.ts:71](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/command.types.ts#L71)

___

### SCAFFOLD

• **SCAFFOLD** = `"scaffold"`

Usage:

```
sequential-migrate scaffold
```

No arguments.

Initialises the framework by creating the required files in the `migration` folder at the root of your project. The framework is initialised with a minimal example for Postgres which can be customised to your needs. The required files are:

```
migration/
  migrations/
  newMigrationBuilder.js
  stateInterface.js
```

New files and folders in `migrations/` can be created by runing [new](COMMAND.md#new). This calls `newMigrationBuilder.js`, which should use CommonJS (`module.exports`) to export a [MigrationBuilder](../interfaces/MigrationBuilder.md) object.

Migrations in the `migrations` folder should be sorted alphabetically from oldest to newest. For this reason, the default [MigrationBuilder](../interfaces/MigrationBuilder.md) prepends migrations with a timestamp.

Migrations can be either files or folders containing `index.js` files. For instance, this would be valid:

```
.
├── migrations
│ ├── 01
│ │ └── index.js
│ └── 02.js
```

The commands [up](COMMAND.md#up), [down](COMMAND.md#down) and [status](COMMAND.md#status) use `stateInterface.js`. `stateInterface.js` should use CommonJS to export an object which meets the [StateScript](../interfaces/StateScript.md) interface.

The location of all the files created by [COMMAND.NEW](COMMAND.md#new) can be customised after the command has been run by placing a `.migrationrc.js` at the root of your project. The `.migrationrc.js` should export an object with the [ConfigurationFile](../modules.md#configurationfile) interface.

#### Defined in

[command.types.ts:44](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/command.types.ts#L44)

___

### STATUS

• **STATUS** = `"status"`

Usage:

```
sequential-migrate status
```

No arguments.

Reads the `migrations` folder and displays a list of migrations along with their [MIGRATION_STATUS](MIGRATION_STATUS.md)

#### Defined in

[command.types.ts:57](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/command.types.ts#L57)

___

### UP

• **UP** = `"up"`

Usage:

```
sequential-migrate up
sequential-migrate up 1641813498181
```

Accepts a migration name as a second optional argument. Runs the [up](../modules.md#up) library function, passing a migration name, if provided, as the first argument. See that entry for further details.

#### Defined in

[command.types.ts:84](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/command.types.ts#L84)
