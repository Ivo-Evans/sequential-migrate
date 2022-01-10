const pg =  require("pg")
const dotenv =  require ("dotenv")

dotenv.config();

const db = new pg.Client({ connectionString: process.env.DATABASE_URL });

db.connect()

const doIt = async () => {
  console.log("About to query....")
  console.log(db.query)
  const stateRaw = await db.query("table migrations")
  console.log("🍍   stateRaw", stateRaw);
}

doIt()
