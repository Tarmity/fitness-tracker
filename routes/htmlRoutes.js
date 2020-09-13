const path = require("path");
const router = require("express").Router();

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./../Views/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname +"./../Views/stats.html"));
});

module.exports = router;