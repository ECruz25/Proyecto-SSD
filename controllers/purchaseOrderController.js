const mongoose = require('mongoose');

const PurchaseOrder = mongoose.model('PurchaseOrder');

const invoiceController = require('../controllers/invoiceController');
const productController = require('../controllers/productController');
const supplierController = require('../controllers/supplierController');
const materialController = require('../controllers/materialController');

exports.getPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = PurchaseOrder.find();
    res.send(purchaseOrders);
  } catch (error) {
    res.send(error);
  }
};

exports.getPurchaseOrder = async (req, res) => {
  try {
    const purchaseOrders = PurchaseOrder.findById(req.params.id);
    res.send(purchaseOrders);
  } catch (error) {
    res.send(error);
  }
};

exports.registerPurchaseOrder = async (req, res) => {
  try {
    const purchaseOrder = new PurchaseOrder(req.body);
    await purchaseOrder.save();
  } catch (error) {
    res.send(error);
  }
};

exports.deletePurchaseOrder = async (req, res) => {
  try {
    const purchaseOrder = new PurchaseOrder(req.body);
    await purchaseOrder.save();
  } catch (error) {
    res.send(error);
  }
};

exports.plan = async (req, res) => {
  try {
    // agarra todos los invoices que esten pending
    const pendingInvoices = await invoiceController.getPendingInvoices();
    const products = {};
    for (const pendingInvoice of pendingInvoices) {
      for (let x = 0; x < pendingInvoice.productList.length; x++) {
        products[pendingInvoice.productList[x]] = pendingInvoice.productAmount[x];
      }
    }
    // consigue cuantos productos hacen falta para terminar todos los invoices
    const missingProducts = await productController.getMissingProducts(products);
    console.log({ missingProducts });
    // consigue los materiales
    const materials = await productController.getMaterials(missingProducts);
    console.log({ materials });

    // consigue los materialesId
    const materialsId = Object.keys(materials).map(material => material);
    // consigue los suppliers a los que se les tiene que pedir
    const suppliersDuplicate = await materialController.getSuppliers(materialsId);

    const suppliers = {};

    suppliersDuplicate.map(async supplier => {
      // console.log(supplier);
      suppliers[supplier] = await materialController.getMaterialListBySupplier2(supplier);
    });

    // console.log(req.user);
    // console.log(materials);
    setTimeout(() => {
      const pendingPurchaseOrders = [];
      for (const supplier in suppliers) {
        const materialsId = [];
        const materialsAmount = [];
        for (const material of suppliers[supplier]) {
          if (materials[material._id] !== undefined) {
            materialsId.push(material._id);
            materialsAmount.push(materials[material._id]);
          }
          console.log(material._id, materials[material._id]);
        }
        // console.log(materialsId);
        const purchaseOrder = new PurchaseOrder({
          status: 'Pending Approval',
          supplier,
          user: req.user,
          materialList: materialsId,
          materialAmount: materialsAmount,
        });
        pendingPurchaseOrders.push(purchaseOrder);
        // console.log(purchaseOrder);
      }
      res.send(pendingPurchaseOrders);
    }, 1000);
    // console.log(pendingPurchaseOrders);
  } catch (error) {
    console.log(error);
  }
};
