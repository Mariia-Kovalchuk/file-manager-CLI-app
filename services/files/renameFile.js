
import { rename, readdir } from 'fs/promises';
import path from 'path';


export const renameFile = async (currentDir, commandArguments) => {
    try {
        if (commandArguments.length < 2) {
            throw new Error("You've missed some argument. Please, try once more time.");
        };
        const oldFileName = path.basename(commandArguments[0]);
        const oldFileNameExtension = path.extname(oldFileName);
        const newFileName = commandArguments[1] + oldFileNameExtension;

        const oldFilePath = path.resolve(currentDir, commandArguments[0]);
        const newFilePath = path.resolve(path.dirname(oldFilePath), newFileName);

            const files = await readdir(path.dirname(oldFilePath));

        if (files.includes(oldFileName) && !files.includes(newFileName)) {
            await rename(oldFilePath, newFilePath);
            console.log(`${oldFileName} was renamed successfully.`);
        } else {
            throw new Error(`Operation failed. There's no file ${oldFileName} or ${newFileName} already exists.`)
        }

    } catch (err) {
        console.log(err.message);
    }

};