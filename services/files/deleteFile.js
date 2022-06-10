import { unlink, readdir } from 'fs/promises';
import path from 'path';


export const deleteFile = async (currentDir, commandArguments) => {
    const fileName = commandArguments[0]
    const fileToRemovePath = path.join(currentDir, fileName)

    try {
        const files = await readdir(currentDir);

        if (files.includes(fileName)) {
            await unlink(fileToRemovePath);
            console.log(`Operation succeeded.` );
        } else {
            throw new Error(`Operation failed. There's no file ${fileName}`)
        }

    } catch (err) {
        console.log(err.message);
    }

};