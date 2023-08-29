// express must be used everywhere in order to access use all request if needed
const express = require('express');
const router = express.Router();
const {createWorkout , getWorkouts,
     getWorkout , deleteWorkout,updateWorkout} = require('../controller/workoutController')

 

// Making a GET request
router.get('/', getWorkouts)

// Making a single GET request using ID
router.get('/:id', getWorkout)

// Making a POST request
router.post('/', createWorkout) 

// Making a DELETE request
router.delete('/:id', deleteWorkout);

// Making a PUT request
router.patch('/:id', updateWorkout);

module.exports = router; 