import { EXIT_MESSAGE } from "../types/exitMessage.types";
import getInferredState from "../util/getInferredState";
import { MIGRATION_STATUS } from "../types";

const ciCheck = async () => {
  const inferredState = await getInferredState();
  const isThereAMissingMigration = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.MISSING
  );
  const isThereASkippedMigration = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.SKIPPED
  );

  if (isThereAMissingMigration || isThereASkippedMigration) {
    console.error(EXIT_MESSAGE.ABORT);
    process.exit(1);
  }

  console.log(EXIT_MESSAGE.OK);
  process.exit(0);
};

export default ciCheck;
