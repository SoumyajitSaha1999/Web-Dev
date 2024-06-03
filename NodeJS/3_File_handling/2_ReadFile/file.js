const fs = require("fs");

// Sync...
const result = fs.readFileSync("contacts.txt", "utf8");
console.log(result);

// Async
fs.readFile("./contacts.txt", "utf8", (err, result) => {
    if(err){
        console.log("Error", err);
    }else{
        console.log(result); 
    }
})

/* PS F:\Web Dev\NodeJS\3_File_handling\2_ReadFile> node file.js
Piyush Garg = +91 1111111111
John Garg = +91 2222222222
Piyush Garg = +91 1111111111
John Garg = +91 2222222222 */