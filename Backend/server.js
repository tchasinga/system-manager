const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const helmet = require('helmet');

// Call workout here to access on it 
const workoutRoutes = require('./routes/workouts')

// Use helmet to set CSP headers
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'https://www.google-analytics.com'],
        fontSrc: ["'self'", 'https://management-system-t3or.onrender.com'],
      },
    })
  );
  

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
        app.listen(4000, () => {
            console.log('Congratulations! Now you are live on Atlas at port ', 4000);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Listen for request port
