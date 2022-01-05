import { FilePath } from '../types'
import dynamicRequire from './dynamicRequire'

const getState = async (stateInterfacePath: FilePath) => {
  const stateInterface = dynamicRequire(stateInterfacePath)
  const state = await stateInterface.get()
  return state;
}


export default getState