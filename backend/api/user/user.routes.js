const express = require('express');
const asyncHandler = require('express-async-handler');
const {
  login,
  getUserProfile,
  updateUserProfile,
  register,
} = require('./user.controller');
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

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
router.put('/profile', protect, asyncHandler(updateUserProfile));

// @desc Register a new user
// @route POST /api/users/register
// @access Public
router.post('/register', asyncHandler(register));

module.exports = router;
