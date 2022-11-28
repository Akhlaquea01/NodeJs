const fs = require("fs");
const bioData = {
  name: "Akhlaque",
  age: 23,
  channel: "Akhlaque Ahmad",
};
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

const objData = JSON.parse(jsonData);
// console.log(objData);
// fs.writeFile('json1.json',jsonData,(err,data)=>{
//     console.log("Done");
// })

fs.readFile('json1.json',"utf-8",(err,data)=>{
    const originalData=JSON.parse(data);
    console.log(originalData);
})