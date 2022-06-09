import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import path from 'path';

export const compressFile = async (currentDir, filePathArr) => {
   const readFilePath = path.join(currentDir, filePathArr[0])
    const writeFilePath = path.join(currentDir, filePathArr[1])
    try {
        const readStream = createReadStream(readFilePath)
        const brotli = createBrotliCompress();
        const writeStream = createWriteStream(writeFilePath)

        await pipeline(readStream, brotli, writeStream);
        console.log('Compressing succeeded');
        
    } catch (err) {
        console.error('Operation failed"', err.message);
    }

};



