import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import path from 'path';

export const decompressFile = async (currentDir, filePathArr) => {
    try {
    if (!filePathArr.length) {
             throw new Error("You've missed some argument. Please, try once more time."); 
        };

        const readFilePath = path.resolve(currentDir, filePathArr[0]);
        const decompressedFileName = path.basename(readFilePath).replace('.br', '');
        let writeFilePath;
        if ( filePathArr.length===1) {
            writeFilePath = path.resolve(path.dirname(readFilePath), decompressedFileName);
            
        } else {
            writeFilePath = path.resolve(currentDir, filePathArr[1], decompressedFileName);
            
        }

        const readStream = createReadStream(readFilePath);
        const decompression = createBrotliDecompress();
        const writeStream = createWriteStream(writeFilePath);

        await pipeline(readStream, decompression, writeStream);
        console.log('Decompressing succeeded');
        
    } catch (err) {
        console.error('Operation failed.', err.message);
    }

};



