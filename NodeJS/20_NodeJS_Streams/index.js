const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");
const zlib = require("zlib");

const app = express();
const PORT = 8000;

app.use(status());

// Stream Read (text.txt) --> Zipper --> Fs write stream
fs.createReadStream("./text.txt").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./sample.zip"))
);

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./text.txt", "utf-8");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

/* app.get("/", (req, res) => {
  fs.readFile("./text.txt", (err, data) => {
    res.end(data);
  });
}); */

app.listen(PORT, () =>
  console.log(`Server Started at http://localhost:${PORT}`)
);
