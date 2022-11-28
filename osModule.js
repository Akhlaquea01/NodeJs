const os = require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(`${os.freemem()/1024/1024/1024} free memory`);
console.log(`${os.totalmem()/1024/1024/1024} total memory`);
console.log(os.tmpdir());
console.log(os.type());