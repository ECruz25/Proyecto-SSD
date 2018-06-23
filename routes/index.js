const express = require('express');
const productController = require('../controllers/productController');
const supplierController = require('../controllers/supplierController');
const materialController = require('../controllers/materialController');
const purchaseOrderController = require('../controllers/purchaseOrderController');
const supplierContractController = require('../controllers/supplierContractController');
const userController = require('../controllers/userController');
const customerController = require('../controllers/customerController');
const customerContractController = require('../controllers/customerContractController');
const invoiceController = require('../controllers/invoiceController');

const router = express.Router();
// router.get('/register', userController.register);
// router.get('/customer/register', customerController.register);
// router.get('/invoice/create', invoiceController.create);
router.get('/invoice/pending', invoiceController.getPendingInvoices);
router.get('/invoice/create', invoiceController.create);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.get('/purchaseOrders', purchaseOrderController.getPurchaseOrders);
router.post('/purchaseOrders/register', purchaseOrderController.registerPurchaseOrder);
router.get('/purchaseOrders/getMostExpiredMaterials', purchaseOrderController.getMostExpiredMaterials);
router.get('/purchaseOrders/getData', purchaseOrderController.getExpiredGraphs);
router.get('/purchaseOrders/getExpiredDataByMonth', purchaseOrderController.getExpiredPObyMonthAndSupplier);
router.get('/purchaseOrders/plan', purchaseOrderController.plan);
router.get('/purchaseOrders/open', purchaseOrderController.getOpen);
router.get('/purchaseOrders/expired', purchaseOrderController.getExpired);
router.get('/materials', materialController.getMaterials);
router.get('/materials/:id', materialController.getMaterial);
router.get('/suppliers', supplierController.getSuppliers);
router.get('/suppliers/contracts', supplierContractController.getContracts);
router.get('/suppliers/contracts/getCosts', supplierContractController.getPenaltiesCost);
router.get('/suppliers/:id', supplierController.getSupplier);
router.get('/suppliers/:id/contracts', supplierContractController.getContract);
router.get('/suppliers/:id/materials', materialController.getMaterialListBySupplier);
// router.post('/products/register', productController.registerProduct);

// USADO PARA GENERAR INFORMACION ALEATORIA, NO USAR!
// router.get('/suppliers/generateSuppliers', supplierController.generateSuppliers);
// router.get('/materials/generateMaterials', materialController.generateMaterials);
// router.get('/generateProducts', productController.generateProducts);
// router.get('/', supplierContractController.createContract);
// router.get('/purchaseOrders/random', purchaseOrderController.generateRandomPurchaseOrders);
// router.get('/customer/generate', customerController.register);
// router.get('/customerContract/generate', customerContractController.register);

module.exports = router;
