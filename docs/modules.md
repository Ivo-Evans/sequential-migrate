[sequential-migrate](README.md) / Exports

# sequential-migrate

## Table of contents

### Enumerations

- [COMMAND](enums/COMMAND.md)
- [MIGRATION\_STATUS](enums/MIGRATION_STATUS.md)

### Interfaces

- [MigrationBuilder](interfaces/MigrationBuilder.md)
- [MigrationScript](interfaces/MigrationScript.md)
- [RecordedStateItem](interfaces/RecordedStateItem.md)
- [RuntimeConfiguration](interfaces/RuntimeConfiguration.md)
- [StateScript](interfaces/StateScript.md)

### Type aliases

- [ConfigurationFile](modules.md#configurationfile)
- [FilePath](modules.md#filepath)
- [FolderPath](modules.md#folderpath)
- [RecordedState](modules.md#recordedstate)

## Type aliases

### ConfigurationFile

Ƭ **ConfigurationFile**: `Partial`<[`RuntimeConfiguration`](interfaces/RuntimeConfiguration.md)\>

#### Defined in

[configurationFile.types.ts:25](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/configurationFile.types.ts#L25)

___

### FilePath

Ƭ **FilePath**: `string`

A path to a file

#### Defined in

[configurationFile.types.ts:2](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/configurationFile.types.ts#L2)

___

### FolderPath

Ƭ **FolderPath**: `string`

A path to a folder

#### Defined in

[configurationFile.types.ts:5](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/configurationFile.types.ts#L5)

___

### RecordedState

Ƭ **RecordedState**: [`RecordedStateItem`](interfaces/RecordedStateItem.md)[]

#### Defined in

[recordedState.types.ts:13](https://github.com/Ivo-Evans/sequential-migrate/blob/55e7db0/src/types/recordedState.types.ts#L13)
