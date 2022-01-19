[sequential-migrate](../README.md) / [Exports](../modules.md) / RuntimeConfiguration

# Interface: RuntimeConfiguration

## Table of contents

### Properties

- [migrations](RuntimeConfiguration.md#migrations)
- [newMigrationBuilder](RuntimeConfiguration.md#newmigrationbuilder)
- [stateScript](RuntimeConfiguration.md#statescript)

## Properties

### migrations

• **migrations**: `string`

The place migration files are stored. Migrations can be either a `.js` file, or a folder containing an `index.js` file.

Defaults to `migration/migrations/`

#### Defined in

[configurationFile.types.ts:6](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/configurationFile.types.ts#L6)

___

### newMigrationBuilder

• **newMigrationBuilder**: `string`

The path that the CLI uses to find a [MigrationBuilder](MigrationBuilder.md)
Defaults to `migration/newMigrationBuilder`

#### Defined in

[configurationFile.types.ts:10](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/configurationFile.types.ts#L10)

___

### stateScript

• **stateScript**: `string`

The path that the CLI uses to find a [StateScript](StateScript.md). Defaults to `migration/stateScript.js`

#### Defined in

[configurationFile.types.ts:15](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/configurationFile.types.ts#L15)
