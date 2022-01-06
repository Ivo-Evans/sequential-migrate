import { MIGRATION_STATUS } from '../types'
import dynamicRequire from '../util/dynamicRequire'
import getConfig from '../util/getConfig'
import getFormattedState from '../util/getFormattedState'

const up = async () => {
  const config = getConfig()
  const formattedState = await getFormattedState()
  const migrationsNotYetRun = formattedState.filter((state) =>
    [MIGRATION_STATUS.RUN, MIGRATION_STATUS.MISSING].includes(state.status)
  )
  const stateInterface = dynamicRequire(config.stateInterface)

  for (let i = 0; i <= migrationsNotYetRun.length; i++) {
    const migrationData = migrationsNotYetRun[i]
    const migrationScript = dynamicRequire(migrationData.name)
    await migrationScript.up()
    const state = await stateInterface.get()
    state.push({
      name: migrationData.name,
      description: migrationData.description,
      runAt: Date.now(),
    }) // this won't work for updates, e.g. to missing
    await stateInterface.set(state)
  }
}

export default up
