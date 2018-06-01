const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model('Customer', customerSchema);
