const Product = require('../../models/product');

getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else {
    res.status(404);
    throw new Error('Product not found');
  }
};

module.exports = {
  getProducts,
  getProduct,
};
