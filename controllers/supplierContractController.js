const mongoose = require('mongoose');
const faker = require('faker');

const SupplierContract = mongoose.model('SupplierContract');
const materialController = require('../controllers/materialController');
const supplierController = require('../controllers/supplierController');

exports.createContract = async (req, res) => {
  try {
    const suppliers = await supplierController.getSuppliers();
    for (const supplier of suppliers) {
      // console.log('asdasd');
      const materials = await materialController.getMaterialListBySupplier(supplier._id);

      const days = [];
      for (const material of materials) {
        days.push(Math.floor(Math.random() * 10) + 1);
      }

      const supplierContract = new SupplierContract({
        supplier: supplier._id,
        materialList: materials,
        amountOfDays: days,
      });

      await supplierContract.save();
    }
    // const contract = new SupplierContract(req.body);
    // await product.save();
  } catch (error) {
    res.send(error);
  }
};

exports.getContracts = async (req, res) => {
  try {
    const supplierContracts = await SupplierContract.find();
    res.send(supplierContracts);
  } catch (error) {
    console.log(error);
  }
};

exports.getContract = async (req, res) => {
  try {
    const supplierContracts = await SupplierContract.find({
      supplier: req.params.id,
    });
    res.send(supplierContracts);
  } catch (error) {
    console.log(error);
  }
};
