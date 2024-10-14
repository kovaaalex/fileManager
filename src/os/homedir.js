import { homedir } from 'os'
export async function getHomeDir() {
    return homedir()
}