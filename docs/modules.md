[sequential-migrate](README.md) / Exports

# sequential-migrate

## Table of contents

### Enumerations

- [COMMAND](enums/COMMAND.md)
- [EXIT\_MESSAGE](enums/EXIT_MESSAGE.md)
- [MIGRATION\_STATUS](enums/MIGRATION_STATUS.md)

### Interfaces

- [InferredStateItem](interfaces/InferredStateItem.md)
- [MigrationBuilder](interfaces/MigrationBuilder.md)
- [MigrationScript](interfaces/MigrationScript.md)
- [RecordedStateItem](interfaces/RecordedStateItem.md)
- [RuntimeConfiguration](interfaces/RuntimeConfiguration.md)
- [StateScript](interfaces/StateScript.md)

### Type aliases

- [ConfigurationFile](modules.md#configurationfile)
- [InferredState](modules.md#inferredstate)
- [RecordedState](modules.md#recordedstate)
- [down](modules.md#down)
- [getStatus](modules.md#getstatus)
- [up](modules.md#up)

## Type aliases

### ConfigurationFile

Ƭ **ConfigurationFile**: `Partial`<[`RuntimeConfiguration`](interfaces/RuntimeConfiguration.md)\>

Any of the properties from [RuntimeConfiguration](interfaces/RuntimeConfiguration.md)

#### Defined in

[configurationFile.types.ts:21](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/configurationFile.types.ts#L21)

___

### InferredState

Ƭ **InferredState**: [`InferredStateItem`](interfaces/InferredStateItem.md)[]

The application's view of the state of your migrations

#### Defined in

[inferredState.types.ts:14](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/inferredState.types.ts#L14)

___

### RecordedState

Ƭ **RecordedState**: [`RecordedStateItem`](interfaces/RecordedStateItem.md)[]

#### Defined in

[recordedState.types.ts:13](https://github.com/Ivo-Evans/sequential-migrate/blob/fd5ef48/src/types/recordedState.types.ts#L13)

___

### down

Ƭ **down**: (`to?`: `string`) => `Promise`<`void`\>

#### Type declaration

▸ (`to?`): `Promise`<`void`\>

Rolls back [run](enums/MIGRATION_STATUS.md#run) migrations down to (but not including) the named migration. If no migration is provided, and there are no [mising](enums/MIGRATION_STATUS.md#missing) or [skipped](enums/MIGRATION_STATUS.md#skipped) migrations, rolls back all migrations.

The `down` script halts and exits if it encounters a migration with status [missing](enums/MIGRATION_STATUS.md#missing) or [skipped](enums/MIGRATION_STATUS.md#skipped), running all migrations it has already encountered.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to?` | `string` | the name of the migration to migrate down to |

##### Returns

`Promise`<`void`\>

#### Defined in

exportedFunctions.types.ts:23

___

### getStatus

Ƭ **getStatus**: () => `Promise`<{ `containsMissing`: `boolean` ; `containsSkipped`: `boolean` ; `state`: [`InferredState`](modules.md#inferredstate)  }\>

#### Type declaration

▸ (): `Promise`<{ `containsMissing`: `boolean` ; `containsSkipped`: `boolean` ; `state`: [`InferredState`](modules.md#inferredstate)  }\>

Reads the `migrations` folder and returns the [InferredState](modules.md#inferredstate). For convenience, booleans indicating whether there are [missing](enums/MIGRATION_STATUS.md#missing) and [skipped](enums/MIGRATION_STATUS.md#skipped) migrations are also returned.

##### Returns

`Promise`<{ `containsMissing`: `boolean` ; `containsSkipped`: `boolean` ; `state`: [`InferredState`](modules.md#inferredstate)  }\>

#### Defined in

exportedFunctions.types.ts:28

___

### up

Ƭ **up**: (`to?`: `string`) => `Promise`<`void`\>

#### Type declaration

▸ (`to?`): `Promise`<`void`\>

Runs [pending](enums/MIGRATION_STATUS.md#pending) migrations from the most recent [run](enums/MIGRATION_STATUS.md#run) migration up to (and including) the migration supplied, or to the most recent migration if none is supplied.

`up` halts and exits if it encounters a migration with status [missing](enums/MIGRATION_STATUS.md#missing) or [skipped](enums/MIGRATION_STATUS.md#skipped), running all migrations it has already encountered.

`up` runs [MigrationScript.up](interfaces/MigrationScript.md#up) before [StateScript.add](interfaces/StateScript.md#add). This means that your first migration can be the one that creates the migration table or collection in your database. Just make sure that [StateScript.get](interfaces/StateScript.md#get) can handle a table that doesn't exist.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to?` | `string` | the name of the migration to migrate up to |

##### Returns

`Promise`<`void`\>

#### Defined in

exportedFunctions.types.ts:13
