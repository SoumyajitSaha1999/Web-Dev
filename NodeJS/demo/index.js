const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

app.use(express.urlencoded({extended: false}));

app.get("/users", (req, res) => {
    const html = 
    `<ul>
       ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    return res.send(html);
});

app.get("/api/users", (req, res) => {
    return res.json(users)
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    console.log(body);
    users.push({id: users.length+1,  ...body});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({status: "successful"});
    })
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const deleteUser = users.findIndex(user => user.id === id);
    console.log(deleteUser);
    users.splice(deleteUser, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, result) => {
       return res.json({status: "successful"});
    })
  });
// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })

app.listen(port, () => console.log(`server started at port ${port}`))