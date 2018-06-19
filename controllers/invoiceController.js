const mongoose = require('mongoose');

const Invoice = mongoose.model('Invoice');

exports.create = async (req, res) => {
  try {
    const invoice = new Invoice({
      customer: '5b291f74f92efd4579b4d247',
      user: '5b291eb5a8ca65447927659a',
      productList: [
        '5b124ff613ae695b434148bc',
        '5b124ff613ae695b434148bd',
        '5b124ff913ae695b434148c2',
        '5b12506f13ae695b434148cc',
        '5b12507013ae695b434148cf',
      ],
      productAmount: [100, 100, 100, 100, 100],
    });
    await invoice.save();
  } catch (error) {
    console.log(error);
  }
};

exports.getPendingInvoices = async () => {
  const invoices = await Invoice.find({ status: 'Pending' });
  return invoices;
};
