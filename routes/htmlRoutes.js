const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./../html/index"));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./../html/exercise"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname +"./../html/stats"));
});

module.exports = router;