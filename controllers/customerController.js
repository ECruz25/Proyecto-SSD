const mongoose = require('mongoose');
const faker = require('faker');

const Customer = mongoose.model('Customer');
const promisify = require('es6-promisify');

exports.register = async (req, res) => {
  for (let x = 0; x < 10; x++) {
    const customer = new Customer({ name: faker.company.companyName() });
    await customer.save();
  }
};
