[sequential-migrate](../README.md) / [Exports](../modules.md) / RecordedStateItem

# Interface: RecordedStateItem

An item saved and returned by the {@link stateInterface}

## Table of contents

### Properties

- [description](RecordedStateItem.md#description)
- [name](RecordedStateItem.md#name)
- [runAt](RecordedStateItem.md#runat)

## Properties

### description

• **description**: `string`

Taken from {@link MigrationScript.desription}

#### Defined in

[recordedState.types.ts:8](https://github.com/Ivo-Evans/sequential-migrate/blob/032c2b7/src/types/recordedState.types.ts#L8)

___

### name

• **name**: `string`

Taken from {@link MigrationScript.name}

#### Defined in

[recordedState.types.ts:6](https://github.com/Ivo-Evans/sequential-migrate/blob/032c2b7/src/types/recordedState.types.ts#L6)

___

### runAt

• **runAt**: `number`

The JavaScript time at which the migration was run, e.g. `1641818951354`

#### Defined in

[recordedState.types.ts:10](https://github.com/Ivo-Evans/sequential-migrate/blob/032c2b7/src/types/recordedState.types.ts#L10)
