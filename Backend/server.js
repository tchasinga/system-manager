const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

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

//Connect to dataBase side 
const myLink = "mongodb+srv://devmanager:jack202050081@managers.yhrutkj.mongodb.net/mymanager?retryWrites=true&w=majority";

mongoose.connect(myLink)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Congratulations! Now you are live on Atlas at port ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Listen for request port
