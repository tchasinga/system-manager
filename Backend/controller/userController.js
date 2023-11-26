const User = require ('../models/userModel')
const jwt = require('jsonwebtoken');

// Creating a Jsontoken that will  be user signed and more else 
const createToken = (_id) => {
 return jwt.sign({_id}, process.env.SECRET_KEYJWT, {expiresIn : '5d'})
}

// Loging user information
const loginUser = async (req, res) => {
  const {email, password} = req.body;
  try{
    const user = await User.login(email, password)

    // Creating a token for the user
    const token = createToken(user._id);
    res.status(200).json({email, token});
  } catch (error) {
    res.status(400).json({error : error.message});
  } 
}

// Signup user information
const signupUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.signup(email, password);
     
    // Creating a token for the user
    const token = createToken(user._id);

    res.status(200).json({email, token});
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