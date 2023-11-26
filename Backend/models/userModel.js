const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

// Create a schema for user
const userSchema = new Schema({
  email  : {
    type : String,
    required : true,
    unique : true,
    trim : true,
  },
  password : {
    type : String,
    required : true,
    trim : true,
  }
}, { 
  timestamps : true,
});

// Create a stactic signup method for user
userSchema.statics.signup = async function(email, password) {
   
  //  Adding a validator case..
   if (!email || !password) {
     throw new Error('Email and password are required');
   }

   if(!validator.isEmail(email)) {
      throw new Error('Email is invalid');
    }
  
    if(!validator.isStrongPassword(password)) {
      throw new Error('Password is not strong enough');
    }
 // Validator area added 


  const exists = await this.findOne({email});
  if (exists) {
    throw new Error('This Email is already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hash =  await bcrypt.hash(password, salt);

  const user =await this.create({email, password : hash});
  return user;
}

// Create a stactic login method for user
userSchema.statics.login = async function(email, password) {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  const user = await this.findOne({email});
  if (!user) {
    throw new Error('Email is not found in our database');
  }
  const match = await bcrypt.compare(password, user.password);
  
  if(!match){
    throw new Error('Password is not correct');
  }
  return user;
}


// Exports userSchema  
module.exports = mongoose.model('User', userSchema);