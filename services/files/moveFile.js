import { copyFile } from "./copyFile.js";
import { deleteFile } from "./deleteFile.js";
import { unlink,  } from 'fs/promises';


export const moveFile = async (currentDir, commandArguments) => {
    try {
        await copyFile(currentDir, commandArguments);
        await deleteFile(currentDir, commandArguments)
    } catch (error) {
        console.log(error);
    }
}