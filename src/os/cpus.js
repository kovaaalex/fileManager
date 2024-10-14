import os from 'os'
export async function getCPUS() {
    return os.cpus()
}