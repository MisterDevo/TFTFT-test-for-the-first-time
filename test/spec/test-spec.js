var assert = require('assert');
var webdriverio = require('webdriverio');

var options = {
  baseUrl:'http://localhost:3000'
};
//options = require('./wdio-opt.js');

describe('TFTFT EndToEnd Test', function() {

    this.timeout(60000);
    var client = {};

    before(function(done){
        client = webdriverio.remote(options).init().call(done);
    });

    describe('verif title on first page', function() {
        it('should have the right title', function (done) {
            client
              .url('/')
              .getTitle()
              .then(function(title){
                  assert.equal(title, 'TFTFT - Test For The First Time');
              })
              .waitForExist('#project-link')
              .call(done);
        });
    });

    describe('mochawesome view', function() {
        it('should display correct mochawesome link', function (done) {
            client
              .click('#project-link')
              .getAttribute('#mochawesome-link','href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#mochawesome');
              })
              .call(done);
        });

        it('should display correct url', function (done) {
            client
              .url('/#mochawesome')
              .waitForExist('#frame-mochawesome')
              .getAttribute('#frame-mochawesome','src')
              .then(function(attr){
                  assert.equal(attr, options.baseUrl + '/report/tests.html');
              })
              .call(done);
        });
    });

    describe('coverage view', function() {
        it('should display correct coverage link', function (done) {
            client
              .click('#project-link')
              .getAttribute('#coverage-link','href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#coverage');
              })
              .call(done);
        });

        it('should display correct url', function (done) {
            client
              .url('/#coverage')
              .waitForExist('#frame-coverage')
              .getAttribute('#frame-coverage','src')
              .then(function(attr){
                  assert.equal(attr, options.baseUrl + '/cov/lcov-report/index.html');
              })
              .call(done);
        });
    });

    describe('saucelabs view', function() {
        it('should display correct saucelabs link', function (done) {
            client
              .click('#project-link')
              .getAttribute('#saucelabs-link','href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#saucelabs');
              })
              .call(done);
        });

        it('should display saucelabs matrix with correct url', function (done) {
            client
              .url('/#saucelabs')
              .waitForExist('#sl-img')
              .getAttribute('#sl-img','src')
              .then(function(attr){
                  assert.equal(attr,'https://saucelabs.com/browser-matrix/misterdevo.svg');
              })
              .call(done);
        });
    });

    var passed = true;
    afterEach(function() {
        if(this.currentTest.state === 'failed') {
          passed = false;
        }
    });

    after(function(done) {
        if(options.saucelabs){
          options.saucelabs.getJobs(function (err, jobs) {
            for (var k in jobs) {
              if(jobs[k].tags[0]===options.desiredCapabilities.tags[0]){
                options.saucelabs.updateJob(jobs[k].id,
                                      { passed: passed },
                                      function(){ client.end().call(done); });
                break;
              }
            }
          });
        } else {
            client.end().call(done);
        }
    });
});
