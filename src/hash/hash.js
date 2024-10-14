import { createHash } from 'crypto'
import { createReadStream } from 'fs'
export async function hashing(pathFile) {
    const readStream = createReadStream(pathFile)
    const hash = createHash('sha256')
    readStream.on('data', (chunk) => { hash.update(chunk) })
    readStream.on('end', () => { console.log(`${hash.digest('hex')}`) })
    readStream.on('error', (error) => { console.error('Operation failed')})
}