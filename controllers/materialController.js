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
