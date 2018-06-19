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
    const pendingInvoices = await invoiceController.getPendingInvoices();
    const products = {};
    for (const pendingInvoice of pendingInvoices) {
      for (let x = 0; x < pendingInvoice.productList.length; x++) {
        products[pendingInvoice.productList[x]] = pendingInvoice.productAmount[x];
      }
    }
    const missingProducts = await productController.getMissingProducts(products);
    // const suppliers = missingProducts.map(async () => await materialController.getSuppliers);
  } catch (error) {
    console.log(error);
  }
};
