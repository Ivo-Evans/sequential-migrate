import { MIGRATION_STATUS, MigrationStateMachine } from "../types";
import { LastMigrationResult } from "../types/LastMigrationResult.types";
import rollbackMigration from "./rollbackMigration";

const migrateDown: MigrationStateMachine = async (
  config,
  inferredState,
  stateScript,
  to
) => {
  let lastItem: LastMigrationResult;
  loop: for (let i = inferredState.length - 1; i >= 0; i--) {
    const stateItem = inferredState[i];
    if (stateItem.name === to) {
      break;
    }
    switch (stateItem.status) {
      case MIGRATION_STATUS.PENDING:
        continue;
      case MIGRATION_STATUS.MISSING:
      case MIGRATION_STATUS.SKIPPED:
        console.log(
          `Stopped at ${stateItem.name} because it has status ${stateItem.status}`
        );
        break loop;
      case MIGRATION_STATUS.RUN:
        await rollbackMigration(config, stateItem, stateScript, lastItem);
        break;
      default:
        throw new Error(`Item at index ${i} of state has an invalid status`);
    }
  }
};

export default migrateDown;
