var mongoose = require("mongoose");

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/friends-social-api', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.User = require("./user");