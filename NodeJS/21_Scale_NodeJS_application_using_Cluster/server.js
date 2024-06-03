// const cluster = require("cluster");
// const os = require("os");
// const express = require("express");

// const totalCPUs = os.cpus().length;
// // const totalCPU = os.availableParallelism();
// // console.log(totalCPU);

// if (cluster.isMaster) {

//   // Fork workers.
//   for (let i = 0; i < totalCPUs; i++) {
//     cluster.fork();
//   }
// } else {
//   const app = express();
//   const PORT = 8000;

//   app.get("/", (req, res) => {
//     console.log(`Request handled by process ${process.pid}`);

//     return res.json({ message: `Hello from Express Server ${process.pid}` });
//   });

//   app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
// }

// const cluster = require("cluster");
// const os = require("os");
// const express = require("express");

// const totalCPUs = os.cpus().length;

// if (cluster.isMaster) {
//   for (let i = 0; i < totalCPUs; i++) {
//     cluster.fork();
//   }
// } else {
//   const app = express();
//   const PORT = 8000;

//   app.use((req, res, next) => {
//     // Middleware to log the process ID for each incoming request
//     console.log(`Incoming request handled by process ${process.pid}`);
//     next();
//   });

//   app.get("/", (req, res) => {
//     const id = process.pid;
//     return res.json({ message: `Hello from Express Server ${process.pid}`,id });
//   });

//   app.listen(PORT, () => console.log(`Server Started at PORT:${PORT} (Process ID: ${process.pid})`));
// }

const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');
const express = require('express');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();
  const PORT = 8000;

  app.get('/', (req, res) => {
    res.writeHead(200);
    res.end(`Hello from Express Server ${process.pid}\n`);
  });

  app.listen(PORT, () => console.log(`Worker ${process.pid} started at PORT:${PORT}`));
}