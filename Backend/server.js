const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

// Call workout here to access on it
const workoutRoutes = require('./routes/workouts');

// To use express, create an app instance
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Set up Content Security Policy (CSP) headers
app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src data: https://www.google-analytics.com; font-src 'self' https://management-system-t3or.onrender.com https://fonts.googleapis.com;"
    );
    next();
  });
  

// Set up routes for /api/workouts
app.use('/api/workouts', workoutRoutes);

// Connect to the database
const myLink =
  'mongodb+srv://devmanager:jack202050081@managers.yhrutkj.mongodb.net/mymanager?retryWrites=true&w=majority';

mongoose
  .connect(myLink)
  .then(() => {
    app.listen(4000, () => {
      console.log('Congratulations! Now you are live on Atlas at port', 4000);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
