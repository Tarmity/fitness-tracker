const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./../Views/exercise.html"));
}) 

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch (err => {
        res.status(400).json(err);
    });
});

router.post("/api/workout/bulk", ({ body }, res) => {
    Workout.insertMany(body)
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workout", (req, res) => {
    Workout.find({})
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch (err => {
        res.status(400).json(err);
    });
});

module.exports = router;