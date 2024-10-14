import { arch } from 'os'
export async function getArch() {
    return arch()
}