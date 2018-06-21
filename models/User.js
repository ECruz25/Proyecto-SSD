const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  role: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
