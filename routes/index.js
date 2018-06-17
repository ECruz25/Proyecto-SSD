const express = require('express');
const productController = require('../controllers/productController');
const supplierController = require('../controllers/supplierController');
const materialController = require('../controllers/materialController');
const purchaseOrderController = require('../controllers/purchaseOrderController');

const router = express.Router();

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.post('/products/register', productController.registerProduct);
router.get('/purchaseOrders', purchaseOrderController.getPurchaseOrders);

// USADO PARA GENERAR INFORMACION ALEATORIA, NO USAR!
// router.get('/suppliers/generateSuppliers', supplierController.generateSuppliers);
// router.get('/materials/generateMaterials', materialController.generateMaterials);
// router.get('/generateProducts', productController.generateProducts);

module.exports = router;
