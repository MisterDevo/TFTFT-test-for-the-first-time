var assert = require('assert');

var request = require('supertest');
var app = require('../../app');

describe('TFTFT Route Test', function() {

    describe('Statics files', function () {

          it('must find Unit test mochawesome html report', function(done){
            request(app)
              .get('/report/test-unit.html')
              .expect(200, done);
          })

          it('must find Route test mochawesome html report', function(done){
            request(app)
              .get('/report/test-route.html')
              .expect(200, done);
          })

          it('must find End to End test mochawesome html report', function(done){
            request(app)
              .get('/report/test-spec.html')
              .expect(200, done);
          })

          it('must find Coverage test istanbul html report', function(done){
            request(app)
              .get('/cov/lcov-report/index.html')
              .expect(200, done);
          })

          it('must find Saucelab image', function(done){
            request(app)
              .get('/images/misterdevo.svg')
              .expect(200, done);
          })

    });

    describe('Covering routes/index', function () {

          it('GET / respond with body', function(done){
            request(app)
              .get('/')
              .expect('Content-Type', /html/)
              .expect(200)
              .expect(/<body>/, done);
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


    describe('Covering routes/mail', function () {

            it('GET /mail respond with html', function(done){
              request(app)
                .get('/mail')
                .expect('Content-Type', /html/)
                .expect(200, done);
            })
    });
});
