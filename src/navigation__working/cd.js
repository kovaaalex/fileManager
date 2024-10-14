import path from 'path'
import { chdir } from 'process'
import { homedir } from 'os';

export async function cd(directoryPath) {
    try {
        const newPath = path.resolve(directoryPath)
        chdir(newPath)
    } catch (error) {
        console.error('Operation failed')
    }
}