import { createReadStream, createWriteStream, promises as fs } from 'fs'
import path from 'path'
import { pipeline } from 'stream/promises'
export async function move(filePath, newDirectoryPath){
    try {
        const read = createReadStream(filePath)
        const filename = path.parse(filePath).base
        const newFilePath = path.join(path.normalize(newDirectoryPath), filename)
        const write = createWriteStream(newFilePath)
        await pipeline(read, write)
        await fs.rm(path.normalize(filePath))
    } catch (error) {
        console.error('Operation failed')
    }
}