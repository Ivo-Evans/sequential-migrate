import getInferredState from "../../util/getInferredState";
import { MIGRATION_STATUS } from "../../types";

const getStatus = async () => {
  const inferredState = await getInferredState();

  const containsMissing = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.MISSING
  );

  const containsSkipped = inferredState.some(
    ({ status }) => status === MIGRATION_STATUS.SKIPPED
  );

  return { state: inferredState, containsMissing, containsSkipped };
};

export default getStatus;
