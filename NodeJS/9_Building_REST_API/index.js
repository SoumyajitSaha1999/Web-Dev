const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Routes
// HTML Document Render
app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul> `;
  res.send(html);
});

// JSON File Render
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Dynamic Path Parameters    
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id); // params object allows you to capture dynamic values from the URL path.
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

// POST
app.post("/api/users", (req, res) => {
  // TODO: Create new user
  return res.json({ status: "Pending" });
});

// PATCH
app.patch("/api/users/:id", (req, res) => {
  // TODO: Edit the user with ID
  return res.json({ status: "Pending" });
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
  // TODO: Delete the user with ID
  return res.json({ status: "Pending" });
});

app.listen(PORT, () => console.log("Server Started at PORT", PORT));

// /api/users/:id --> This route is same for dynamic path parameters, patch and delete. You can merge it. Like --
/* app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // TODO: Edit the user with ID
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    // TODO: Delete the user with ID
    return res.json({ status: "Pending" });
  }); */
