import path from "path";
import { existsSync } from 'fs';


export const goToDedicatedFolder = (currentDir, destinationPath) => {
    try {
        if (!destinationPath.length) {
            console.log("You've forgotten to write a directory. Please, try once more time."); 
            return
        }
        const dedicatedFolder = path.join(currentDir, destinationPath.join())
        if (existsSync(dedicatedFolder)) {
            return dedicatedFolder
        } else {
            throw new Error(`Operation failed.\nPlease, check input data. Path ${dedicatedFolder} doesn't exists`);
        }
    } catch (err) {
        console.log(err.message);
    }
}

