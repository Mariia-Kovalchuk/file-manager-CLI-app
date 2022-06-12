import os from "os"

 export const getCPUInfo = () => {
     try {
         const CPU = os.cpus();
         const CPUInfo = CPU.reduce((info, {model, speed}, idx, arr) => {
             info.push({model, clock_rate_GHz: speed/1000})
             return info
         },[])
         console.log(`Overall amount of CPUS: ${CPU.length}`);
         console.table(CPUInfo);
    
    } catch (error) {
        throw new Error("Operation failed")
    }
}
 

