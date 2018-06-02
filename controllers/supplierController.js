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
