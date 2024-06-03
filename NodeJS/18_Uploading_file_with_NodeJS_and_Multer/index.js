/*const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 8000; 

//const upload = multer({ dest: "uploads/" }); // From front-end the file that the user will upload put it in the uploads file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads"); // Where the file will be store
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`); // The name of the upload file 
  },
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});

app.listen(PORT, () => console.log("Server Started at PORT " + `${PORT}`));*/

const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 8000;

//const upload = multer({ dest: "uploads/" }); // From front-end the file that the user will upload put it in the uploads file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      return cb(null, "./demo/image");
    } else {
        return cb(null, "./demo/document")
    }
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now()+"-"+file.originalname); 
  },
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.post("/upload", upload.fields([{ name: "profileImage" }, { name: "coverImage" }]), (req, res) => {
    console.log(req.body);
    console.log(req.files);
    return res.redirect("/");
});

app.listen(PORT, () => console.log("Server Started at PORT " + `${PORT}`));
