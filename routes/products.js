const express = require('express');
const router = express.Router();


const {getAllProducts, getAllProductsTesting}= require('../controllers/products');
// Get all products
router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);

// Get a single product


module.exports=router;