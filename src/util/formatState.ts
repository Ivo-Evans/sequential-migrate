import { StateItem, State, MIGRATION_STATUS, FormattedState } from '../types'

interface TypeCounts {
  [index: string]: number
}


const determineMigrationStatus = (
  doesMigrationExistInState: boolean,
  typeCounts: TypeCounts
) => {
  if (
    !doesMigrationExistInState &&
    typeCounts[MIGRATION_STATUS.PENDING] &&
    typeCounts[MIGRATION_STATUS.RAN]
  ) {
    return MIGRATION_STATUS.SKIPPED
  } else if (!doesMigrationExistInState) {
    return MIGRATION_STATUS.PENDING
  } else {
    return MIGRATION_STATUS.RAN
  }
}


const formatState = (
  migrationNames: string[],
  state: State
): FormattedState => {
  const stateDictionary = state.reduce(
    (acc: Record<string, StateItem>, stateItem: StateItem) => {
      acc[stateItem.name] = stateItem
      return acc
    },
    {}
  )

  const typeCounts: TypeCounts = {}

  const formattedMigrations = migrationNames.map((migrationName: string) => {
    const stateEntry = stateDictionary[migrationName]

    const status = determineMigrationStatus(!!stateEntry, typeCounts)

    typeCounts[status] = (typeCounts[status] || 0) + 1

    const formattedMigration = stateEntry
      ? { ...stateEntry, status }
      : { name: migrationName, description: '', runAt: null, status }

    if (!stateEntry) {
      delete stateDictionary[migrationName]
    }

    return formattedMigration
  })

  const formattedMissingEntries = Object.values(stateDictionary).map(
    (stateEntry) => {
      return { ...stateEntry, status: MIGRATION_STATUS.MISSING }
    }
  )

  const sortedAndFormattedState = [
    ...formattedMigrations,
    ...formattedMissingEntries,
  ].sort((a, b) => a.name.localeCompare(b.name))

  return sortedAndFormattedState
}

export default formatState

