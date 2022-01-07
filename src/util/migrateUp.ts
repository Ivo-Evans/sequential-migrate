import { MIGRATION_STATUS, StateModificationIterator } from "../types";
import runMigration from "./runMigration";

const migrateUp: StateModificationIterator = async (
  formattedState,
  stateInterface
) => {
  loop: for (let i = 0; i < formattedState.length; i++) {
    const stateItem = formattedState[i];
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
        await runMigration(stateItem, stateInterface);
        break;
      default:
        throw new Error(`Item at index ${i} of state has invalid status`);
    }
  }
};

export default migrateUp;
