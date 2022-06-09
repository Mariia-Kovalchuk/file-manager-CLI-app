import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import path from 'path';

export const decompressFile = async (currentDir, filePathArr) => {
   const readFilePath = path.join(currentDir, filePathArr[0])
   const writeFilePath = path.join(currentDir, filePathArr[1])
    try {
        const readStream = createReadStream(readFilePath)
        const writeStream = createWriteStream(writeFilePath)
        const brotli = createBrotliDecompress();

        await pipeline(readStream, brotli, writeStream);
        console.log('Decompressing succeeded');
        
    } catch (err) {
        console.error('Operation failed"', err.message);
    }

};



