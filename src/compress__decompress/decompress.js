import { pipeline } from 'stream'
import { createWriteStream, createReadStream } from 'fs'
import { createUnzip } from 'zlib'
export async function decompress(pathFrom, pathTo) {
    try {
        const write = createWriteStream(pathFrom)
        const read = createReadStream(pathTo)
        const unzip = createUnzip()
        pipeline(read, unzip, write)
    } catch (error) {
        console.error('Operation failed')
    }
}