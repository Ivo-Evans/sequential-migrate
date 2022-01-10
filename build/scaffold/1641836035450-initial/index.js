const fs = require('fs')
const path = require('path')
const db = require("../../connection")

module.exports = {
  description: '',
  up: async () => {
    const query = fs.readFileSync(path.join(__dirname, 'up.sql'), 'utf-8')
    console.log("Up 1")
    await db.query(query)
  },
  down: async () => {
    const query = fs.readFileSync(path.join(__dirname, 'down.sql'), 'utf-8')
    await db.query(query)
  },
}
