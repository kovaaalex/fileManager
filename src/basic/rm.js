import { promises as fs } from 'fs'
import path from 'path'
export async function remove(filePath) {
    try{
        await fs.rm(path.normalize(filePath))
    } catch(error) {
        console.error('Operation failed')
    }
}