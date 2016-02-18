var assert = require('assert');

var request = require('supertest');

//tested files
var app = require('../app');
var index = require('../routes/index');
var users = require('../routes/users');


describe('TFTFT Unit Test', function() {

  describe('Covering func in route/users for the moment', function () {

    it('should return string by calling testFunc', function () {
      assert.equal(users.testFunc(), "TFTFT");
    });
  });

});

describe('TFTFT Route Test', function() {

    describe('Covering routes/index', function () {

          it('GET / respond with body burning', function(done){
            request(app)
              .get('/')
              .expect('Content-Type', /html/)
              .expect(200)
              .expect(/<body class="burning">/, done);
          })

          it('GET /api/welcome respond with json welcome messages', function(done){
            request(app)
              .get('/api/welcome')
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(200, done);
          })
    });

    describe('Covering routes/users', function () {

            it('GET /users respond with html', function(done){
              request(app)
                .get('/users')
                .expect('Content-Type', /html/)
                .expect(200, done);
                //.expect(/<body>/, done);
            })
    });
});
