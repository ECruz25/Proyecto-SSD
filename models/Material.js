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
  supplier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Supplier',
  },
});

module.exports = mongoose.model('Material', materialSchema);
