const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Req Recived\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);

    fs.appendFile("data.txt", log, (err, result) => {
        switch(myUrl.pathname){
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