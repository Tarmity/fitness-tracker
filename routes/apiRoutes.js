const router = require("express").Router();
const Workout = require("../models/workout");

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
    .then(dbworkout => res.json(dbworkout))
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;