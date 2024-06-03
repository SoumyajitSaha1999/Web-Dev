// JWT stands for - JSON Web Token

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser"); // npm i cookie-parser
const { requireAuth } = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser()); // we use this middleware for cookies

// View Engine
app.set("view engine", "ejs");

// Database connection
const dbURI = "mongodb://localhost:27017/new"; // Connection String
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothie", requireAuth, (req, res) => res.render("smoothie"));
app.use(authRoutes);

// #Lecture:9 - Cookies Primer
/* app.get("/set-cookies", (req, res) => {
  // res.setHeader("Set-Cookie", "newUser = true");

  res.cookie("newUser", false);
  res.cookie("isEmployee", true, { maxAge: 1000 * 60 * 60 * 24 });
  res.cookie("isMarried", true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }); // that basically means now we can't access the cookie from the javascript (document.cookie)

  // res.cookie("isEmployee", true, { maxAge: 1000 * 60 * 60 * 24, secure: true }); // this means that cookie is only going to be sent when we have an https connection

  res.send("You got the cookies");
});

app.get("/read-cookies", (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    console.log(cookies.newUser);
    return res.json(cookies);
}) */

app.listen(3000, () => console.log("Server Started"));
