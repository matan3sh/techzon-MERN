const express = require('express');
const asyncHandler = require('express-async-handler');
const { getProducts, getProduct } = require('./product.controller');

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(getProducts));

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler(getProduct));

module.exports = router;
