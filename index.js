import readline from "readline";

import navigationHandler from "./services/navigation/index.js";
import osInfoHandler from "./services/system/index.js";
import filesHandler from "./services/files/index.js";
import { calculateHash } from "./services/hash/calculateHash.js";
import compressFn from "./services/compression/index.js";

 let currentDir = osInfoHandler.getHomeDir()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const userName = process.argv[2].split("=")[1]


rl.setPrompt(`Welcome to the File Manager, ${userName}! \nYou are currently in ${currentDir}\n \n`)
rl.prompt();

rl.on("line", async (command) => {
    let commandType = command.toLowerCase().trim().split(" ")[0]
    let commandArguments = command.trim().split(" ").slice(1);
    if (commandType === '.exit') {
        rl.close();
        return;
    };
    
    switch (commandType) {
        case "up":
            currentDir = navigationHandler.goUpperFromDir(currentDir)
            break;
        
        case "cd":
            const newDir = navigationHandler.goToDedicatedFolder(currentDir, commandArguments);
            if (newDir) {
                currentDir = newDir
            }
            break;
        
        case "ls":
            await navigationHandler.getFolderContents(currentDir);
            break;
        
        case "cat":
            await filesHandler.printFileContent(currentDir, commandArguments);
            break;
        
        case "add":
            await filesHandler.createFile(currentDir, commandArguments)
            break;
        
        case "rn":
            await filesHandler.renameFile(currentDir, commandArguments)
            break;
        
        case "cp":
            await filesHandler.copyFile(currentDir, commandArguments)
            break;
        
        case "mv":
            await filesHandler.moveFile(currentDir, commandArguments)
            break;
        
        case "rm":
            await filesHandler.deleteFile(currentDir, commandArguments)
            break;
        
        case "os":
            switch (commandArguments[0]) {
                case "--EOL":
                    osInfoHandler.getEOL()
                    break;
                case "--cpus":
                    osInfoHandler.getCPUInfo()
                    break;
                case "--homedir":
                    const homeDir = osInfoHandler.getHomeDir()
                    console.log("homedir:", homeDir);
                    break;
                case "--username":
                    osInfoHandler.getCurrentUserName();
                    break;
                case "--architecture":
                    osInfoHandler.getCPUsArchitecture();
                    break;
                default:
                    console.warn('Invalid input');
                    break;
            }
            break;
                        
        case "hash":
            await calculateHash(currentDir, commandArguments)
            break;
        
        case "compress":
            await compressFn.compressFile(currentDir, commandArguments)
            break;
        
        case "decompress":
            await compressFn.decompressFile(currentDir, commandArguments)
            break;
        
        default:
            console.warn('Invalid input');
            break;
    }
    console.log(`You are currently in ${currentDir}\n`);
  
});

rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${userName}!`);
})
