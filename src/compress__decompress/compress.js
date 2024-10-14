import { pipeline } from 'stream'
import { createWriteStream, createReadStream } from 'fs'
import { createGzip } from 'zlib'
export async function compress(pathFrom, pathTo) {
    try {
        const gzip = createGzip()
        const read = createReadStream(pathFrom)
        const write = createWriteStream(pathTo)
        pipeline(read, gzip, write)
    } catch (error) {
        console.error('Operation failed')
    }
}