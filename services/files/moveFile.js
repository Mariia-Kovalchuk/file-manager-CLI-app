import { copyFile } from "./copyFile.js";
import { deleteFile } from "./deleteFile.js";


export const moveFile = async (currentDir, commandArguments) => {
    try {
        await copyFile(currentDir, commandArguments);
        await deleteFile(currentDir, commandArguments)
    } catch (error) {
        console.log(error);
    }
}