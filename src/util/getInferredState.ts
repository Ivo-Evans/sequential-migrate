import fs from 'fs'
import path from "path"

import { InferredState } from '../types'


import getConfig from "./getConfig";
import getState from "./getState"
import inferState from "./inferState"

const getInferredState = async (): Promise<InferredState> => {
  const config = getConfig()
  const migrationNames = fs.readdirSync(path.join(process.cwd(), config.migrations))
  const state = await getState(config.stateInterface)
  const inferredState = inferState(migrationNames, state)
  return inferredState
}

export default getInferredState