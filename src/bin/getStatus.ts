import printState from "../util/printState";
import getInferredState from "../util/getInferredState";
import { MIGRATION_STATUS } from "../types";
import printMissingDebugMessage from "../util/printMissingDebugMessage";
import printSkippedDebugMessage from "../util/printSkippedDebugMessage";

const getStatus = async () => {
  const inferredState = await getInferredState();
  printState(inferredState);

  const isThereAMissingMigration = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.MISSING
  );
  if (isThereAMissingMigration) {
    printMissingDebugMessage();
  }

  const isThereASkippedMigration = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.SKIPPED
  );
  if (isThereASkippedMigration) {
    printSkippedDebugMessage();
  }
};

export default getStatus;
