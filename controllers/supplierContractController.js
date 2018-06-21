const mongoose = require('mongoose');
const faker = require('faker');

const SupplierContract = mongoose.model('SupplierContract');
const Supplier = mongoose.model('Supplier');
const PurchaseOrder = mongoose.model('PurchaseOrder');
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

exports.getPenaltiesCost = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    const data = [];

    // const supplierContracts = await SupplierContract.find();

    // for (const supplierContract of supplierContracts) {
    //   supplierContract.penalty = faker.finance.amount(1000.0, 2000.0, 2);
    //   supplierContract.incompleteContract = faker.finance.amount(100000.0, 200000.0, 2);
    //   await supplierContract.save();
    // }

    for (const supplier of suppliers) {
      const purchaseOrders = await PurchaseOrder.find({
        status: 'Expired',
        supplier: supplier._id,
      });
      const supplierContract = await SupplierContract.find({
        supplier: supplier._id,
      });
      // console.log(supplierContract[0]);
      await data.push({
        supplier: supplier.name,
        cantidad: faker.finance.amount(100000),
        penalidad: supplierContract[0].penalty * Object.keys(purchaseOrders).length,
        incumplimientoDeContrato: supplierContract[0].incompleteContract,
      });
    }
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
