const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  materialList: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Material',
  },
  materialAmount: {
    type: [Number],
  },
});

module.exports = mongoose.model('Product', productSchema);
