const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect('Hello world!')
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should be in a list of users', (done) => {
      // assert 200
      // assert you exist in users array
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Shayne',
            age: 29
          });
        })
        .end(done);
    });
  });
});
