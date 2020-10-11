const express = require('express');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middleware/error');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Routes
const productRoutes = require('./api/product/product.routes');
app.use('/api/products', productRoutes);

// Middleware
app.use(bodyParser.json());
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
