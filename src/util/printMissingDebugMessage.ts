import { MIGRATION_STATUS } from "../types";

const printMissingDebugMessage = () => console.log(`
  
  
${MIGRATION_STATUS.MISSING}: 

Explanation:
This migration was reported by your state interface, but it doesn't exist in your migrations folder.

Possible scenario:
You ran a migration which doesn't exist in this branch, and your state interface does not store state in source control.

Suggested fix:
Checkout the branch you ran this migration in and run its 'down' migration, then checkout this branch and run the up migration to the most recent state.
`);


export default printMissingDebugMessage