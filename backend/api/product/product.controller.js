const { products } = require('../../data/products');
const Product = require('../../models/product');

getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) return res.json(product);
  else return res.status(404).json({ message: 'Product not found!' });
};

module.exports = {
  getProducts,
  getProduct,
};
