import fsPromises from 'node:fs/promises';
import { cwd } from 'process';
import path from 'path';

export async function listFiles() {
  try {
    const currentDirectory = cwd()
    const filesAndDirs = await fsPromises.readdir(currentDirectory)
    const fileDetails = await Promise.all(
      filesAndDirs.map(async (item) => {
        const itemPath = path.join(currentDirectory, item);
        const stats = await fsPromises.stat(itemPath);
        return { Name: item, Type: stats.isDirectory() ? 'directory' : 'file' }
      })
    )
    const sortedItems = fileDetails.sort((a, b) => {
      if (a.Type === b.Type) return a.Name.localeCompare(b.Name)
      return a.Type === 'directory' ? -1 : 1
    });
    console.table(sortedItems)
  } catch (error) {
    console.error('Operation failed')
  }
}
