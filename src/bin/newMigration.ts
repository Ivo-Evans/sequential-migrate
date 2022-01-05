import getConfig from "../util/getConfig"
import dynamicRequire from "../util/dynamicRequire"

const {argv} = process 

const newMigration = () => {
  const name = argv[argv.indexOf("new") + 1]
  const config = getConfig()
  const migrationBuilder = dynamicRequire(config.newMigrationBuilder)
  migrationBuilder(config.migrations, name)
}

export default newMigration;