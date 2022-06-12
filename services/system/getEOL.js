import os from "os"

export const getEOL = () => {
    try {
        console.log("os.EOL:" + JSON.stringify(os.EOL));
    
    } catch (error) {
        throw new Error("Operation failed")
    }
}

  
 

