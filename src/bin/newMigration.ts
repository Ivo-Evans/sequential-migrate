import getConfig from "../util/getConfig"
import dynamicRequire from "../util/dynamicRequire"


const newMigration = (name: string) => {
  const config = getConfig()
  const migrationBuilder = dynamicRequire(config.newMigrationBuilder)
  migrationBuilder(config.migrations, name)
}

export default newMigration;