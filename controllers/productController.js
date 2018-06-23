const mongoose = require('mongoose');
const faker = require('faker');

const Product = mongoose.model('Product');
const materialController = require('../controllers/materialController');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const products = Product.findById(req.params.id);
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
  // console.log(await materialController.getMaterialList());
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
        // console.log('No entre');
      } else {
        // console.log(existingMaterial[0].name, material.name);
        await product.save();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

exports.getMaterials = async products => {
  try {
    const productsArray = [];
    const productsAmount = [];
    for (const product of products) {
      console.log(product);
      productsArray.push(await Product.findById(product.id));
      productsAmount.push(product.amount);
    }
    // console.log(productsAmount);
    const productsMaterials = {};
    productsArray.map(product => {
      product.materialList.map((material, index) => {
        productsMaterials[material] = 0;
      });
    });
    productsArray.map((product, index2) => {
      product.materialList.map((material, index) => {
        productsMaterials[material] =
          productsMaterials[material] + product.materialAmount[index] * productsAmount[index2];
      });
    });
    return productsMaterials;
  } catch (error) {
    console.log(error);
  }
};

exports.getMissingProducts = async products => {
  try {
    const missingProductsPromise = Object.keys(products).map(async key => {
      try {
        // console.log(key, products[key]);
        const product = await Product.findById(key);
        // console.log('====================================');
        // console.log(key, products[key], product.amount);
        // console.log('====================================');
        if (products[key] - product.amount > 0) {
          // console.log('Aca si');
          return { id: key, amount: products[key] - product.amount };
        }
        return { id: key, amount: 0 };
      } catch (error) {
        console.error(`Error en el key${key}`);

        console.log(error);
      }
    });
    const missingProducts = Promise.all(missingProductsPromise);
    return missingProducts;
  } catch (error) {
    console.log(error);
  }
};
