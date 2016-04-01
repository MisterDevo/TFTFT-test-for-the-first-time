var assert = require('assert');
var test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

// change this line to run locally
var isLocalSeleniumServer = false;
var travis = true;

var option_local = {
      server: 'http://127.0.0.1:4444/wd/hub',
      desiredCapabilities: { browserName: 'firefox' },
      baseUrl:'http://localhost:3000'
    };

var options = isLocalSeleniumServer ? option_local : travis ? require('./option-travis-sauce.js') : require('./option-sauce.js');


test.describe('TFTFT End To End tests', function() {

    this.timeout(90000);
    var client = {};

    test.before(function(){
        client = new webdriver.Builder().
                          withCapabilities(options.desiredCapabilities).
                          usingServer(options.server).
                          build();
    });


    test.describe('Verif on first page', function() {

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
                assert.equal(attr, 'ng-scope');
            });
        });

    });


    test.describe('Mocha menu', function() {

          test.it('should be correct mocha submenu slide by ng-click', function () {
              client.findElement(webdriver.By.id('mochawesome-link'))
                .getAttribute('ng-click')
                .then(function(attr){
                    assert(attr.length);
                });
          });

          test.it('should be displayed after toggle if necessary  and after slide click', function () {
              client.findElement(webdriver.By.className('navbar-toggle'))
                .isDisplayed()
                .then(function(displayed){
                    if(displayed){
                      client.findElement(webdriver.By.className('navbar-toggle')).click();
                    }
                });
              client.findElement(webdriver.By.id('mochawesome-link')).click();
              //client.wait(webdriver.until.elementLocated(webdriver.By.id('frame-mochawesome')), 10000)
              client.findElement(webdriver.By.className('nav-second-level'))
                .isDisplayed()
                .then(function(displayed){
                    assert(displayed);
                });
           });


        test.describe('Mochawesome-unit view', function() {

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


        test.describe('Mochawesome-route view', function() {

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


        test.describe('Mochawesome-spec view', function() {

            test.it('should display correct mochawesome-spec link', function () {
                client.findElement(webdriver.By.id('mochawesome-spec-link'))
                  .getAttribute('href')
                  .then(function(attr){
                      assert.equal(attr,  options.baseUrl + '/#mochawesome-spec');
                  });
            });

            test.it('should be correct source iframe after click', function () {
              //client.findElement(webdriver.By.id('mochawesome-route-link')).click();
                client.wait(webdriver.until.elementLocated(webdriver.By.id('mochawesome-spec-link')), 10000).click();
                client.wait(webdriver.until.elementLocated(webdriver.By.id('frame-mochawesome-spec')), 10000)
                  .getAttribute('src')
                  .then(function(attr){
                      assert.equal(attr,  options.baseUrl + '/report/test-spec.html');
                  });
             });

             test.it('should be correct page loaded', function () {
                client.switchTo().frame(client.findElement(webdriver.By.id('frame-mochawesome-spec')));
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


    });


    test.describe('Coverage view', function() {

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


    test.describe('Saucelabs view', function() {

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

    test.describe('Mail Me feature', function() {

      test.it('should display mailme directive when click on mailme-link', function () {
          client.findElement(webdriver.By.id('mailme-link')).click();
          client.findElement(webdriver.By.css('mailme'))
            .isDisplayed()
            .then(function(displayed){
                assert(displayed);
            });
       });

       test.it('should return error if empty message is send', function () {
         client.findElement(webdriver.By.css('mailme'))
            .findElement(webdriver.By.css('form'))
            .findElement(webdriver.By.css('input[type=submit]'))
            .click().then(function () {
               client.findElement(webdriver.By.css('.txtstyle'))
               .getInnerHtml()
               .then(function(html){
                   assert.equal(html, 'An error occurs.');
               });
             })
        });

        test.it('should return response if message is send', function () {
          var mailmeForm = client.findElement(webdriver.By.css('mailme'))
                              .findElement(webdriver.By.css('form'));

          mailmeForm.findElement(webdriver.By.css('textarea'))
              .sendKeys("hello from selenium test");

          mailmeForm.findElement(webdriver.By.css('input[type=submit]'))
             .click().then(function () {
                mailmeForm.findElement(webdriver.By.css('.txtstyle'))
                .getInnerHtml()
                .then(function(html){
                    assert(html.length);
                });
              })
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
          client.getSession().then(function (sessionid){
              options.saucelabs.updateJob( sessionid.id_, { passed: passed }, function(err, res) {
                options.saucelabs.stopJob( sessionid.id_, { }, function(err, res) {
                  client.quit();
                  done();
                });
              });
            });
        } else {
            client.quit();
            done();
        }
    });

});
