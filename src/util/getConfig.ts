import { ConfigurationFile, RuntimeConfiguration } from '../types'
import dynamicRequire from "./dynamicRequire"

export const DEFAULT_CONFIG: RuntimeConfiguration = {
  migrations: 'migration/migrations',
  newMigrationBuilder: 'migration/newMigrationBuilder',
  stateScript: 'migration/stateScript',
}

const getConfig = async (): Promise<RuntimeConfiguration> => {
  try {
    const config: ConfigurationFile = await dynamicRequire('.migrationrc.js')
    return { ...DEFAULT_CONFIG, ...config }
  } catch (e) {
    console.log('Could not find config file, using defaults...')
    return DEFAULT_CONFIG
  }
}

export default getConfig
