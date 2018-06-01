const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.post('/products/register', productController.registerProduct);

module.exports = router;
