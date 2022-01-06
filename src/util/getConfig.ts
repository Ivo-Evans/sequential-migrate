import { ConfigurationFile, RuntimeConfiguration } from '../types'
import dynamicRequire from "./dynamicRequire"

export const DEFAULT_CONFIG: RuntimeConfiguration = {
  migrations: 'migration/migrations',
  newMigrationBuilder: 'migration/newMigrationBuilder',
  stateInterface: 'migration/stateInterface',
}

const getConfig = (): RuntimeConfiguration => {
  try {
    const config: ConfigurationFile = dynamicRequire('.migrationrc.js')
    return { ...DEFAULT_CONFIG, ...config }
  } catch (e) {
    console.log('Could not find config file, using defaults...')
    return DEFAULT_CONFIG
  }
}

export default getConfig
