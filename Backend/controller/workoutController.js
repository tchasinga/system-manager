const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) =>{
   const workouts  = await Workout.find({}).sort({createdAt: -1})
   res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid workout ID" });
    }

    try {
        const workout = await Workout.findById(id);
        if (!workout) {
            return res.status(404).json({ error: "No such workout here" });
        }
        res.json(workout); // Sending the fetched workout as a response
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};


// create a new workout
const createWorkout = async (req, res) => {
    const {title, reps , load} = req.body 

    // add new document to db 
    try{
        const workout = await Workout.create({title, reps , load})
        workout.save()
        res.status(200).json(workout)
    }catch(errors){
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid workout ID" });
    }

    try {
        const workout = await Workout.findOneAndDelete({ _id: id });
        if (!workout) {
            return res.status(404).json({ error: "No such workout here" });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};



// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid workout ID" });
    }
    const workout  = await Workout.findOneAndUpdate({_id: id} , {
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({ error: "No such workout here" });
    }
    res.status(200).json(workout);
}

// Import of those action in one single life of export methode
module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}