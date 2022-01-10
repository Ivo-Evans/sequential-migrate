import { MIGRATION_STATUS, MigrationStateMachine } from "../types";
import rollbackMigration from "./rollbackMigration";

const migrateDown: MigrationStateMachine = async (
  inferredState,
  stateScript,
  to
) => {
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
        await rollbackMigration(stateItem, stateScript);
        break;
      default:
        throw new Error(`Item at index ${i} of state has an invalid status`);
    }
  }
};

export default migrateDown;
