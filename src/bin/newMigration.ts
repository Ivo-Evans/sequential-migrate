import getConfig from "../util/getConfig"
import dynamicRequire from "../util/dynamicRequire"


const newMigration = (name?: string) => {
  console.log("🍍   newMigration", newMigration);
  const config = getConfig()
  console.log("🍍   config", config);
  const migrationBuilder = dynamicRequire(config.newMigrationBuilder)
  migrationBuilder(config.migrations, name)
}

export default newMigration;