// 1st example
/* const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("This is a middleware1"); // This middleware neither ends the response nor calls the next function. 
                                         // It's hold the request. For that reason the web page will load continuously
})

app.get("/", (req, res) => {
  return res.send("Welcome to home page");
});

app.get("/users", (req, res) => {
  return res.send("Welcome to user page");
});

app.listen(8000, () => console.log("Server Started!")); */


// 2nd example
/* const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
    return res.send("This is a middleware"); // This middleware has ended the response. so we can't access the route
})

app.get("/", (req, res) => {   
  return res.send("Welcome to home page");
});

app.get("/users", (req, res) => {
  return res.send("Welcome to user page");
});

app.listen(8000, () => console.log("Server Started!")); */


// 3rd example
/* const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  if (req.query.age) {
    next();
  } else {
    return res.send("Please provide your age");
  }
});

app.get("/", (req, res) => {
  return res.send("Welcome to home page");
});

app.get("/users", (req, res) => {
  return res.send("Welcome to user page");
});

app.listen(8000, () => console.log("Server Started!")); */


// 4th example
/* You can create multiple Middleware. Like --> */
/* const express = require("express");
const app = express();

// Application-Level Middleware
app.use((req, res, next) => {
  if (req.query.age) {
    next();
  } else {
    return res.send("Please provide your age");
  }
});

app.use((req, res, next) => {
  if (req.query.age >= 18) {
    next();
  } else {
    return res.send("You are under aged");
  }
});

app.get("/", (req, res) => {
  return res.send("Welcome to home page");
});

app.get("/users", (req, res) => {
  return res.send("Welcome to user page");
});

app.listen(8000, () => console.log("Server Started!")); */


//5th example
/* This middleware applies to every Routes by default and it is known as Application-Level Middleware. 
But now you want to specific middleware to some particular Routes and this is known as Route-Level Middleware */
const express = require("express");
const app = express();

// Route-Level Middleware
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    return res.send("Please provide your age");
  } else if (req.query.age <= 17) {
    return res.send("You are under aged");
  } else {
    next();
  }
};
app.use(reqFilter);

app.get("/", (req, res) => {
  return res.send("Welcome to home page");
});

app.get("/users", reqFilter, (req, res) => { // Here we apply Middleware on single route(/users). You can also use it multiple route 
  return res.send("Welcome to user page");
});

app.get("/about", (req, res) => {
    return res.send("Welcome to about page");
  });

app.listen(8000, () => console.log("Server Started!"));


//6th example
// const express = require("express");
// const app = express();
// const route = express.Router();

// // Route-Level Middleware
// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     return res.send("Please provide your age");
//   } else if (req.query.age <= 17) {
//     return res.send("You are under aged");
//   } else {
//     next();
//   }
// };
// app.use(reqFilter);

// app.get("/", (req, res) => {
//   return res.send("Welcome to home page");
// });

// route.get("/users", (req, res) => {
//   return res.send("Welcome to user page");
// });

// route.get("/about", (req, res) => {
//   return res.send("Welcome to about page");
// });

// app.use("/", route);
// app.listen(8000, () => console.log("Server Started!"));
