const mongoose = require('mongoose');

const Customer = mongoose.model('Customer');
const promisify = require('es6-promisify');

exports.register = async (req, res) => {
  const customer = new Customer({ name: 'edwin' });
  await customer.save();
};
