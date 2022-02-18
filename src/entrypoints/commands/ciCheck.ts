import getInferredState from "../../util/getInferredState";
import { MIGRATION_STATUS } from "../../types";
import exitSadPath from "../../util/exitSadPath";
import exitHappyPath from "../../util/exitHappyPath";

const ciCheck = async () => {
  const inferredState = await getInferredState();
  const isThereAMissingMigration = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.MISSING
  );
  const isThereASkippedMigration = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.SKIPPED
  );

  return (isThereAMissingMigration || isThereASkippedMigration) ? exitSadPath() : exitHappyPath()

};

export default ciCheck;
