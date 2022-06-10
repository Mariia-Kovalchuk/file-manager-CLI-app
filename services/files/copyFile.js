import { cp, mkdir, readdir, copyFile as copyFilePr } from 'fs/promises';
import path from 'path';


export const copyFile = async (currentDir, commandArguments) => {
    const fileToCopyName = commandArguments[0];
    const fileToCopyPath = path.join(currentDir, fileToCopyName)
    const newDir = commandArguments[1];
    const newDirPath = path.join(currentDir, newDir);
    let copyFilePath= path.join(newDirPath, fileToCopyName)
    try {
        const files = await readdir(currentDir);
        if (files.includes(fileToCopyName)) {
            if (!files.includes(newDir)) {
                await mkdir(newDirPath);
            };
            const filesInNewDir = await readdir(newDirPath);
            if (filesInNewDir.includes(fileToCopyName)) {
                const copyFileName = 'copyOf'+ fileToCopyName;
                copyFilePath = path.join(newDirPath, copyFileName);
            }
            await copyFilePr(fileToCopyPath, copyFilePath);
            // console.log(`Operation succeeded.` );
        } else {
            throw new Error(`Operation failed. \n'${fileToCopyName}' file doesn't exists.`)
        }
    } catch (err) {
        console.log(err.message);
    }

};