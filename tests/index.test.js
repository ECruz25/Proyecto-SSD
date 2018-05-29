const request = require('supertest');

const app = require('../app');

it('should return json', done => {
  request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .expect(200)
    // .expect('Hello World')
    .end(done);
});
