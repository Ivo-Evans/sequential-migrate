import fs from 'fs'
import path from 'path'
import copyDirectory from '../util/copyDirectory'

const scaffold = () => {
  const folderPath = path.join(process.cwd(), 'migration')
  const doesItAlreadyExist = fs.existsSync(folderPath)
  if (doesItAlreadyExist) {
    console.log(`\n\nWARN: ${folderPath} already exists, aborting`)
    return
  }

  copyDirectory(path.join(__dirname, '..', 'scaffold'), folderPath)
}

export default scaffold
