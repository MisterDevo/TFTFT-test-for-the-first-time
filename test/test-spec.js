var assert = require('assert');
var webdriverio = require('webdriverio');



var options = {
//  baseUrl:'http://localhost:3000'
};
options = require('./wdio-opt.js');

var SauceLabs = require("saucelabs");
var saucelabs = new SauceLabs({
      username: options.user,
      password: options.key
    });


describe('TFTFT EndToEnd Test', function() {

    this.timeout(60000);
    var client = {};

    before(function(done){
          client = webdriverio.remote(options).init();
          client.sessions().then(function(list){
              client.sessionID = list.sessionId;
          })
          .call(done);
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

    after(function(done) {
        //client.end().call(done);

        var title = this.currentTest.title,
        passed = (this.currentTest.state === 'passed') ? true : false;

        client.end();

        saucelabs.updateJob(client.sessionID, {
          name: title,
          passed: passed
        }, done);
    });
});
