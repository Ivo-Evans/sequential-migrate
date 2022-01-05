const fs = require('fs')
const path = require('path')

module.exports = {
  description: '',
  up: async () => {
    const query = fs.readFileSync(path.join(__dirname, 'up.sql'), 'utf-8')
  },
  down: async () => {
    const query = fs.readFileSync(path.join(__dirname, 'down.sql'), 'utf-8')
  },
}
