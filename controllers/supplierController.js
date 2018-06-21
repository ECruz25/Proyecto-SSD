const mongoose = require('mongoose');
const faker = require('faker');

const Supplier = mongoose.model('Supplier');

// exports.generateSuppliers = async () => {
//   for (let index = 0; index < 8; index++) {
//     try {
//       const supplier = new Supplier({ name: faker.company.companyName() });
//       await supplier.save();
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };

exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.send(suppliers);
  } catch (error) {
    console.log(error);
  }
};

exports.getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.send(supplier);
  } catch (error) {
    console.log(error);
  }
};

exports.getSupplier2 = async id => {
  try {
    const supplier = await Supplier.findById(id);
    return supplier;
  } catch (error) {
    console.log(error);
  }
};

exports.getSuppliers2 = async () => {
  try {
    const suppliers = await Supplier.find();
    return suppliers;
  } catch (error) {
    console.log(error);
  }
};
