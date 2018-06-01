const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model('Supplier', supplierSchema);
