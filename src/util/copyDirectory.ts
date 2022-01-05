import fs from 'fs'
import path from 'path'

const copyDirectory = (src: string, dest: string) => {
  fs.mkdirSync(dest, { recursive: true })

  let entries = fs.readdirSync(src, { withFileTypes: true })

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name)
    let destPath = path.join(dest, entry.name)

    entry.isDirectory()
      ? copyDirectory(srcPath, destPath)
      : fs.copyFileSync(srcPath, destPath)
  }
}

export default copyDirectory
