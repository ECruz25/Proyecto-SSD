const mongoose = require('mongoose');
const faker = require('faker');

const Material = mongoose.model('Material');

exports.registerMaterial = async (req, res) => {
  try {
    const material = new Material(req.body);
    await material.save();
  } catch (error) {
    res.send(error);
  }
};

exports.addMaterialToProduct = async (materials, product) => {
  try {
    materials.each(material => {
      const newMaterial = Material.findById(material);
      newMaterial.productsList.push(product);
      newMaterial.save();
    });
  } catch (error) {
    console.log(error);
  }
};

exports.generateMaterials = async () => {
  for (let x = 0; x < 50; x++) {
    try {
      const material = new Material({
        name: `${faker.commerce.color()} ${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}`,
        cost: faker.commerce.price(),
        description: `${faker.commerce.color()} ${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}`,
        amount: Math.floor(Math.random() * 100 + 1),
      });
      const existingMaterial = await Material.find({ name: material.name });
      if (existingMaterial[0]) {
        x--;
        console.log('No entre');
      } else {
        // console.log(existingMaterial[0].name, material.name);
        await material.save();
      }
    } catch (error) {
      console.log(error);
    }
  }
};
