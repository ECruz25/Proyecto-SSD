const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const customerContractSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Customer',
    required: 'Please provide a customer',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  penalty: {
    type: Number,
    required: 'Please provide penalty amount',
  },
});

module.exports = mongoose.model('CustomerContract', customerContractSchema);
