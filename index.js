import { stdin } from 'process'
import { homedir } from 'os'
import { getHomeDir } from './src/os/homedir.js'
import { getUserName } from './src/os/username.js'
import { getArch } from './src/os/arch.js'
import { getEOL } from './src/os/eol.js'
import { getCPUS } from './src/os/cpus.js'
import { hashing } from './src/hash/hash.js'
import { compress } from './src/compress__decompress/compress.js'
import { decompress } from './src/compress__decompress/decompress.js'
import { addFile } from './src/basic/add.js'
import { cat } from './src/basic/cat.js'
import { remove } from './src/basic/rm.js'
import { renameFile } from './src/basic/rn.js'
import { move } from './src/basic/mv.js'
import { copyFile } from './src/basic/cp.js'
async function fileManager() {
    try {
        const readStream = stdin
        const args = process.argv.slice(2)
        const userName = args.find(arg => arg.startsWith('--username')).split('=')[1]
        console.log(`Welcome to the File Manager, ${userName}`)
        console.log(`You are currently in ${homedir()}`)
        readStream.on('data', async (chunk) => {
            const data = chunk.toString().trim()
            const paths = data.split(' ')
            switch(paths[0]) {
                case 'os': {
                    switch(paths[1]) {
                        case '--EOL': {
                            console.log(await getEOL())
                            break
                        }
                        case '--cpus': {
                            console.table(await getCPUS())
                            break
                        }
                        case '--homedir': {
                            console.log(await getHomeDir())
                            break
                        }
                        case '--arch': {
                            console.log(await getArch())
                            break
                        }
                        case '--username': {
                            console.log(await getUserName())
                            break
                        }
                        default: {
                            console.error('Invalid input')
                            break
                        }
                    }
                    break
                }
                case 'hash': {
                    await hashing(paths[1])
                    break
                }
                case 'add': {
                    await addFile(paths[1])
                    break
                }
                case 'cat': {
                    await cat(paths[1])
                    break
                }
                case 'cp': {
                    await copyFile(paths[1], paths[2])
                    break
                }
                case 'mv': {
                    await move(paths[1], paths[2])
                    break
                }
                case 'rm': {
                    await remove(paths[1], paths[2])
                    break
                }
                case 'rn': {
                    await renameFile(paths[1], paths[2])
                    break
                }
                case 'compress': {
                    await compress(paths[1], paths[2])
                    break
                }
                case 'decompress': {
                    await decompress(paths[1], paths[2])
                    break
                }
                default: {
                    console.error('Invalid input')
                    break
                }
            }
        })
        process.on('SIGINT', () => process.exit())
        process.on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`))
    } catch (error) {
        console.error('Operation failed')
    }
    
}
await fileManager()
