const mongoose = require('mongoose');
const faker = require('faker');
const moment = require('moment');

const PurchaseOrder = mongoose.model('PurchaseOrder');
const Supplier = mongoose.model('Supplier');
const Product = mongoose.model('Product');

const invoiceController = require('../controllers/invoiceController');
const productController = require('../controllers/productController');
const supplierController = require('../controllers/supplierController');
const materialController = require('../controllers/materialController');

exports.getPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find();
    res.send(purchaseOrders);
  } catch (error) {
    res.send(error);
  }
};

exports.getOpen = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find({ status: 'Open' });
    res.send(purchaseOrders);
  } catch (error) {
    res.send(error);
  }
};

exports.getExpired = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find({ status: 'Expired' });
    res.send(purchaseOrders);
  } catch (error) {
    res.send(error);
  }
};

exports.getPurchaseOrder = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.findById(req.params.id);
    res.send(purchaseOrders);
  } catch (error) {
    res.send(error);
  }
};

exports.registerPurchaseOrder = async (req, res) => {
  try {
    const purchaseOrder = new PurchaseOrder(req.body);
    purchaseOrder.status = 'Open';
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
    // console.log(products);
    // consigue cuantos productos hacen falta para terminar todos los invoices
    const missingProducts = await productController.getMissingProducts(products);
    console.log({ missingProducts });
    // consigue los materiales
    const materials = await productController.getMaterials(missingProducts);
    // console.log({ materials });

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
    setTimeout(async () => {
      const pendingPurchaseOrders = [];
      for (const supplier in suppliers) {
        const materialsId = [];
        const materialsAmount = [];
        for (const material of suppliers[supplier]) {
          if (materials[material._id] !== undefined) {
            materialsId.push(material._id);
            materialsAmount.push(materials[material._id]);
          }
          // console.log(material._id, materials[material._id]);
        }
        // console.log(materialsId);
        const total = await materialController.getTotalCost(materialsId, materialsAmount);
        const purchaseOrder = new PurchaseOrder({
          status: 'Esperando Autorizacion',
          supplier,
          user: req.user,
          materialList: materialsId,
          materialAmount: materialsAmount,
          total,
          invoices: pendingInvoices,
          dateToBeComplete: moment()
            .add(7, 'days')
            .calendar(),
        });
        // await purchaseOrder.save();
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

exports.generateRandomPurchaseOrders = async (req, res) => {
  try {
    const productsObject = await Product.find();
    // console.log(productsObject);
    for (let x = 0; x < 30; x++) {
      const amountOfProducts = Math.floor(Math.random() * 30 + 1);
      const products = [];
      for (let y = 0; y < amountOfProducts; y++) {
        const amountOfProduct = Math.floor(Math.random() * 100 + 1);
        const productKey = Math.floor(Math.random() * 29 + 1);
        const key = Object.keys(productsObject)[productKey];
        const product = productsObject[key];
        products.push({ id: product._id.toString(), amount: amountOfProduct });
        // products[product._id].id = product._id;
        // products[product._id].amount = amountOfProduct;
      }
      // console.log(products);
      const purchaseOrders = await generatePurchaseOrders(products);
    }
  } catch (error) {
    console.log(error);
  }
};

const generatePurchaseOrders = async productList => {
  const materials = await productController.getMaterials(productList);
  // console.log({ materials });

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
  setTimeout(async () => {
    const pendingPurchaseOrders = [];
    for (const supplier in suppliers) {
      const materialsId = [];
      const materialsAmount = [];
      for (const material of suppliers[supplier]) {
        if (materials[material._id] !== undefined) {
          materialsId.push(material._id);
          materialsAmount.push(materials[material._id]);
        }
        // console.log(material._id, materials[material._id]);
      }
      // console.log(materialsId);
      try {
        const status1 = Math.floor(Math.random() * 3 + 1);
        const total = await materialController.getTotalCost(materialsId, materialsAmount);
        const purchaseOrder = new PurchaseOrder({
          status: status1 === 1 ? 'Expired' : status1 === 2 ? 'Complete' : 'Open',
          supplier,
          // user: req.user,
          materialList: materialsId,
          materialAmount: materialsAmount,
          total,
          date: faker.date.past(3),
        });
        await purchaseOrder.save();
      } catch (error) {
        console.log(error);
      }
      // pendingPurchaseOrders.push(purchaseOrder);
      // console.log(purchaseOrder);
    }
    console.log(pendingPurchaseOrders);
  }, 1000);
};

exports.getExpiredGraphs = async (req, res) => {
  try {
    const data = [];
    // const supplier = await Supplier.findOne();
    const suppliers = await supplierController.getSuppliers2();
    // const purchaseOrders = await PurchaseOrder.find({
    //   status: 'Expired',
    //   supplier: supplier._id,
    // });
    // const purchaseOrders2 = await PurchaseOrder.find({
    //   status: 'Complete',
    //   supplier: supplier._id,
    // });
    // data.push({
    //   id: 'Expired',
    //   label: 'Expired',
    //   value: Object.keys(purchaseOrders).length,
    //   color: 'hsl(311, 70%, 50%)',
    // });
    // data.push({
    //   id: 'Complete',
    //   label: 'Complete',
    //   value: Object.keys(purchaseOrders2).length,
    //   color: 'hsl(248, 70%, 50%)',
    // });
    for (const supplier of suppliers) {
      const data2 = [];
      const purchaseOrders = await PurchaseOrder.find({
        status: 'Expired',
        supplier: supplier._id,
      });
      const purchaseOrders2 = await PurchaseOrder.find({
        status: 'Complete',
        supplier: supplier._id,
      });
      data2.push({
        id: 'Expired',
        label: 'Expired',
        value: Object.keys(purchaseOrders).length,
        color: 'hsl(311, 70%, 50%)',
        name: supplier.name,
      });
      data2.push({
        id: 'Complete',
        label: 'Complete',
        value: Object.keys(purchaseOrders2).length,
        color: 'hsl(248, 70%, 50%)',
      });
      data.push(data2);
    }
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.executeContracts = async () => {
  try {
    const purchaseOrders = await PurchaseOrder.find({ status: 'Open' });
    for (const purchaseOrder of purchaseOrders) {
      if (purchaseOrder.dateToBeComplete < moment().format()) {
        purchaseOrder.status = 'Expired';
        await purchaseOrder.save();
      }
    }
  } catch (error) {
    console.log(error);
  }
};
