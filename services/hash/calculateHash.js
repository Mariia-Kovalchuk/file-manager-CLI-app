const { createHash } = await import('crypto');
 import { readFile } from 'fs/promises';
import path from 'path';


export const calculateHash = async (currentDir, filePathArr) => {
    try {
        const hash = createHash('sha256');
        const filePath = path.join(currentDir, filePathArr[0]);
        const data = await readFile(filePath, { flag: "r" });
        hash.update(data);
        console.log(hash.digest('hex'));
    
    } catch (error) {
        console.log("Operation failed");
    }

};
