const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const bcrypt = require('bcrypt');

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
userSchema.statics.signup = async (email, password) => {
  const exists = await this.findOne({email});
  if (exists) {
    throw new Error('This Email is already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hash =  await bcrypt.hash(password, salt);

  const user =await this.create({email, password : hash});
  return user;
}

// Exports userSchema  
module.exports = mongoose.model('User', userSchema);