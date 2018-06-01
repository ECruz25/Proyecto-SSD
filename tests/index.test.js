const request = require('supertest');
const mongoose = require('mongoose');
const chai = require('chai');
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
    });

    describe('Product', () => {
      it('should return all products', done => {
        const product = '5b11c829630a8677fa8fe582';
        request(app)
          .get(`/products/${product}`)
          .expect('Content-Type', /json/)
          .expect(200)
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
