const path = require('path')
const fs = require('fs')
const util = require('util')

const copyFile = util.promisify(fs.copyFile)
const mkdir = util.promisify(fs.mkdir)

module.exports = async function build(folder, name) {

  const folderName = Date.now() + (name ? '-' + name : '')
  const folderPath = path.join(folder, folderName)

  await mkdir(folderPath, { recursive: true })

  const templateNames = ['index.js', 'up.sql', 'down.sql']

  await Promise.all(
    templateNames.map((templateName) => {
      const templatePath = path.join(__dirname, 'templates', templateName)
      const outputPath = path.join(folderPath, templateName)
      return copyFile(templatePath, outputPath)
    })
  )

}