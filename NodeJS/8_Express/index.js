const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => { 
    return res.send("Hello From About Page " + "Hey " + req.query.myName);
    
});

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Server Started!"));

app.listen(8000, () => console.log("Server Started!"))