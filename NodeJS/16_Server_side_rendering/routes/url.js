const express = require("express");
const { handleGenerateNewShortURL, handleGetShortURL, handleGetAnalytics } = require("../controlers/url");

const router = express.Router();

router.post("/url", handleGenerateNewShortURL);
router.get("/:shortId", handleGetShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
