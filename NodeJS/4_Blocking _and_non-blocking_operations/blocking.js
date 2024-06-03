const fs = require("fs");

console.log("1");

// Sync...Blocking...
const result = fs.readFileSync("contacts.txt", "utf8");
console.log(result);

console.log("2");
console.log("3");

/* PS F:\Web Dev\NodeJS\4_Blocking _and_non-blocking_operations> node .\blocking.js
1
Piyush Garg = +91 1111111111
John Garg = +91 2222222222
2
3 */