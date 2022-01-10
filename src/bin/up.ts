import dynamicRequire from "../util/dynamicRequire";
import getConfig from "../util/getConfig";
import getInferredState from "../util/getInferredState";
import migrateUp from "../util/migrateUp";

const up = async (to?: string) => {
  const config = getConfig();
  const inferredState = await getInferredState();
  const stateScript = dynamicRequire(config.stateScript);
  await migrateUp(config, inferredState, stateScript, to);
};

export default up;
