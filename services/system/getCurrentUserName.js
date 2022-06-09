import os from "os"

 export const getCurrentUserName = () => {
     try {
         const userName = os.userInfo().username;
         console.log(`Current user name: ${userName}`);
    
    } catch (error) {
        throw new Error("Operation failed")
    }
}
