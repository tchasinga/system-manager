const express = require('express')
require('dotenv').config()

// Call workout here to access on it 
const workoutRoutes = require('./routes/workouts')


// To use express must call it back
const app = express()

// To use Midowaller 
app.use(express.json())
app.use((req, res , next) =>{
    console.log(req.path, req.method)
    next()
})

// making a request object router
app.use('/api/workouts',workoutRoutes)


// Listen for request port
app.listen(process.env.PORT, () =>{
    console.log('Listening on port ' , process.env.PORT)
})