const express = require("express");
const { connectToMongoDB } = require("./connections");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB Connected")
);

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/", urlRoute);
// app.use("/url", urlRoute);

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




