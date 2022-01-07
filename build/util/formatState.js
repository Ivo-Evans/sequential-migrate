"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const formatState = (migrationNames, state) => {
    const stateDictionary = state.reduce((acc, stateItem) => {
        acc[stateItem.name] = stateItem;
        return acc;
    }, {});
    let hasARunMigrationBeenEncountered = false;
    const formattedMigrations = migrationNames
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
            ? Object.assign(Object.assign({}, stateEntry), { status }) : { name: migrationName, description: "", runAt: 0, status };
        if (stateEntry) {
            delete stateDictionary[migrationName];
        }
        return formattedMigration;
    });
    const formattedMissingEntries = Object.values(stateDictionary).map((stateEntry) => {
        return Object.assign(Object.assign({}, stateEntry), { status: types_1.MIGRATION_STATUS.MISSING });
    });
    const sortedAndFormattedState = [
        ...formattedMigrations,
        ...formattedMissingEntries,
    ].sort((a, b) => a.name.localeCompare(b.name));
    return sortedAndFormattedState;
};
exports.default = formatState;
