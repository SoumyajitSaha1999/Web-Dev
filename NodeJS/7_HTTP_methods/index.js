const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method}: ${req.url} New Req Recived\n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("data.txt", log, (err, result) => {
        switch(myUrl.pathname){
            case "/": 
                if(req.method === "GET") res.end("Home Page");
                break;
            case "/signup":
                if(req.method === "GET") res.end("This is a signup form");
                else if(req.method === "POST") {
                    // DB Query
                    res.end("Success");
                }   
            default:
                res.end("404 Not Found");
        }
    }) 
})

myServer.listen(8000, () => console.log("Server Started!"));