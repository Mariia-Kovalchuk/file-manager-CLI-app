import { readdir } from 'fs/promises';
import { existsSync } from 'fs';


export const getFolderContents = async (currentDir) => {
    
    try {
        if (existsSync(currentDir)) {
            const files = await readdir(currentDir);
            console.log(files);
        } else {
            throw new Error("Operation failed")
        }
    } catch (err) {
        console.log(err.message);
    }

};
