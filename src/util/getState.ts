import { RecordedState } from '../types'
import dynamicRequire from './dynamicRequire'

const getState = async (stateInterfacePath: string): Promise<RecordedState> => {
  const stateScript = dynamicRequire(stateInterfacePath)
  const state = await stateScript.get()
  return state;
}


export default getState