const fs =require('fs');

// Create a new File
fs.writeFileSync('read.txt',"Welcome to Node Js.");

// Append Data In Same File
fs.appendFileSync('read.txt',"My name is Akhlaque :-)");

// Read Data From File;
const bufferData=fs.readFileSync('read.txt');

const originalData=bufferData.toString();
console.log(originalData);

// Rename File
fs.renameSync('read.txt','ReadWrite.txt');

// CURD Operation in FS

// Create Directory
fs.mkdirSync("FileSystem");

fs.writeFileSync('FileSystem/bio.txt',"Welcome to Node Js.");
fs.appendFileSync('FileSystem/bio.txt',"My name is Akhlaque :-)");
const data=fs.readFileSync("FileSystem/bio.txt","utf8");
console.log(data);
fs.renameSync('FileSystem/bio.txt','FileSystem/myBio.txt');

// Remove File
fs.unlinkSync('FileSystem/myBio.txt');

// Delete Directory
fs.rmdirSync("FileSystem")