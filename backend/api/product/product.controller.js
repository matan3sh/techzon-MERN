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

deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

addProduct = async (req, res) => {
  const product = new Product({
    title: 'Sample Product Name',
    price: 0,
    user: req.user._id,
    image: '/images/placeholder.png',
    brand: 'Sample Brand',
    category: 'Sample Category',
    countInStock: 0,
    inStock: false,
    numReviews: 0,
    description: 'Sample Description',
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

updateProduct = async (req, res) => {
  const {
    title,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    inStock,
  } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.title = title;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.category = category;
    product.countInStock = countInStock;
    product.inStock = inStock;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

module.exports = {
  getProducts,
  getProduct,
  deleteProduct,
  addProduct,
  updateProduct,
};
