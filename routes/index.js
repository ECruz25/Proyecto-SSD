const express = require('express');
const productController = require('../controllers/productController');
const supplierController = require('../controllers/supplierController');
const materialController = require('../controllers/materialController');
const purchaseOrderController = require('../controllers/purchaseOrderController');
const supplierContractController = require('../controllers/supplierContractController');
const userController = require('../controllers/userController');
const customerController = require('../controllers/customerController');
const invoiceController = require('../controllers/invoiceController');

const router = express.Router();
// router.get('/register', userController.register);
// router.get('/customer/register', customerController.register);
// router.get('/invoice/create', invoiceController.create);
router.get('/invoice/pending', invoiceController.getPendingInvoices);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.get('/purchaseOrders', purchaseOrderController.getPurchaseOrders);
router.get('/purchaseOrders/plan', purchaseOrderController.plan);
router.get('/materials', materialController.getMaterials);
router.get('/suppliers', supplierController.getSuppliers);
router.get('/suppliers/contracts', supplierContractController.getContracts);
router.get('/suppliers/:id/contracts', supplierContractController.getContract);
router.get('/suppliers/:id/materials', materialController.getMaterialListBySupplier);
// router.post('/products/register', productController.registerProduct);

// USADO PARA GENERAR INFORMACION ALEATORIA, NO USAR!
// router.get('/suppliers/generateSuppliers', supplierController.generateSuppliers);
// router.get('/materials/generateMaterials', materialController.generateMaterials);
// router.get('/generateProducts', productController.generateProducts);
// router.get('/', supplierContractController.createContract);

module.exports = router;
