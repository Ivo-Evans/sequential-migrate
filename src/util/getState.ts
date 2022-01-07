import { FilePath } from '../types'
import dynamicRequire from './dynamicRequire'

const getState = async (stateInterfacePath: FilePath) => {
  const stateScript = dynamicRequire(stateInterfacePath)
  const state = await stateScript.get()
  return state;
}


export default getState