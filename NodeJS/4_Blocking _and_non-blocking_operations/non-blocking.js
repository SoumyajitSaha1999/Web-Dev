const fs = require("fs");

console.log("1");

// Async...Non-Blocking...
const result = fs.readFile("contacts.txt", "utf8", (err, result) => {
    if(err){
        console.log("Error", err);
    }else{
        console.log(result);
    }
});

console.log("2");
console.log("3");

/* PS F:\Web Dev\NodeJS\4_Blocking _and_non-blocking_operations> node .\non-blocking.js
1
2
3
Piyush Garg = +91 1111111111
John Garg = +91 2222222222 */