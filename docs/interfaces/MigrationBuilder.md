[sequential-migrate](../README.md) / [Exports](../modules.md) / MigrationBuilder

# Interface: MigrationBuilder

The export of   [RuntimeConfiguration.newMigrationBuilder](RuntimeConfiguration.md#newmigrationbuilder).

## Table of contents

### Methods

- [build](MigrationBuilder.md#build)

## Methods

### build

▸ **build**(`migrationsFolder`, `name?`): `Promise`<`unknown`\>

A function which will be called to create a new migration file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `migrationsFolder` | `string` | The folder to write the migration to |
| `name?` | `string` | The name entered on the command line, if any, for the new migration |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[migrationBuilder.types.ts:12](https://github.com/Ivo-Evans/sequential-migrate/blob/86b7678/src/types/migrationBuilder.types.ts#L12)
