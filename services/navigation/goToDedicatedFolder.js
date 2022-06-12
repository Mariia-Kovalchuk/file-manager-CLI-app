import path from "path";
import { existsSync } from 'fs';


export const goToDedicatedFolder = (currentDir, destinationPath) => {
    try {
        if (!destinationPath.length) {
            console.log("You've forgotten to write a directory. Please, try once more time."); 
            return
        }
        const parsedDestinationFolderPath = path.normalize(destinationPath.join())
        const dedicatedFolderPath = path.resolve(currentDir, parsedDestinationFolderPath)
        if (existsSync(dedicatedFolderPath)) {
            return dedicatedFolderPath
        } else {
            throw new Error(`Operation failed.\nPlease, check input data. Path ${dedicatedFolderPath} doesn't exists`);
        }
    } catch (err) {
        console.log(err.message);
    }
}

