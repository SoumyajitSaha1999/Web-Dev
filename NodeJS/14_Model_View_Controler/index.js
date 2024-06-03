
const express = require("express");

const { connectMongoDB } = require("./connections");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1").then(() => {
  console.log("MongoDB Connected");
});

app.use(express.urlencoded({ extended: false }));
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("Server Started!"));


// index.js --> connections.js --> modules.js --> routes.js --> controlers.js