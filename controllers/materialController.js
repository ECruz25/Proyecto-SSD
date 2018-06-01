const mongoose = require('mongoose');

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
