const mongoose = require('mongoose');
const faker = require('faker');

const Product = mongoose.model('Product');
const materialController = require('../controllers/materialController');

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

exports.deleteProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
  } catch (error) {
    res.send(error);
  }
};

exports.generateProducts = async () => {
  console.log(await materialController.getMaterialList());
  for (let x = 0; x < 15; x++) {
    try {
      const materials = await materialController.getMaterialList();
      const materialList = Object.values(materials);
      const materialAmount = [];
      for (let y = 0; y < materialList.length; y++) {
        materialAmount.push(Math.floor(Math.random() * 10 + 1));
      }
      const product = new Product({
        name: faker.commerce.productName(),
        price: (await materialController.getTotalCost(materialList)) * 1.3,
        amount: Math.floor(Math.random() * 100 + 1),
        materialList,
        materialAmount,
      });
      const existingProduct = await Product.find({ name: product.name });
      if (existingProduct[0]) {
        x--;
        console.log('No entre');
      } else {
        // console.log(existingMaterial[0].name, material.name);
        await product.save();
      }
    } catch (error) {
      console.log(error);
    }
  }
};
