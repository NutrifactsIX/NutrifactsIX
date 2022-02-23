const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    firstName: {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
    preferDarkMode: {type: Boolean},
  });

  module.exports = mongoose.model('User', userSchema);