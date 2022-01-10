[sequential-migrate](../README.md) / [Exports](../modules.md) / StateScript

# Interface: StateScript

The functions that the sequential-migrate CLI use to understand and set the migrations that have been applied. You should write these, so that you can save the migration state wherever you like.

## Table of contents

### Methods

- [get](StateScript.md#get)
- [set](StateScript.md#set)

## Methods

### get

▸ **get**(): `Promise`<[`RecordedState`](../modules.md#recordedstate)\>

Will be called with `await` by the sequential-migrate CLI. Returns the saved state.

#### Returns

`Promise`<[`RecordedState`](../modules.md#recordedstate)\>

#### Defined in

[stateScript.types.ts:10](https://github.com/Ivo-Evans/sequential-migrate/blob/9a93920/src/types/stateScript.types.ts#L10)

___

### set

▸ **set**(`state`): `Promise`<`unknown`\>

Will be called with `await` by the sequential-migrate CLI, and given the new state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`RecordedState`](../modules.md#recordedstate) |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[stateScript.types.ts:14](https://github.com/Ivo-Evans/sequential-migrate/blob/9a93920/src/types/stateScript.types.ts#L14)
