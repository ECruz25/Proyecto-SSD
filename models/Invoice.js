const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const invoiceSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: 'Pending',
  },
  dateCompleted: {
    type: Date,
  },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Customer',
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  productList: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Product',
  },
  productAmount: {
    type: [Number],
  },
});

module.exports = mongoose.model('Invoice', invoiceSchema);
