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



// async function invokeAction({ action, id, name, email, phone }) {
//     switch (action) {
//         case 'list':
//             try {
//                 const contacts = await contactsHandler.listContacts();
//                 console.table(contacts);
                
//             } catch (error) {
//                 console.log(error.message);
//             };
//             break;
            
//         case 'get':
//             try {
//                 const contact = await contactsHandler.getContactById(id)
//                 if (!contact) {
//                     console.log(`There is no contact with id ${id}`);
//                     return;
//                 }
//                 console.log(`Contact with id ${id}: `, contact);
                    
//             } catch (error) {
//                 console.log(error.message);
//             };
//             break;
            
//         case 'add':
//             try {
//                 const updatedList = await contactsHandler.addContact(name, email, phone)
//                 if (!updatedList) {
//                     console.log('Name, email and phone should be send in request');
//                     return;
//                 }
//                 console.log(`The new contact ${name} was added successfully. The updated contact list:`);
//                 console.table(updatedList);
                    
//             } catch (error) {
//                 console.log(error.message);
//             }
//             break;
            
//         case 'remove':
//             try {
//                 const updatedContactList = await contactsHandler.removeContact(id)
//                 if (!updatedContactList) {
//                     console.log(`There is no contact with id ${id}`);
//                     return;
//                 }
//                 console.log(`The contact with id ${id} was removed successfully. The updated contact list:`);
//                 console.table(updatedContactList);
//             } catch (error) {
//                 console.log(error.message);
//             }
//             break;

//         default:
//             console.warn('\x1B[31m Unknown action type!');
//     }
// }

// invokeAction(argv);