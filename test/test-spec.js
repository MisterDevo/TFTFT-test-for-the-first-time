var assert = require('assert');

describe('TFTFT EndToEnd Test', function() {
    
    var webdriverio = require('webdriverio');
    
    var options = {
    //  baseUrl:'http://localhost:3000'
    };
    options = require('./wdio-opt.js');

    this.timeout(60000);
    var client = {};

    before(function(done){
          client = webdriverio.remote(options).init();
          if(options.saucelabs){
            options.saucelabs.getJobs(function (err, jobs) {
              for (var k in jobs) {
                if(jobs[k].tags[0]===options.desiredCapabilities.tags[0]){
                  client.sessionID = jobs[k].id;
                  break;
                }
              }
            });
          }
          client.call(done);
    });

    describe('verif title on first page', function() {
        it('should have the right title', function (done) {
            client
              .url('/')
              .getTitle()
              .then(function(title){
                  assert.equal(title, 'TFTFT - Test For The First Time');
              })
              .call(done);
        });
    });

    describe('saucelabs view', function() {
        it('should display correct saucelabs link', function (done) {
            client
              .pause(5000)
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
              .pause(5000)
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
          options.saucelabs.updateJob(client.sessionID,
                                { passed: passed },
                                function(){ client.end().call(done); });
        } else {
            client.end().call(done);
        }
    });
});
