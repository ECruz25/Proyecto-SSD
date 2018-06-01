const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const supplierContractSchema = new mongoose.Schema({
  supplier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Supplier',
    required: 'Please provide a supplier',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SupplierContract', supplierContractSchema);
