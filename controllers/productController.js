const mongoose = require('mongoose');

const Product = mongoose.model('Product');

exports.getProducts = async (req, res) => {
  try {
    const products = Product.find();
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const products = Product.findById(req.params.userId);
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};

exports.registerProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
  } catch (error) {
    res.send(error);
  }
};
