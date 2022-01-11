[sequential-migrate](README.md) / Exports

# sequential-migrate

## Table of contents

### Enumerations

- [COMMAND](enums/COMMAND.md)
- [EXIT\_MESSAGE](enums/EXIT_MESSAGE.md)
- [MIGRATION\_STATUS](enums/MIGRATION_STATUS.md)

### Interfaces

- [MigrationBuilder](interfaces/MigrationBuilder.md)
- [MigrationScript](interfaces/MigrationScript.md)
- [RecordedStateItem](interfaces/RecordedStateItem.md)
- [RuntimeConfiguration](interfaces/RuntimeConfiguration.md)
- [StateScript](interfaces/StateScript.md)

### Type aliases

- [ConfigurationFile](modules.md#configurationfile)
- [RecordedState](modules.md#recordedstate)

## Type aliases

### ConfigurationFile

Ƭ **ConfigurationFile**: `Partial`<[`RuntimeConfiguration`](interfaces/RuntimeConfiguration.md)\>

Any of the properties from [RuntimeConfiguration](interfaces/RuntimeConfiguration.md)

#### Defined in

[configurationFile.types.ts:21](https://github.com/Ivo-Evans/sequential-migrate/blob/a268585/src/types/configurationFile.types.ts#L21)

___

### RecordedState

Ƭ **RecordedState**: [`RecordedStateItem`](interfaces/RecordedStateItem.md)[]

#### Defined in

[recordedState.types.ts:13](https://github.com/Ivo-Evans/sequential-migrate/blob/a268585/src/types/recordedState.types.ts#L13)
