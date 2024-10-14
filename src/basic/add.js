import { promises as fs } from 'fs'
import path from 'path'
import { cwd } from 'process'

export async function addFile(newFile) {
    try {
        const pathToNewFile = path.resolve(cwd(), newFile)
        await fs.open(pathToNewFile, 'a')
    } catch (err) {
        console.error('Operation failed')
    }
}
