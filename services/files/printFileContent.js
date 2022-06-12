import { readdir } from 'fs/promises';
import path from 'path';
import { createReadStream } from 'fs';


export const printFileContent = async (currentDir, argsArr) => {

    try {

        const filePath = argsArr[0];
        const fileToReadPath = path.resolve(currentDir, filePath);
        const fileName = path.basename(fileToReadPath);
        const files = await readdir(currentDir);

        if (files.includes(fileName)) {
            await new Promise((res) =>
                createReadStream(fileToReadPath)
                    .on('data', (data) => {
                        console.log(data.toString())
                    })
                    .on('close', res)
            );

        } else {
            throw new Error(`Operation failed.\nThere's no file ${fileName} in current directory`)
        }
    } catch (err) {
        console.log(err.message);
    }


};