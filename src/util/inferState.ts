import { RecordedStateItem, RecordedState, MIGRATION_STATUS, InferredState } from "../types";

const inferState = (
  migrationNames: string[],
  state: RecordedState
): InferredState => {
  const stateDictionary = state.reduce(
    (acc: Record<string, RecordedStateItem>, stateItem: RecordedStateItem) => {
      acc[stateItem.name] = stateItem;
      return acc;
    },
    {}
  );

  let hasARunMigrationBeenEncountered = false;
  const migrationsWithStatus = migrationNames
    .sort((a, b) => b.localeCompare(a)) // reverse the list (also we can't guarantee it arrived sorted)
    .map((migrationName: string) => {
      const stateEntry = stateDictionary[migrationName];

      const status = stateEntry
        ? MIGRATION_STATUS.RUN
        : hasARunMigrationBeenEncountered
        ? MIGRATION_STATUS.SKIPPED
        : MIGRATION_STATUS.PENDING;
      // the array has been reversed, so if a later one (that we've already iterated) was run, but this one isn't in state, this one must have been skipped. If the migration is in state, it must have been run. And if it's not in state, but no later migration is in state, it is just pending.

      if (status === MIGRATION_STATUS.RUN) {
        hasARunMigrationBeenEncountered = true;
      }

      const formattedMigration = stateEntry
        ? { ...stateEntry, status }
        : { name: migrationName, description: "", runAt: 0, status };

      if (stateEntry) {
        delete stateDictionary[migrationName];
      }

      return formattedMigration;
    });

  const missingStateEntriesWithStatus = Object.values(stateDictionary).map(
    (stateEntry) => {
      return { ...stateEntry, status: MIGRATION_STATUS.MISSING };
    }
  );

  const inferredState = [
    ...migrationsWithStatus,
    ...missingStateEntriesWithStatus,
  ].sort((a, b) => a.name.localeCompare(b.name));

  return inferredState;
};

export default inferState;
