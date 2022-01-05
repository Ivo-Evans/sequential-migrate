import { MIGRATION_STATUS, State } from '../types'
import getFormattedState from '../util/getFormattedState'
import dynamicRequire from '../util/dynamicRequire'
import getConfig from '../util/getConfig'

const down = async () => {
  const config = getConfig()
  const formattedState = await getFormattedState()
  const migrationsAlreadyRun = formattedState.filter((state) =>
    [MIGRATION_STATUS.PENDING, MIGRATION_STATUS.SKIPPED].includes(state.status)
  )

  const stateInterface = dynamicRequire(config.stateInterface)

  for (
    let i = migrationsAlreadyRun.length;
    i >= migrationsAlreadyRun.length;
    i--
  ) {
    const migrationData = migrationsAlreadyRun[i]
    const migrationScript = dynamicRequire(migrationData.name)
    await migrationScript.down()

    const state: State = await stateInterface.get()
    const newState = state.filter(
      (stateItem) => stateItem.name !== migrationData.name
    )
    await stateInterface.set(state)
  }
}

export default down
