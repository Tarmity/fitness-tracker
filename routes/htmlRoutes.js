const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./../html/index.html"));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./../html/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname +"./../html/stats.html"));
});

module.exports = router;