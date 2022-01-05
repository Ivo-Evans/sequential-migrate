import { ConfigurationFile, RuntimeConfiguration } from '../types'
import path from "path"
import dynamicRequire from "./dynamicRequire"

const DEFAULT_CONFIG: RuntimeConfiguration = {
  migrations: 'migration/migrations',
  newMigrationBuilder: 'migration/newMigrationBuilder',
  stateInterface: 'migration/stateInterface',
}

const getConfig = (): RuntimeConfiguration => {
  try {
    console.log(process.cwd())
    const config: ConfigurationFile = dynamicRequire('.migrationrc.js')
    return { ...DEFAULT_CONFIG, ...config }
  } catch (e) {
    console.log('Could not find config file, using defaults...')
    return DEFAULT_CONFIG
  }
}

export default getConfig
