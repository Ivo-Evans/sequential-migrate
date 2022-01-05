import { readdirSync } from 'fs'
import path from 'path'
import { FolderPath } from '../types'

const getFolderContentsAlphabetised = (folderPath: FolderPath): string[] => {
  const files = readdirSync(path.join(process.cwd(), folderPath))
  return files.sort((a, b) => a.localeCompare(b))
}

export default getFolderContentsAlphabetised
