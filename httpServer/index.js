const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end("Hello From the home side");
  } else if (req.url == "/about") {
    res.end("Hello From the about side");
  } else if (req.url == "/userApi") {
    res.writeHead(200, { "content-type": "application/josn" });
    fs.readFile(`${__dirname}/userApi.json`, "utf-8", (err, data) => {
      const objData = JSON.parse(data);
      res.end(objData[0].name);
    });
  } else if (req.url == "/contact") {
    res.write("Hello From the contact side");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Hello From the 404 page</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server running at port 3000");
});
