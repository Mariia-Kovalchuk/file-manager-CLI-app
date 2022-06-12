import path from "path";


export const goUpperFromDir = (currentDir) => {
    try {
        const upperDir = path.dirname(currentDir);
        return upperDir;
    
    } catch (error) {
        throw new Error("Operation failed")
    }
};

