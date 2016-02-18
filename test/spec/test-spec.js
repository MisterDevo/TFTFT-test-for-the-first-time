var assert = require('assert');
var webdriverio = require('webdriverio');

var options = {
//  baseUrl:'http://localhost:3000'
};
options = require('./wdio-opt.js');

describe('TFTFT EndToEnd Test', function() {

    this.timeout(60000);
    var client = {};

    before(function(done){
        client = webdriverio.remote(options).init().call(done);
    });

    //fixing Edge failing on waitForExist
    var waitOrPause = function(selector){
      if (options.desiredCapabilities && options.desiredCapabilities.browserName==='MicrosoftEdge'){
          client.pause(5000);
      } else {
          client.waitForExist(selector, 5000);
      }
    }

    describe('verif title on first page', function() {
        it('should have the right title', function (done) {
            client
              .url('/')
              .pause(5000)
              .getTitle()
              .then(function(title){
                  assert.equal(title, 'TFTFT - Test For The First Time');
              });
              waitOrPause('#project-link');
              //.waitForExist('#project-link', 5000)
              client.click('#project-link')
                    .call(done);
        });
    });

    describe('mochawesome view', function() {
        it('should display correct mochawesome link', function (done) {
            client
              .getAttribute('#mochawesome-link','href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#mochawesome');
              })
              .call(done);
        });

        it('should display correct url', function (done) {
            client
              .url('/#mochawesome');
              waitOrPause('#frame-mochawesome');
              //.waitForExist('#frame-mochawesome', 5000)
              client.getAttribute('#frame-mochawesome','src')
              .then(function(attr){
                  assert.equal(attr, options.baseUrl + '/report/tests.html');
              })
              .call(done);
        });
    });

    describe('coverage view', function() {
        it('should display correct coverage link', function (done) {
            client
              .getAttribute('#coverage-link','href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#coverage');
              })
              .call(done);
        });

        it('should display correct url', function (done) {
            client
              .url('/#coverage');
              waitOrPause('#frame-coverage');
              //.waitForExist('#frame-coverage', 5000)
              client.getAttribute('#frame-coverage','src')
              .then(function(attr){
                  assert.equal(attr, options.baseUrl + '/cov/lcov-report/index.html');
              })
              .call(done);
        });
    });

    describe('saucelabs view', function() {
        it('should display correct saucelabs link', function (done) {
            client
              .getAttribute('#saucelabs-link','href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#saucelabs');
              })
              .call(done);
        });

        it('should display saucelabs matrix with correct url', function (done) {
            client
              .url('/#saucelabs');
              waitOrPause('#sl-img');
              //.waitForExist('#sl-img', 5000)
              client.getAttribute('#sl-img','src')
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
