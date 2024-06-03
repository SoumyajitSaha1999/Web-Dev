const fs = require("fs"); // fs stands for File System

// Sync...
fs.writeFileSync("test.txt", "Hey there"); // It will create a txt file in same directory
fs.writeFileSync("./test.txt", "Hello World"); // It will override the old content of test.txt file
fs.writeFileSync("./rakhi.txt", "This is a txt file"); // It will create a txt file in same directory
// fs.writeFileSync("../test50.txt", "Hey there"); <-- It will create txt file in parent directory

// Async...
fs.writeFile("saha.txt", "Asynchronous file", (err) => {});
