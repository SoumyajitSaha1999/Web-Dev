const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false })); // POSTMAN -> body -> urlencoded

app.get("/api/users", (req, res) => {
  // You can add your Custom Headers. Always add X to Custom Headers and it is good practice
  res.header("X-MyName", "Piyush Garg");
  // console.log(req.headers); --> {purpose: 'Youtube Tutorial',....}
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  if (!body || !body.first_name || !body.last_name || !body.email || !body.gendet || !body.job_title) {
    return res.status(400).json({ msg: "All fildes are required..." });
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "Success" });
  });
});

app.get("/api/users/:id",(req, res) => {
    const id = Number(req.params.id); // params object allows you to capture dynamic values from the URL path.
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  });

app.listen(PORT, () => console.log("Server Started at PORT", PORT));
