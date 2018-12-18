var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email : {
      tyoe: String,
      required: "Valid email must be provided"
  },
  password: {
      type: String,
      required: "Must provide a password"
  },
  name : {
      type: String,
      required: "Must provide a name"
  },
  gender : {
      type: String,
      required: "Must provide gender"
  },
  birthDate : {
      type: Date,
      required: "Valid birthdate must be provided"
  },
  createdDate : {
      type: Date,
      default: Date.now
  },
  isBlocked : {
      type: Boolean,
      default: false
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;