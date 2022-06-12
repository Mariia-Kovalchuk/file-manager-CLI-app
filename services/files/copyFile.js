import { createReadStream, createWriteStream } from 'fs';
import { readdir, stat } from 'fs/promises';
import path from 'path';



export const copyFile = async (currentDir, commandArguments) => {
    try {
        if (!commandArguments.length) {
            throw new Error("You've missed some argument. Please, try once more time.");
        };
        const fileToCopyName = path.basename(commandArguments[0]);
        const fileToCopyPath = path.resolve(currentDir, commandArguments[0]);
        const fileToCopyFolderPath = path.dirname(fileToCopyPath);
        let newDirPath;
        if (commandArguments.length === 1) {
            newDirPath = fileToCopyFolderPath;
            
        } else {
            const newDir = commandArguments[1];
            newDirPath = path.resolve(currentDir, newDir);
        };
        let copyFilePath = path.join(newDirPath, fileToCopyName)
   
        const files = await readdir(fileToCopyFolderPath);
        const isNewDirExists = await stat(fileToCopyFolderPath);
        if (files.includes(fileToCopyName) && isNewDirExists) {
            const filesInNewDir = await readdir(newDirPath);
            if (filesInNewDir.includes(fileToCopyName)) {
                const copyFileName = 'copyOf' + fileToCopyName;
                copyFilePath = path.join(newDirPath, copyFileName);
            }
            
            const rs = createReadStream(fileToCopyPath);
            const ws = createWriteStream(copyFilePath);
            rs.pipe(ws)
            console.log(`The copy operation succeeded.`);
        } else {
            throw new Error(`Operation failed. \n'${fileToCopyName}' file doesn't exists.`)
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(`Operation failed. \n'"${newDir}" directory doesn't exists.`);
            
        }
        console.log(err.message);
    }

};