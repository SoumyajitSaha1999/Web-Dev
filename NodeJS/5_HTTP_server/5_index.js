const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Recived\n`;
    fs.appendFile("data.txt", log, (err, result) => {
        switch(req.url){
            case "/": 
                res.end("Home Page");
                break;
            case "/about":
                res.end("I am Piyush Garg");
                break;
            default:
                res.end("404 Not Found");
        }
    }) 
})

myServer.listen(8000, () => console.log("Server Started!"));