import fs from 'fs'
import path from "path"

import { FormattedState } from '../types'


import getConfig from "../util/getConfig";
import getState from "../util/getState"
import formatState from "../util/formatState"

const getFormattedState = async (): Promise<FormattedState> => {
  const config = getConfig()
  const migrationNames = fs.readdirSync(path.join(process.cwd(), config.migrations))
  const state = await getState(config.stateInterface)
  const formattedState = formatState(migrationNames, state)
  return formattedState
}

export default getFormattedState