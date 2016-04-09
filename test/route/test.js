var assert = require('assert');

var request = require('supertest');
var app = require('../../app');

describe('TFTFT Route Test with Supertest', function() {

    describe('routes for static files', function () {

          it('Unit test mocha html report', function(done){
            request(app)
              .get('/report/test-unit.html')
              .expect(200, done);
          })

          it('Route test mocha html report', function(done){
            request(app)
              .get('/report/test-route.html')
              .expect(200, done);
          })

          it('End to End test mocha html report', function(done){
            request(app)
              .get('/report/test-spec.html')
              .expect(200, done);
          })

          it('Coverage test istanbul html report', function(done){
            request(app)
              .get('/cov/lcov-report/index.html')
              .expect(200, done);
          })

          it('End to End saucelabs matrix image', function(done){
            request(app)
              .get('/images/misterdevo.svg')
              .expect(200, done);
          })

    });

    describe('routes/index', function () {

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


    describe('routes/users', function () {

            it('GET /users respond with html', function(done){
              request(app)
                .get('/users')
                .expect('Content-Type', /html/)
                .expect(200, done);
                //.expect(/<body>/, done);
            })
    });


    describe('routes/mail', function () {

            it('POST /mail with message respond status 200', function(done){
              request(app)
                .post('/mail')
                .send({ email: '', message: 'hello from route test' })
                .expect(200, done);
            })
            it('POST /mail without message respond status 500', function(done){
              request(app)
                .post('/mail')
                .send({ email: '', message: '' })
                .expect(500, done);
            })
    });
});
