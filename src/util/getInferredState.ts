import fs from "fs";
import path from "path";

import { InferredState } from "../types";

import getConfig from "./getConfig";
import getState from "./getState";
import inferState from "./inferState";
import hasDuplicates from "./hasDuplicates"
import abortProgram from "./abortProgram";

const getInferredState = async (): Promise<InferredState> => {
  const config = getConfig();
  console.log("🍍   path.join(process.cwd(), config.migrations)", path.join(process.cwd(), config.migrations));

  const migrationNames = fs.readdirSync(
    path.join(process.cwd(), config.migrations)
  );
  console.log("🍍   migrationNames", migrationNames);
  const areThereDuplicateMigrations = hasDuplicates(migrationNames.map(migrationName => migrationName.replace(/\.[jt]s$/, '')))
  if (areThereDuplicateMigrations) {
    console.error("Two migration scripts with the same name detected")
    return abortProgram()
  }
  

  const state = await getState(config.stateScript);
  const isThereDuplicateState = hasDuplicates(state.map(stateItem =>stateItem.name))
  if (isThereDuplicateState) {
    console.error("Two state entries with the same name detected")
    return abortProgram()
  }
  const inferredState = inferState(migrationNames, state);
  return inferredState;
};

export default getInferredState;
