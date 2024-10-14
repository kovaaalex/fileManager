import { promises as fs } from 'fs'
import path from 'path'
export async function renameFile(fileName, newFileName) {
    try {
        const dirName = path.dirname(fileName);
        const distPath = path.join(dirName, newFileName);
        await fs.rename(path.normalize(fileName), distPath);
    } catch(error) {
        console.error('Operation failed')
    }
}