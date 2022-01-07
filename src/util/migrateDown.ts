import { MIGRATION_STATUS, StateModificationIterator } from "../types";
import rollbackMigration from "./rollbackMigration";

const migrateDown: StateModificationIterator = async (
  formattedState,
  stateInterface,
  to
) => {
  loop: for (let i = formattedState.length - 1; i >= 0; i--) {
    const stateItem = formattedState[i];
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
        await rollbackMigration(stateItem, stateInterface);
        break;
      default:
        throw new Error(`Item at index ${i} of state has an invalid status`);
    }
  }
};

export default migrateDown;
