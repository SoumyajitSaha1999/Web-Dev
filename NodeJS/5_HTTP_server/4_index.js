const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Recived\n`;
    fs.appendFile("log.txt", log, (err, result) => {
        res.end("Hello From server");
    })
})

myServer.listen(8004, () => console.log("Server Started!"));