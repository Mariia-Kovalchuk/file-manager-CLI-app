
import { createWriteStream } from 'fs';
import { readdir, writeFile } from 'fs/promises';
import path from 'path';



export const createFile = async (currentDir, fileNameArr) => {
    try {
        if (!fileNameArr.length) {
            console.log("You've forgotten to write a file name. Please, try once more time."); 
            return
        }
        const fileName = fileNameArr[0];
        const files = await readdir(currentDir);
        if (!files.includes(fileName)) {
            const newFilePath = path.resolve(currentDir, fileName);
            const ws = createWriteStream(newFilePath);
            ws.end()

            console.log(`File "${fileName}" was successfully added.`);
        } else {
            throw new Error("Operation failed. file already exists")
        }
    } catch (err) {
        console.log(err.message);
    }

};
