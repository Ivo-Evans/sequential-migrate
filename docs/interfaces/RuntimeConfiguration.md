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

Defaults to migration/migrations/

#### Defined in

[configurationFile.types.ts:13](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/configurationFile.types.ts#L13)

___

### newMigrationBuilder

• **newMigrationBuilder**: `string`

The path that the CLI uses to find a [MigrationBuilder](MigrationBuilder.md)
Defaults to migration/newMigrationBuilder

#### Defined in

[configurationFile.types.ts:17](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/configurationFile.types.ts#L17)

___

### stateScript

• **stateScript**: `string`

The path that the CLI uses to find a [StateScript](StateScript.md)

#### Defined in

[configurationFile.types.ts:22](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/configurationFile.types.ts#L22)
