const router = require("express").Router();
const Workout = require("../models/workout.js");
const { db } = require("../models/workout.js");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./../html/exercise"));
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

router.put("api/workouts/:id", async (req, res) => {
    const dbworkout = await Workout.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true}
    );
    res.json(dbworkout);
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbworkout => res.json(dbworkout))
        .catch (err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(dbworkout => {
        res.json(dbworkout)
    })
    .catch(err => {
        res.json(err)
    });
});

router.post("/api/workouts/range", (req, res) => {
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;