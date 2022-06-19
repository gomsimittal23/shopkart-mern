const express = require('express');
const { getAllProducts, getProductById } = require('../controller/prodControllers');
const router = express.Router();


//get all products from db
//get api/products
router.get('/', getAllProducts);

//get a product from db
//get api/products/:id
router.get('/:id', getProductById);

module.exports = router;