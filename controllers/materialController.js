const mongoose = require('mongoose');
const faker = require('faker');

const Material = mongoose.model('Material');
const Supplier = mongoose.model('Supplier');

exports.registerMaterial = async (req, res) => {
  try {
    const material = new Material(req.body);
    await material.save();
  } catch (error) {
    res.send(error);
  }
};

exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.send(materials);
  } catch (error) {
    console.log(error);
  }
};

exports.addMaterialToProduct = async (materials, product) => {
  try {
    materials.each(async material => {
      const newMaterial = await Material.findById(material);
      newMaterial.productsList.push(product);
      await newMaterial.save();
    });
  } catch (error) {
    console.log(error);
  }
};

exports.generateMaterials = async () => {
  const suppliers = await Supplier.find();
  for (let x = 0; x < 50; x++) {
    try {
      const material = new Material({
        name: `${faker.commerce.color()} ${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}`,
        cost: faker.commerce.price(),
        description: `${faker.commerce.color()} ${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}`,
        amount: Math.floor(Math.random() * 100 + 1),
        supplier: suppliers[Math.floor(Math.random() * suppliers.length + 1)]
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

exports.getMaterialList = async () => {
  try {
    const materials = await Material.find();
    const materialList = {};
    for (let x = 0; x < Math.floor(Math.random() * 10 + 1); x++) {
      const number = Math.floor(Math.random() * (materials.length - 1) + 1);
      if (!materialList[materials[number]._id]) {
        materialList[materials[number]._id] = materials[number]._id;
      }
    }
    return materialList;
  } catch (error) {
    console.log(error);
  }
};

// exports.getMaterialListBySupplier = async supplier => {
//   try {
//     const materials = await Material.find({ supplier });
//     return materials;
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.getMaterialListBySupplier = async (req, res) => {
  try {
    const materials = await Material.find({ supplier: req.params.id });
    res.send(materials);
  } catch (error) {
    console.log(error);
  }
};

exports.getMaterialListBySupplier2 = async supplierId => {
  try {
    // console.log(supplierId);
    const materials = await Material.find({ supplier: supplierId });
    // console.log(materials);
    return materials;
  } catch (error) {
    console.log(error);
  }
};

exports.getSuppliers = async materials => {
  try {
    const suppliersPromise = materials.map(async material => {
      try {
        const materialP = await Material.findById(material);
        return await materialP.supplier;
      } catch (error) {
        console.log(error);
      }
    });
    const suppliers = Promise.all(suppliersPromise);
    // console.log(suppliers);
    return suppliers;
  } catch (error) {
    console.log(error);
  }
};

exports.getTotalCost = async materialList => {
  let totalCost = 0;
  try {
    for (let y = 0; y < materialList.length; y++) {
      const material = await Material.findById(materialList[y]);
      totalCost += material.cost;
    }
    return totalCost;
  } catch (error) {
    console.log(error);
  }
};
