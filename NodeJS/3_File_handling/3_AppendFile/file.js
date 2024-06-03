const fs = require("fs");

// Now we want Content will continue to be added below
fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./text.txt", " Date\n");
