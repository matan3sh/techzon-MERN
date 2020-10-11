const { products } = require('../../data/products');

getProducts = async (req, res) => res.json(products);

getProduct = async (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
};

module.exports = {
  getProducts,
  getProduct,
};
