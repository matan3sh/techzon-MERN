const express = require('express');
const asyncHandler = require('express-async-handler');
const {
  getProducts,
  getProduct,
  deleteProduct,
} = require('./product.controller');
const { protect, isAdmin } = require('../../middleware/auth');

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(getProducts));

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler(getProduct));

// @desc Delete single product by id
// @route DELETE /api/products/:id
// @access Private/Admin
router.delete('/:id', protect, isAdmin, asyncHandler(deleteProduct));

module.exports = router;
