const express = require('express');
const asyncHandler = require('express-async-handler');
const { protect } = require('../../middleware/auth');
const {
  getOrders,
  getOrder,
  addOrder,
  updateOrderToPaid,
} = require('./order.controller');

const router = express.Router();

// @desc Fetch all orders
// @route GET /api/orders
// @access Public
router.get('/', asyncHandler(getOrders));

// @desc Fetch single order
// @route GET /api/orders/:id
// @access Private
router.get('/:id', protect, asyncHandler(getOrder));

// @desc Create new order
// @route POST /api/orders
// @access Private
router.post('/', protect, asyncHandler(addOrder));

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
router.put('/:id/pay', protect, asyncHandler(updateOrderToPaid));

module.exports = router;
