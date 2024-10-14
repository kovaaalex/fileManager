import { createReadStream } from 'fs'
import { pipeline } from 'stream/promises'
import { stdout } from 'process'
export async function cat(filePath) {
    try {
        const read = createReadStream(filePath)
        await pipeline(read, stdout)
    } catch (error) {
        console.error('Operation failed')
    }
}