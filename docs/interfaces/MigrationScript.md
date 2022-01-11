[sequential-migrate](../README.md) / [Exports](../modules.md) / MigrationScript

# Interface: MigrationScript

The value exported by a migration created by [MigrationBuilder.build](MigrationBuilder.md#build).

## Table of contents

### Properties

- [description](MigrationScript.md#description)

### Methods

- [down](MigrationScript.md#down)
- [up](MigrationScript.md#up)

## Properties

### description

• **description**: `string`

Description of the migration. Can be empty string

#### Defined in

[migrationScript.types.ts:6](https://github.com/Ivo-Evans/sequential-migrate/blob/86b7678/src/types/migrationScript.types.ts#L6)

## Methods

### down

▸ **down**(): `Promise`<`unknown`\>

Function called with `await` to roll back the migration

#### Returns

`Promise`<`unknown`\>

#### Defined in

[migrationScript.types.ts:10](https://github.com/Ivo-Evans/sequential-migrate/blob/86b7678/src/types/migrationScript.types.ts#L10)

___

### up

▸ **up**(): `Promise`<`unknown`\>

Function called with `await` to perform the migration

#### Returns

`Promise`<`unknown`\>

#### Defined in

[migrationScript.types.ts:8](https://github.com/Ivo-Evans/sequential-migrate/blob/86b7678/src/types/migrationScript.types.ts#L8)
