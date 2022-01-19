[sequential-migrate](../README.md) / [Exports](../modules.md) / InferredStateItem

# Interface: InferredStateItem

The applications view of the state of a specific migration. This extends [RecordedStateItem](RecordedStateItem.md), adding [MIGRATION_STATUS](../enums/MIGRATION_STATUS.md).

## Hierarchy

- [`RecordedStateItem`](RecordedStateItem.md)

  ↳ **`InferredStateItem`**

## Table of contents

### Properties

- [description](InferredStateItem.md#description)
- [name](InferredStateItem.md#name)
- [runAt](InferredStateItem.md#runat)
- [status](InferredStateItem.md#status)

## Properties

### description

• **description**: `string`

Taken from {@link MigrationScript.desription}

#### Inherited from

[RecordedStateItem](RecordedStateItem.md).[description](RecordedStateItem.md#description)

#### Defined in

[recordedState.types.ts:8](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/recordedState.types.ts#L8)

___

### name

• **name**: `string`

Taken from {@link MigrationScript.name}

#### Inherited from

[RecordedStateItem](RecordedStateItem.md).[name](RecordedStateItem.md#name)

#### Defined in

[recordedState.types.ts:6](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/recordedState.types.ts#L6)

___

### runAt

• **runAt**: ``null`` \| `number`

The JavaScript time at which the migration was run, e.g. `1641818951354`

#### Inherited from

[RecordedStateItem](RecordedStateItem.md).[runAt](RecordedStateItem.md#runat)

#### Defined in

[recordedState.types.ts:10](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/recordedState.types.ts#L10)

___

### status

• **status**: [`MIGRATION_STATUS`](../enums/MIGRATION_STATUS.md)

#### Defined in

[inferredState.types.ts:8](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/inferredState.types.ts#L8)
