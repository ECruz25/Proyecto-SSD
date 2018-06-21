const mongoose = require('mongoose');
const faker = require('faker');

const CustomerContract = mongoose.model('CustomerContract');
const promisify = require('es6-promisify');
const customerController = require('../controllers/customerController');

const Customer = mongoose.model('Customer');

exports.register = async (req, res) => {
  const customers = await Customer.find();
  for (const customer of customers) {
    const customerContract = new CustomerContract({
      customer: customer._id,
      penalty: faker.finance.amount(),
    });
    await customerContract.save();
  }
};
