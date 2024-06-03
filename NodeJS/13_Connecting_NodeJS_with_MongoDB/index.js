const express = require("express");
const mongoose = require("mongoose");  

const app = express();
const PORT = 8000;

// Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
 },
  {timestamps: true}
);

// Model
const User = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false })); // POSTMAN -> body -> urlencoded

app.get("/users", async(req, res) => {
  const allDbUsers = await User.find({}); // {} means all the users
  const html = `
      <ul>
          ${allDbUsers.map((user) => `<li>${user.firstName} -${user.email}</li>`).join("")}
      </ul> `;
  res.send(html);
});

app.get("/api/users", async(req, res) => {
  const allDbUsers = await User.find({}); // {} means all the users
  return res.json(allDbUsers);
});

app.post("/api/users", async(req, res) => {
  const body = req.body;
  if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
    return res.status(400).json({ msg: "All fildes are required..." });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName:body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  console.log(result);
  return res.status(201).json({ msg: "Success" });
});

app
  .route("/api/users/:id")
  .get(async(req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  })

  .patch(async(req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "Success" });
  })
  .delete(async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" });
  });

app.listen(PORT, () => console.log("Server Started at PORT", PORT));