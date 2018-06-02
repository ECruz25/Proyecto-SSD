const request = require('supertest');
const app = require('../bin/www');

describe('Products', () => {
  describe('/GET', () => {
    describe('Products', () => {
      it('should return all products', done => {
        request(app)
          .get('/products')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(done);
      });
      it('should return all products', done => {
        const productId = '5b11c829630a8677fa8fe582';
        const product = {
          _id: {
            $oid: '5b11c829630a8677fa8fe582',
          },
          name: 'Escritorio',
          amount: 230,
          materialAmount: [],
          materialList: [],
          __v: 0,
        };
        request(app)
          .get(`/products/${productId}`)
          .expect('Content-Type', /json/)
          .expect(200)
          .expect()
          .end(done);
      });
    });
  });

  describe('/POST product ', () => {
    it('should register a new product', done => {
      const product = { name: 'Escritorio', amount: 230 };
      request(app)
        .post('/products/register')
        .send(product)
        .expect(200)
        .end(done);
      done();
    });
  });
});

describe('PurchaseOrder', () => {
  describe('/GET', () => {
    describe('PurchaseOrders', () => {
      it('should get all purchase orders', done => {
        request(app)
          .get('/purchaseOrders')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(done);
      });
      it('should get specific purchase order', done => {
        const purchaseOrderId = '5b11c829630a8677fa8fe582';
        request(app)
          .get(`/purchaseOrders/${purchaseOrderId}`)
          .expect('Content-Type', /json/)
          .expect(200)
          .end(done);
      });
    });
  });
});

describe('Supplier', () => {
  describe('/GET', () => {
    describe('Suppliers', () => {
      it('should get all suppliers', done => {
        request(app)
          .get('/suppliers')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(done);
      });
      it('should get specific purchase order', done => {
        const supplierId = '5b11c829630a8677fa8fe582';
        request(app)
          .get(`/suppliers/${supplierId}`)
          .expect('Content-Type', /json/)
          .expect(200)
          .end(done);
      });
    });
  });
});
