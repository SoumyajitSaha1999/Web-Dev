const fs = require("fs");

fs.mkdirSync("my-docs");
fs.mkdirSync("new-file/a/b", {recursive: true});