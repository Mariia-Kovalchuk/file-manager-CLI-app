import readline from "readline";
import os from "os"
import path from "path";


let currentDir = os.homedir()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const userName = process.argv[2].split("=")[1]

rl.setPrompt(`Welcome to the File Manager, ${userName}! \nYou are currently in ${currentDir}\n`)
rl.prompt();

rl.on("line", (command) => {
    let commandType = command.toLowerCase().trim().split(" ")[0]
    let commandArguments = command.toLowerCase().trim().split(" ").slice(1)
    // console.log(commandType);
    console.log("commandArguments", commandArguments);
    switch (command.toLowerCase().trim().split(" ")[0]) {
        case ".exit":
            rl.close();
                
            break;
        case "up":
            currentDir = path.dirname(currentDir)
            console.log(`You are currently in ${currentDir}`);
            break;
        case "cd":
            break;
        case "ls":
            break;
        case "cat":
            break;
        case "add":
            break;
        case "rn":
            break;
        case "cp":
            break;
        case "mv":
            break;
        case "rm":
            break;
        case "os":
            switch (commandArguments[0]) {
                case "--EOL":
                    
                    break;
                case "--cpus":
                    
                    break;
                case "--homedir":
                    
                    break;
                case "--username":
                    console.log("--username");
                    
                    break;
                case "--architecture":
                    console.log("at --architecture");
                    break;
                        
                default:
                    console.warn('Invalid input');
                    break;
            }
            break;
                        
        case "hash":
            break;
        case "compress":
            break;
        case "decompress":
            break;
        default:
            console.warn('Invalid input');
            break;
    }
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