var assert = require('assert');
var test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

var options = {
  // server:'http://127.0.0.1:4444/wd/hub',
  // desiredCapabilities:{browserName:'firefox'},
  // baseUrl:'http://localhost:3000'
};
options = require('./wdjs-opt.js');

test.describe('TFTFT WDJS EndToEnd Test', function() {

    this.timeout(60000);
    var client = {};

    test.before(function(){
        client = new webdriver.Builder().
                          withCapabilities(options.desiredCapabilities).
                          usingServer(options.server).
                          build();
    });


    test.describe('verif on first page', function() {

        test.it('should have the right title', function () {
            client.get(options.baseUrl);
            client.wait(client.getTitle(), 10000)
              .then(function(title){
                  assert.equal(title, 'TFTFT - Test For The First Time');
              });
            // client.wait(webdriver.until.elementIsVisible(client.findElement(webdriver.By.id('project-link'))), 10000)
            // .click();
        });

        test.it('should wait for loading first angular view', function () {
            client.wait(webdriver.until.elementLocated(webdriver.By.id('welcome-view')), 10000)
            .getAttribute('class')
            .then(function(attr){
                assert.equal(attr, 'burning ng-scope');
            });
        });

    });


    test.describe('mochawesome view', function() {

        test.it('should display correct mochawesome link', function () {
            client.findElement(webdriver.By.id('mochawesome-link'))
              .getAttribute('href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#mochawesome');
              });
        });

        test.it('should be correct source iframe after click', function () {
            client.findElement(webdriver.By.id('mochawesome-link')).click();
            client.wait(webdriver.until.elementLocated(webdriver.By.id('frame-mochawesome')), 10000)
              .getAttribute('src')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/report/tests.html');
              });
         });

         test.it('should be correct page loaded', function () {
            client.switchTo().frame(client.findElement(webdriver.By.id('frame-mochawesome')));
            client.findElement(webdriver.By.className('report-title'))
                .getInnerHtml()
                .then(function(html){
                    assert(html.length);
                });
          });

          test.after(function(){
            client.switchTo().defaultContent();
          });

    });


    test.describe('mochawesome-unit view', function() {

        test.it('should display correct mochawesome-unit link', function () {
            client.findElement(webdriver.By.id('mochawesome-unit-link'))
              .getAttribute('href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#mochawesome-unit');
              });
        });

        test.it('should be correct source iframe after click', function () {
            //client.findElement(webdriver.By.id('mochawesome-unit-link')).click();
            client.wait(webdriver.until.elementLocated(webdriver.By.id('mochawesome-unit-link')), 10000).click();
            client.wait(webdriver.until.elementLocated(webdriver.By.id('frame-mochawesome-unit')), 10000)
              .getAttribute('src')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/report/test-unit.html');
              });
         });

        test.it('should be correct page loaded', function () {
            client.switchTo().frame(client.findElement(webdriver.By.id('frame-mochawesome-unit')));
            client.findElement(webdriver.By.className('report-title'))
                .getInnerHtml()
                .then(function(html){
                    assert(html.length);
                });
        });

        test.after(function(){
          client.switchTo().defaultContent();
        });

    });


    test.describe('mochawesome-route view', function() {

        test.it('should display correct mochawesome-route link', function () {
            client.findElement(webdriver.By.id('mochawesome-route-link'))
              .getAttribute('href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#mochawesome-route');
              });
        });

        test.it('should be correct source iframe after click', function () {
          //client.findElement(webdriver.By.id('mochawesome-route-link')).click();
            client.wait(webdriver.until.elementLocated(webdriver.By.id('mochawesome-route-link')), 10000).click();
            client.wait(webdriver.until.elementLocated(webdriver.By.id('frame-mochawesome-route')), 10000)
              .getAttribute('src')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/report/test-route.html');
              });
         });

         test.it('should be correct page loaded', function () {
            client.switchTo().frame(client.findElement(webdriver.By.id('frame-mochawesome-route')));
            client.findElement(webdriver.By.className('report-title'))
                .getInnerHtml()
                .then(function(html){
                    assert(html.length);
                });
          });

          test.after(function(){
            client.switchTo().defaultContent();
          });

    });


    test.describe('coverage view', function() {

        test.it('should display correct coverage link', function () {
            client.findElement(webdriver.By.id('coverage-link'))
              .getAttribute('href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#coverage');
              });
        });

        test.it('should display correct url in the view', function () {
            client.findElement(webdriver.By.id('coverage-link')).click();
            client.wait(webdriver.until.elementLocated(webdriver.By.id('frame-coverage')), 10000)
              .getAttribute('src')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/cov/lcov-report/index.html');
              });
         });

         test.it('should be correct page loaded', function () {
            client.switchTo().frame(client.findElement(webdriver.By.id('frame-coverage')));
            client.findElement(webdriver.By.className('footer'))
                .getInnerHtml()
                .then(function(html){
                    assert.equal(html.split('\n  ')[1], 'Code coverage');
                });
          });

          test.after(function(){
            client.switchTo().defaultContent();
          });

    });


    test.describe('saucelabs view', function() {

        test.it('should display correct saucelabs link', function () {
            client.findElement(webdriver.By.id('saucelabs-link'))
              .getAttribute('href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#saucelabs');
              });
        });

        test.it('should display correct url in the view', function () {
            client.findElement(webdriver.By.id('saucelabs-link')).click();
            client.wait(webdriver.until.elementLocated(webdriver.By.id('sl-img')), 10000)
              .getAttribute('src')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl +  '/images/misterdevo.svg');
              });
         });

    });


    var passed = true;
    test.afterEach(function() {
        if(this.currentTest.state === 'failed') {
          passed = false;
        }
    });


    test.after(function(done) {
        if(options.saucelabs){
          // options.saucelabs.getJobs(function (err, jobs) {
          //   for (var k in jobs) {
          //     if(jobs[k].tags[0]===options.desiredCapabilities.tags[0]){
          //         options.saucelabs.updateJob( jobs[k].id,
          //                               { passed: passed },
          //                               function(){ client.quit(); done(); });
          //         break;
          //     }
          //   }
          // });
          client.getSession().then(function (sessionid){
            options.saucelabs.updateJob(sessionid.id_,
                                          { passed: passed },
                                          function(){ client.quit(); done(); });
          });
        } else {
            client.quit();
            done();
        }
    });

});
