import dynamicRequire from "../util/dynamicRequire";
import getConfig from "../util/getConfig";
import getFormattedState from "../util/getFormattedState";
import migrateUp from "../util/migrateUp";

const up = async () => {
  const config = getConfig();
  const formattedState = await getFormattedState();
  const stateInterface = dynamicRequire(config.stateInterface);
  await migrateUp(formattedState, stateInterface);
};

export default up;
