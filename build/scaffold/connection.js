const pg =  require ("pg")

// use a Client over a Pool to ensure migrations are run one after the other
const db = new pg.Client({ connectionString: 'Keep this secret with an environment variable' });

db.connect()

module.exports = db;
