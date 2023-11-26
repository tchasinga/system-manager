const User = require ('../models/userModel')

// Loging user information
const loginUser = async (req, res) => {
  res.json({mssg : 'the user in logen in'})
}

// Signup user information
const signupUser = async (req, res) => {
  res.json({mssg : 'the user in signup'})
}

// Exporting the functions
module.exports = {
  loginUser,
  signupUser
}