import { readdir } from 'fs/promises';
import { existsSync } from 'fs';


export const getFolderContents = async (currentDir) => {
    
    try {
        if (existsSync(currentDir)) {
            const files = await readdir(currentDir);
            if (files.length) {
                console.log(files);
                
            } else {
                console.log("The current folder is empty");
            }
        } else {
            throw new Error("Operation failed")
        }
    } catch (err) {
        console.log(err.message);
    }

};
