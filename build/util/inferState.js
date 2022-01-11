"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
// Another approach to the hashmap would be to combine both list, sort them in reverse, and then iterate through, always checking the item at the next index as well as at this index (but never checking the item at the previous index)
const inferState = (migrationNames, state) => {
    const stateDictionary = state.reduce((acc, stateItem) => {
        acc[stateItem.name] = stateItem;
        return acc;
    }, {});
    let hasARunMigrationBeenEncountered = false;
    const migrationsWithStatus = migrationNames
        .sort((a, b) => b.localeCompare(a)) // reverse the list (also we can't guarantee it arrived sorted)
        .map((migrationName) => {
        const stateEntry = stateDictionary[migrationName];
        const status = stateEntry
            ? types_1.MIGRATION_STATUS.RUN
            : hasARunMigrationBeenEncountered
                ? types_1.MIGRATION_STATUS.SKIPPED
                : types_1.MIGRATION_STATUS.PENDING;
        // the array has been reversed, so if a later one (that we've already iterated) was run, but this one isn't in state, this one must have been skipped. If the migration is in state, it must have been run. And if it's not in state, but no later migration is in state, it is just pending.
        if (status === types_1.MIGRATION_STATUS.RUN) {
            hasARunMigrationBeenEncountered = true;
        }
        const formattedMigration = stateEntry
            ? Object.assign(Object.assign({}, stateEntry), { status }) : { name: migrationName, description: "", runAt: null, status };
        if (stateEntry) {
            delete stateDictionary[migrationName];
        }
        return formattedMigration;
    });
    const missingStateEntriesWithStatus = Object.values(stateDictionary).map((stateEntry) => {
        return Object.assign(Object.assign({}, stateEntry), { status: types_1.MIGRATION_STATUS.MISSING });
    });
    const inferredState = [
        ...migrationsWithStatus,
        ...missingStateEntriesWithStatus,
    ].sort((a, b) => a.name.localeCompare(b.name));
    return inferredState;
};
exports.default = inferState;
