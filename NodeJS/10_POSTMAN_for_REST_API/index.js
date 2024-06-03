const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware - plugin
app.use(express.urlencoded({ extended: false })); // POSTMAN -> body -> urlencoded

app.post("/api/users", (req, res) => {
  const body = req.body; // The req.body object allows you to access data in a string or JSON object from the client side. You generally use the req.body object to receive data through POST and PUT requests in the Express server.
  console.log(body); // Undefined(Express don't know which type data it is and how to handle it. For that reason we use Middleware)
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success" });
  });
});

app
  .route("/api/users/:id")

  // .patch((req, res) => {
  //   const id = Number(req.params.id);
  //   const userNameUpdate = users.find((user) => user.id === id);
  //   Object.assign(userNameUpdate, req.body);
  //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //     return res.json({ status: "Update successfully" });
  //   });
  // })

  .patch((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id); // Find the index of the user
    console.log(userIndex);
    // if (userIndex === -1) {
    //     return res.status(404).json({ error: "User not found" }); // If user not found, return error
    // }
    const updatedUser = { ...users[userIndex], ...req.body }; // Merge existing user data with updated data
    users[userIndex] = updatedUser; // Replace old user data with updated data
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        // if (err) {
        //     return res.status(500).json({ error: "Internal server error" }); // If error writing file, return error
        // }
        return res.json({ status: "Update successful"});
    });
})


  .delete((req, res) => {
    const id = req.params.id * 1;
    const deleteData = users.find((user) => user.id === id);
    const index = users.indexOf(deleteData);
    users.splice(index, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "Deleted successfully" });
    });
  })

  .get((req, res) => {
    const id = Number(req.params.id); // params object allows you to capture dynamic values from the URL path.
    const user = users.find((user) => user.id === id);
    return res.json(user);
  });

app.listen(PORT, () => console.log("Server Started at PORT", PORT));

/* app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userNameUpdate = users.find((user) => user.id === id);
  Object.assign(userNameUpdate, req.body);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Update successfully" });
  });
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id * 1;
  const deleteData = users.find((user) => user.id === id);
  const index = users.indexOf(deleteData);
  users.splice(index, 1);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Deleted successfully" });
  });
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id); // params object allows you to capture dynamic values from the URL path.
  const user = users.find((user) => user.id === id);
  return res.json(user);
}); */
