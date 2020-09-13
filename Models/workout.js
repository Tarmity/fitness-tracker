const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise"
        },
        duration: {
            type: Number,
            required: "Enter exercise time in minutes"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }]
})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;