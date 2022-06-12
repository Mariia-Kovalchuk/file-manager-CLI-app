import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import path from 'path';

export const compressFile = async (currentDir, filePathArr) => {
    try {
        if (!filePathArr.length) {
             throw new Error("You've missed some argument. Please, try once more time."); 
        };
        const readFilePath = path.resolve(currentDir, filePathArr[0]);
        const compressedFileName = path.basename(readFilePath) + '.br';
        let writeFilePath;
        if ( filePathArr.length===1) {
            writeFilePath = readFilePath;
            
        } else {
            writeFilePath = path.resolve(currentDir, filePathArr[1], compressedFileName);
            
        }
        const brotli = createBrotliCompress();
        const readStream = createReadStream(readFilePath);
        const writeStream = createWriteStream(writeFilePath);

        await pipeline(readStream, brotli, writeStream);
        console.log('Compressing succeeded');
        
    } catch (err) {
        console.error('Operation failed.\n', err.message);
    }

};
