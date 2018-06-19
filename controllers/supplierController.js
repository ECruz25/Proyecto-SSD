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

// exports.getSuppliers = async () => {
//   try {
//     const suppliers = await Supplier.find();
//     res.send(suppliers);
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.getSuppliers = async () => {
  try {
    const suppliers = await Supplier.find();
    console.log('suppliers');

    return suppliers;
  } catch (error) {
    console.log(error);
  }
};
