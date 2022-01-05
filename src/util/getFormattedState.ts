import { FormattedState } from '../types'


import getConfig from "../util/getConfig";
import getFolderContentsAlphabetised from "../util/getFolderContentsAlphabetised";
import getState from "../util/getState"
import formatState from "../util/formatState"

const getFormattedState = async (): Promise<FormattedState> => {
  const config = getConfig()
  const migrationNames = getFolderContentsAlphabetised(config.migrations)
  const state = await getState(config.stateInterface)
  const formattedState = formatState(migrationNames, state)
  return formattedState
}

export default getFormattedState