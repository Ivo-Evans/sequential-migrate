import printState from "../util/printState";
import getFormattedState from "../util/getFormattedState";
import { MIGRATION_STATUS } from "../types";
import printMissingDebugMessage from "../util/printMissingDebugMessage";
import printSkippedDebugMessage from "../util/printSkippedDebugMessage";

const getStatus = async () => {
  const formattedState = await getFormattedState();
  printState(formattedState);

  const isThereAMissingMigration = formattedState.some(
    ({ status }) => status === MIGRATION_STATUS.MISSING
  );
  if (isThereAMissingMigration) {
    printMissingDebugMessage();
  }

  const isThereASkippedMigration = formattedState.some(
    ({ status }) => status === MIGRATION_STATUS.SKIPPED
  );
  if (isThereASkippedMigration) {
    printSkippedDebugMessage();
  }
};

export default getStatus;
