const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

router.use('/get-products',adminController.getProducts);

router.use('/add-product',adminController.addproduct);

router.use('/delete-product/:productId',adminController.deleteProduct);


module.exports = router;
