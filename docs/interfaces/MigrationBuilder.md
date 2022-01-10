[sequential-migrate](../README.md) / [Exports](../modules.md) / MigrationBuilder

# Interface: MigrationBuilder

A function which will be called to create a new migration file. This file is found by checking [RuntimeConfiguration.newMigrationBuilder](RuntimeConfiguration.md#newmigrationbuilder).

**`param`** The folder to write the migration to

**`param`** The name entered on the command line, if any, for the new migration

## Table of contents

### Methods

- [build](MigrationBuilder.md#build)

## Methods

### build

▸ **build**(`migrationsFolder`, `name?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `migrationsFolder` | `string` |
| `name?` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[migrationBuilder.types.ts:9](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/migrationBuilder.types.ts#L9)
