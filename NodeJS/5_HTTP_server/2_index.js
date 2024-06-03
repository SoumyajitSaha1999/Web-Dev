const http = require("http");

const myServer = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.headers);
    res.end("Hello From Server");
})

myServer.listen(8001, () => console.log("Server Started!"));

/* N.B: If you make any change on the server, that will not show on the browser page. You need to restart the browser page. 
For stop the browser press ctrl+c */