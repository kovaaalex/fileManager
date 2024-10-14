import { chdir, cwd } from 'process'
import { homedir } from 'os'

export const up = async () => {
  try {
    if (cwd() !== homedir()) chdir('..')
  } catch (err) {
    console.error('Operation failed')
  }
}