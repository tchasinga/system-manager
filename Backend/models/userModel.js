const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

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

// Create a model for user