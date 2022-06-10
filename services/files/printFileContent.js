import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { createReadStream } from 'fs';



export const printFileContent = async (currentDir, argsArr) => {
    const fileName = argsArr.join();

    try {
        const files = await readdir(currentDir);

        if (files.includes(fileName)) {
            const fileToReadPath = path.join(currentDir, fileName);
            // const content = await readFile(fileToReadPath, { encoding: 'utf8' });
            // console.log(content);


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