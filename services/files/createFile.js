
import { readdir, writeFile } from 'fs/promises';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// const filesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), 'files');


export const createFile = async (currentDir, fileNameArr) => {
    try {
        if (!fileNameArr.length) {
            console.log("You've forgotten to write a file name. Please, try once more time."); 
            return
        }
        const fileName = fileNameArr[0];
        const files = await readdir(currentDir);
        if (!files.includes(fileName)) {
            const newFilePath = path.join(currentDir, fileName);
            await writeFile(newFilePath, '')
            console.log(`File "${fileName}" was successfully added.`);
        } else {
            throw new Error("Operation failed. file already exists")
        }
    } catch (err) {
        console.log(err.message);
    }

};
