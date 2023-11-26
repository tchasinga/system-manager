const express = require('express');
const router = express.Router();
// Importing user controller
const { loginUser,signupUser} = require('../controller/userController')

// Adding routes for user
router.post('/login', loginUser);

// Adding also routes for signup 
router.post('/signup', signupUser);


// Import routes for user
module.exports = router; 