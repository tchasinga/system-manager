const User = require ('../models/userModel')

// Loging user information
const loginUser = async (req, res) => {
  res.json({mssg : 'the user in logen in'})
}

// Signup user information
const signupUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.signup(email, password);
    res.status(200).json({email, user});
  } catch (error) {
    res.status(400).json({error : error.message});
  }
  // res.json({mssg : 'the user in signup'})
} 

// Exporting the functions
module.exports = {
  loginUser,
  signupUser
}