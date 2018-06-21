const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const purchaseOrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: 'Open',
  },
  dateCompleted: {
    type: Date,
  },
  supplier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Supplier',
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  materialList: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Material',
  },
  materialAmount: {
    type: [Number],
    required: 'Please include amount',
  },
  total: {
    type: Number,
  },
});

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
