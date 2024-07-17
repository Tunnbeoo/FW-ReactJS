const express = require('express');
const router = express.Router();
const productController = require('../mongose/products.controller');

// Get all products
router.get('/products', productController.getAllProducts);

// Get product by ID
router.get('/products/:id', productController.getProductById);

// Create new product
router.post('/products', productController.createProduct);

// Update product
router.put('/products/:id', productController.updateProduct);

// Delete product
router.delete('/products/:id', productController.deleteProduct);

// Search products by keyword
router.get('/products/search/:keyword', productController.searchProducts);

module.exports = router;
