"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const determineMigrationStatus = (doesMigrationExistInState, typeCounts) => {
    if (!doesMigrationExistInState &&
        typeCounts[types_1.MIGRATION_STATUS.PENDING] &&
        typeCounts[types_1.MIGRATION_STATUS.RAN]) {
        return types_1.MIGRATION_STATUS.SKIPPED;
    }
    else if (!doesMigrationExistInState) {
        return types_1.MIGRATION_STATUS.PENDING;
    }
    else {
        return types_1.MIGRATION_STATUS.RAN;
    }
};
const formatState = (migrationNames, state) => {
    const stateDictionary = state.reduce((acc, stateItem) => {
        acc[stateItem.name] = stateItem;
        return acc;
    }, {});
    const typeCounts = {};
    const formattedMigrations = migrationNames.map((migrationName) => {
        const stateEntry = stateDictionary[migrationName];
        const status = determineMigrationStatus(!!stateEntry, typeCounts);
        typeCounts[status] = (typeCounts[status] || 0) + 1;
        const formattedMigration = stateEntry
            ? Object.assign(Object.assign({}, stateEntry), { status }) : { name: migrationName, description: '', runAt: null, status };
        if (!stateEntry) {
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
