import getConfig from "../../util/getConfig"
import dynamicRequire from "../../util/dynamicRequire"


const newMigration = async (name?: string) => {
  const config = await getConfig()
  const migrationBuilder = await dynamicRequire(config.newMigrationBuilder)
  await migrationBuilder.build(config.migrations, name)
}

export default newMigration;