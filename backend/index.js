const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middleware/error');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const productRoutes = require('./api/product/product.routes');
app.use('/api/products', productRoutes);
const userRoutes = require('./api/user/user.routes');
app.use('/api/users', userRoutes);
const orderRoutes = require('./api/order/order.routes');
app.use('/api/orders', orderRoutes);
const paypalRoutes = require('./api/paypal/paypal.routes');
app.use('/api/config', paypalRoutes);
const uploadRoutes = require('./api/uploads/upload.routes');
app.use('/api/upload', uploadRoutes);

// Static Folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware
app.use(notFound);
app.use(errorHandler);

// Connect to Database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server is runing in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  )
);
