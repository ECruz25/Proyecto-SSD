const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  cost: {
    type: Number,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  productsList: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Product',
  },
});

module.exports = mongoose.model('Material', materialSchema);
