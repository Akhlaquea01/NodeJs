const EventEmitter = require("events");

const event = new EventEmitter();

event.on('SayMyName',()=>{
    console.log('Your Name is Atts');
})
event.on('SayMyName',()=>{
    console.log('Your Name is Atts2');
})
event.on('SayMyName',()=>{
    console.log('Your Name is Atts3');
})
event.emit("SayMyName");

// Passing Parameter
event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc} and page is ${msg}`);
})
event.emit("checkPage",200,'ok');
