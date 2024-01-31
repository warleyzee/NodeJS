const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    wakl(files, rootDir);  
}

async function wakl(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

         
        if (/\.git/g.test(fileFullPath)) continue

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue; 
        }

        if(!/\.dwg$/g.test(fileFullPath)) continue;

        console.log(file, stats.isDirectory());
    }
}

readdir('C:/Users/Warley Souza/OneDrive - Glenbrier Ltd/Documents/OneDrive - Glenbrier Ltd/Airton - Site Master/xx PROJECT NAME - Design Team xx/');



//  fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))