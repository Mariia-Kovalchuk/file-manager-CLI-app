import os from "os"

 export const getCPUsArchitecture = () => {
     const architecture = os.arch();
     console.log("architecture:", architecture);
}
 

