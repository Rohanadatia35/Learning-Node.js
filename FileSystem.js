const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'CRUD');
const filePath=`${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,"this is a text file");

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,"my name is rohan.",(err)=>{
//     if(!err) console.log("file is updated")
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("successfully renamed")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);

