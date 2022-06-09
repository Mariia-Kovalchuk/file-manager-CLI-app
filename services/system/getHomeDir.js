import os from "os"

 export const getHomeDir = () => {
     try {
         let homeDir = os.homedir()
         return homeDir
    
    } catch (error) {
        throw new Error("Operation failed")
    }
}
 

