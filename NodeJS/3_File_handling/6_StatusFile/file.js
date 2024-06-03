const fs = require("fs");

console.log(fs.statSync("text.txt"));
console.log(fs.statSync("text.txt").isFile());

/* PS F:\Web Dev\NodeJS\3_File_handling\6_StatusFile> node file.js
Stats {
  dev: 3259286136,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 281474976719703,
  size: 0,
  blocks: 0,
  atimeMs: 1702022314746.1868,
  mtimeMs: 1702022314746.1868,
  ctimeMs: 1702022314746.1868,
  birthtimeMs: 1702022314746.1868,
  atime: 2023-12-08T07:58:34.746Z,
  mtime: 2023-12-08T07:58:34.746Z,
  ctime: 2023-12-08T07:58:34.746Z,
  birthtime: 2023-12-08T07:58:34.746Z
}
true
PS F:\Web Dev\NodeJS\3_File_handling\6_StatusFile>*/