import { MIGRATION_STATUS } from "../types"

const printSkippedDebugMessage = () => console.log(`
  
  
${MIGRATION_STATUS.SKIPPED}: 

Explanation:
This migration exists in your migrations folder, but your state interface reports that a migration that comes after this one has been run and this one has not been run.

Possible scenario:
You are not keeping migration state in source control (for instance, you keep it in the database). You and your team mate created migrations in different branches, and you have merged your team-mate's branch into yours without reverting the migration state to the last shared point.

Suggested fix:
Rollback by running the down command to the skipped state, and then run the up command to the most recent migration.
`);

export default printSkippedDebugMessage