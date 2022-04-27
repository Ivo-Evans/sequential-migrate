import { MIGRATION_STATUS, MigrationStateMachine } from "../types";
import { LastMigrationResult } from "../types/LastMigrationResult.types";
import runMigration from "./runMigration";

const migrateUp: MigrationStateMachine = async (
  config,
  inferredState,
  stateScript,
  to
) => {
  let lastItem: LastMigrationResult;
  loop: for (let i = 0; i < inferredState.length; i++) {
    const stateItem = inferredState[i];
    switch (stateItem.status) {
      case MIGRATION_STATUS.RUN:
        continue;
      case MIGRATION_STATUS.MISSING:
      case MIGRATION_STATUS.SKIPPED:
        console.log(
          `Stopped at ${stateItem.name} because it has status ${stateItem.status}`
        );
        break loop;
      case MIGRATION_STATUS.PENDING:
        lastItem = await runMigration(config, stateItem, stateScript, lastItem);
        break;
      default:
        throw new Error(`Item at index ${i} of state has invalid status`);
    }
    if (stateItem.name === to) {
      break;
    }
  }
};

export default migrateUp;
