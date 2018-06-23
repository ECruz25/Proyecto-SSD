const mongoose = require('mongoose');

const Invoice = mongoose.model('Invoice');
const Product = mongoose.model('Product');
const Customer = mongoose.model('Customer');

exports.create = async (req, res) => {
  try {
    const customersObject = await Customer.find();
    const productsObject = await Product.find();
    for (let z = 0; z < 100; z++) {
      const customerKey = Math.floor(Math.random() * Object.keys(customersObject).length - 1 + 1);
      // const status = Math.floor(Math.random() * 10 + 1) === 1 ? 'Expired' : 'Complete';Pending
      const status = 'Pending';
      const amountOfProducts = Math.floor(Math.random() * 30 + 1);
      const products = [];
      const productsAmount = [];
      for (let y = 0; y < amountOfProducts; y++) {
        const amountOfProduct = Math.floor(Math.random() * 100 + 1);
        const productKey = Math.floor(Math.random() * 29 + 1);
        const key = Object.keys(productsObject)[productKey];
        const product = productsObject[key];
        if (!products.includes(product._id.toString())) {
          products.push(product._id.toString());
          productsAmount.push(amountOfProduct);
        } else {
          console.log('no se creo');
        }
      }
      const key2 = Object.keys(customersObject)[customerKey];
      const customer = customersObject[key2];
      const invoice = new Invoice({
        customer: customer._id,
        user: '5b291eb5a8ca65447927659a',
        productList: products,
        productAmount: productsAmount,
        status,
      });
      // console.log(invoice);
      await invoice.save();
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getPendingInvoices = async () => {
  const invoices = await Invoice.find({ status: 'Pending' });
  return invoices;
};

exports.getPendingInvoices2 = async (req, res) => {
  const invoices = await Invoice.find({ status: 'Pending' });
  res.send(invoices);
};
