[sequential-migrate](../README.md) / [Exports](../modules.md) / MIGRATION\_STATUS

# Enumeration: MIGRATION\_STATUS

The possible statuses of a migration. These are determined during the runtime of the CLI by comparing the migrations folder with the stored state.

## Table of contents

### Enumeration members

- [MISSING](MIGRATION_STATUS.md#missing)
- [PENDING](MIGRATION_STATUS.md#pending)
- [RUN](MIGRATION_STATUS.md#run)
- [SKIPPED](MIGRATION_STATUS.md#skipped)

## Enumeration members

### MISSING

• **MISSING** = `"❌ MISSING"`

The migration has been reported by [StateScript.get](../interfaces/StateScript.md#get), but can't be found in the migrations folder, indicating that the integrity of the migrations has been compromised.

#### Defined in

[migrationStatus.types.ts:20](https://github.com/Ivo-Evans/sequential-migrate/blob/48e63f0/src/types/migrationStatus.types.ts#L20)

___

### PENDING

• **PENDING** = `"〰️ PENDING"`

The migration is present in the migrations folder, but not reported by [StateScript.get](../interfaces/StateScript.md#get). Furthermore, there is no later migration with [MIGRATION_STATUS.RUN](MIGRATION_STATUS.md#run).

#### Defined in

[migrationStatus.types.ts:8](https://github.com/Ivo-Evans/sequential-migrate/blob/48e63f0/src/types/migrationStatus.types.ts#L8)

___

### RUN

• **RUN** = `"✅ RUN"`

The migration is present in the migrations folder, and is reported by [StateScript.get](../interfaces/StateScript.md#get).

#### Defined in

[migrationStatus.types.ts:12](https://github.com/Ivo-Evans/sequential-migrate/blob/48e63f0/src/types/migrationStatus.types.ts#L12)

___

### SKIPPED

• **SKIPPED** = `"❌ SKIPPED"`

The migration is present in the migrations folder, but not reported by [StateScript.get](../interfaces/StateScript.md#get). However, there is a later migration with [MIGRATION_STATUS.RUN](MIGRATION_STATUS.md#run), indicating that the integrity of the migrations has been compromised.

#### Defined in

[migrationStatus.types.ts:16](https://github.com/Ivo-Evans/sequential-migrate/blob/48e63f0/src/types/migrationStatus.types.ts#L16)
