const fs = require('fs');

// Make Directory
fs.mkdir('Atts',(err)=>{
    console.log("Folder created");
})

// Create File And Write
fs.writeFile("Atts/Async.txt","Nothig to Write",(err)=>{
    console.log('file created');
    console.log(err);
});

// Update File
fs.appendFile("Atts/Async.txt","All Good",(err)=>{
    console.log("Task Completed");
    console.log(err);
});

// Read File
fs.readFile('Atts/Async.txt','utf8',(err,data)=>{
    console.log(data);
    console.log(err);
});

// Rename File
fs.rename('Atts/Async.txt','Atts/AsyncFs.txt',(err)=>{
    console.log("File Renamed");
    console.log(err);
});

// Delete File
fs.unlink('Atts/AsyncFs.txt',(err)=>{
    console.log("File deleted");
    console.log(err);
});

// Delete Folder
fs.rmdir('Atts',(err)=>{
    console.log(err);
});