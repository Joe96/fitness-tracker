const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises:
     [
        { 
            name: {
            type: String,
            trim: true,
            required: "Enter a name of exercise"
            },
            type: {
            type: String,
            required: "Type of workout?"
            },
            duration: {
            type: String,
            required: "Type of workout?"
            },
            weight: {
            type: Number,
            required: "Type of workout?"
            },
            reps: {
            type: Number,
            required: "Type of workout?"
            },
            sets: {
            type: Number,
            required: "Type of workout?"
            },
            distance: {
            type: Number,
            required: "Type of workout?"
            },
        } 
    ],
        
   
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
