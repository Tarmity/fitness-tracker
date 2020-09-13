const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./../Views/exercise.html"));
}) 


router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch (err => {
        res.status(400).json(err);
    });
});

router.put("api/workout/:id", async (req, res) => {
    const dbworkout = await Workout.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true}
    );
    res.json(dbworkout);
})

module.exports = router;