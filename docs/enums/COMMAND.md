[sequential-migrate](../README.md) / [Exports](../modules.md) / COMMAND

# Enumeration: COMMAND

These are the commands available to the program

## Table of contents

### Enumeration members

- [DOWN](COMMAND.md#down)
- [HELP](COMMAND.md#help)
- [NEW](COMMAND.md#new)
- [SCAFFOLD](COMMAND.md#scaffold)
- [STATUS](COMMAND.md#status)
- [UP](COMMAND.md#up)

## Enumeration members

### DOWN

• **DOWN** = `"down"`

Usage:

```
sequential-migrate down
sequential-migrate down 1641813498181
```

Accepts a migration name as a second optional argument

Rolls back [run](MIGRATION_STATUS.md#run) migrations down to (but not including) the named migration. If no migration is provided, and there are no [mising](MIGRATION_STATUS.md#missing) or [skipped](MIGRATION_STATUS.md#skipped) migrations, rolls back all migrations.

The `up` script halts and exits if it encounters a migration with status [missing](MIGRATION_STATUS.md#missing) or [skipped](MIGRATION_STATUS.md#skipped), running all migrations it has already encountered.

#### Defined in

[command.types.ts:100](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/command.types.ts#L100)

___

### HELP

• **HELP** = `"help"`

Usage:

```
sequential-migrate help
```

Prints the list of commands

#### Defined in

[command.types.ts:110](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/command.types.ts#L110)

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

[command.types.ts:68](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/command.types.ts#L68)

___

### SCAFFOLD

• **SCAFFOLD** = `"scaffold"`

Usage:

```
sequential-migrate scaffold
```

No arguments.

Initialises the framework by creating the required files in the `migration` folder at the root of your project.

```
migration/
  migrations/
  newMigrationBuilder.js
  stateInterface.js
```

New files and folders in `migrations/` can be created by runing [new](COMMAND.md#new). This calls `newMigrationBuilder.js`, which should use CommonJS (`module.exports`) to export a [MigrationBuilder](../interfaces/MigrationBuilder.md) object.

Migrations in the `migrations` folder should be sorted alphabetically from oldest to newest. For this reason, the default [MigrationBuilder](../interfaces/MigrationBuilder.md) prepends migrations with a timestamp.

Migrations can either files or folders containing `index.js` files. For instance, this would be valid:

```
.
├── migrations
│ ├── 01
│ │ └── index.js
│ └── 02.js
```

The commands [up](COMMAND.md#up), [down](COMMAND.md#down) and [status](COMMAND.md#status) use `stateInterface.js`. `stateInterface.js` should use CommonJS to export an object which meets the [StateScript](../interfaces/StateScript.md) interface.

The location of all the files created by [COMMAND.NEW](COMMAND.md#new) can be customised by placing a `.migrationrc.js` at the root of your project. The `.migrationrc.js` should export an object meeting the [ConfigurationFile](../modules.md#configurationfile) interface.

#### Defined in

[command.types.ts:43](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/command.types.ts#L43)

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

[command.types.ts:55](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/command.types.ts#L55)

___

### UP

• **UP** = `"up"`

Usage:

```
sequential-migrate up
sequential-migrate up 1641813498181
```

Accepts a migration name as a second optional argument

Runs [pending](MIGRATION_STATUS.md#pending) migrations from the most recent [run](MIGRATION_STATUS.md#run) migration up to (and including) the named migration, or the most recent migration if no migration name is provided.

The `up` script halts and exits if it encounters a migration with status [missing](MIGRATION_STATUS.md#missing) or [skipped](MIGRATION_STATUS.md#skipped), running all migrations it has already encountered.

The `up` script runs [MigrationScript.up](../interfaces/MigrationScript.md#up) before [StateScript.set](../interfaces/StateScript.md#set). This means that your first migration can be the one that creates the migration table or collection in your database. Just make sure that [StateScript.get](../interfaces/StateScript.md#get) can handle a table that doesn't exist.

#### Defined in

[command.types.ts:85](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/command.types.ts#L85)