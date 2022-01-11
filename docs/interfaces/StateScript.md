[sequential-migrate](../README.md) / [Exports](../modules.md) / StateScript

# Interface: StateScript

The functions that the sequential-migrate CLI use to understand and set the migrations that have been applied. You should write these, so that you can save the migration state wherever you like.

## Table of contents

### Methods

- [add](StateScript.md#add)
- [get](StateScript.md#get)
- [remove](StateScript.md#remove)

## Methods

### add

▸ **add**(`state`): `Promise`<`unknown`\>

Will be called after a migration takes place with information about the added migration. In practice this is a `push` operation, but you do not need to manage stack logic or ordering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`RecordedStateItem`](RecordedStateItem.md) |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[stateScript.types.ts:17](https://github.com/Ivo-Evans/sequential-migrate/blob/48e63f0/src/types/stateScript.types.ts#L17)

___

### get

▸ **get**(): `Promise`<[`RecordedState`](../modules.md#recordedstate)\>

Returns the saved state.

#### Returns

`Promise`<[`RecordedState`](../modules.md#recordedstate)\>

#### Defined in

[stateScript.types.ts:12](https://github.com/Ivo-Evans/sequential-migrate/blob/48e63f0/src/types/stateScript.types.ts#L12)

___

### remove

▸ **remove**(`state`): `Promise`<`unknown`\>

Will be called after a rollback takes place with information about the removed migration. In practice this is a `pop` operation, but you do not need to manage stack logic or ordering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`RecordedStateItem`](RecordedStateItem.md) |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[stateScript.types.ts:22](https://github.com/Ivo-Evans/sequential-migrate/blob/48e63f0/src/types/stateScript.types.ts#L22)
