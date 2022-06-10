
import { rename, readdir } from 'fs/promises';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';


export const renameFile = async (currentDir, commandArguments) => {
    const oldFileName = commandArguments[0]
    const newFileName = commandArguments[1]

    const oldFilePath = path.join(currentDir, oldFileName);
    const newFilePath = path.join(currentDir, newFileName);

    try {
        const files = await readdir(currentDir);

        if (files.includes(oldFileName)&&!files.includes(newFileName)) {
            await rename(oldFilePath, newFilePath);
            console.log(`${oldFileName} was renamed successfully.`);
        } else {
            throw new Error(`Operation failed. There's no file ${oldFileName} or ${newFileName} already exists.`)
        }

    } catch (err) {
        console.log(err.message);
    }

};