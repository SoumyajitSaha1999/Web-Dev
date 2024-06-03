const express = require("express");
const path = require("path"); // For linr no 20
const { connectToMongoDB } = require("./connections");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouter")

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB Connected")
);


/* For Side Server Rendering we use Templating Templating. Some example of Templating Engine are EJS(Embedded JavaScript templating),
 pug and handlebars. We use EJS bz express is very comfortable with EJS */

// It tells our express that which View Engine we want to use
app.set("view engine", "ejs");
// It tells our express that where my EJS file
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* app.get("/test", async(req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  })
}) */

app.use("/", urlRoute)
// app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => console.log(`Server Startes at PORT: ${PORT}`));


/* app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
 }); */




