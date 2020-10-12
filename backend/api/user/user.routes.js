const express = require('express');
const asyncHandler = require('express-async-handler');
const { login, getUserProfile, register } = require('./user.controller');
const { protect } = require('../../middleware/auth');

const router = express.Router();

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
router.post('/login', asyncHandler(login));

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
router.get('/profile', protect, asyncHandler(getUserProfile));

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get('/register', asyncHandler(register));

module.exports = router;