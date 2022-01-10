import getInferredState from "../util/getInferredState";
import dynamicRequire from "../util/dynamicRequire";
import getConfig from "../util/getConfig";
import migrateDown from "../util/migrateDown";

const down = async (to?: string) => {
  const config = getConfig();
  const inferredState = await getInferredState();
  const stateScript = dynamicRequire(config.stateScript);

  await migrateDown(config, inferredState, stateScript, to);
};

export default down;
