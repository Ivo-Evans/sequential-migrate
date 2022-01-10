import { EXIT_MESSAGE } from "../types/exitMessage.types";
import getInferredState from "../util/getInferredState";
import { MIGRATION_STATUS } from "../types";
import abortProgram from "../util/abortProgram";

const ciCheck = async () => {
  const inferredState = await getInferredState();
  const isThereAMissingMigration = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.MISSING
  );
  const isThereASkippedMigration = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.SKIPPED
  );

  if (isThereAMissingMigration || isThereASkippedMigration) {
    return abortProgram();
  }

  console.log(EXIT_MESSAGE.OK);
  process.exit(0);
};

export default ciCheck;
