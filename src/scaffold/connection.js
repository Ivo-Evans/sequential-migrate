const pg = require("pg");

throw new Error("You did not provide a connection string after scaffolding the project")

// use a Client over a Pool to ensure migrations are run one after the other
const db = new pg.Client({
  connectionString: "Keep this secret with an environment variable",
});

db.connect();

module.exports = db;
