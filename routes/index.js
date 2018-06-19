const express = require('express');
const productController = require('../controllers/productController');
const supplierController = require('../controllers/supplierController');
const materialController = require('../controllers/materialController');
const purchaseOrderController = require('../controllers/purchaseOrderController');
const supplierContractController = require('../controllers/supplierContractController');

const router = express.Router();

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.get('/purchaseOrders', purchaseOrderController.getPurchaseOrders);
router.get('/materials', materialController.getMaterials);
router.post('/products/register', productController.registerProduct);

// USADO PARA GENERAR INFORMACION ALEATORIA, NO USAR!
// router.get('/suppliers/generateSuppliers', supplierController.generateSuppliers);
// router.get('/materials/generateMaterials', materialController.generateMaterials);
// router.get('/generateProducts', productController.generateProducts);
// router.get('/', supplierContractController.createContract);

module.exports = router;
