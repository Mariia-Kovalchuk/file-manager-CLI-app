import { unlink, readdir } from 'fs/promises';
import path from 'path';


export const deleteFile = async (currentDir, commandArguments) => {
    try {
        if (commandArguments.length<2) {
            throw new Error("You've missed some argument. Please, try once more time.");
        };
        const fileName = path.basename(commandArguments[0]);
        const fileToRemovePath = path.resolve(currentDir, commandArguments[0]);
        const files = await readdir(currentDir);


        if (files.includes(fileName)) {
            await unlink(fileToRemovePath);
            console.log(`Operation succeeded.`);
        } else {
            throw new Error(`Operation failed. There's no file ${fileName}`)
        }

    } catch (err) {
        console.log(err.message);
    }

};