const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('server', () => {
  describe('#get/', () => {
    it('should return Hello World response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  })
  describe('#get/users', () => {
    it('should verify user exists', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
        name: 'Shannen',
        age: 41
        });
      })
      .end(done);
    });
  })
});
