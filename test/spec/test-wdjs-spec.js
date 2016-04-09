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


    test.describe('Welcome page', function() {

        test.it('should have the right title', function () {
            client.get(options.baseUrl);
            client.wait(client.getTitle(), 10000)
              .then(function(title){
                  assert.equal(title, 'TFTFT - Test For The First Time');
              });
        });

        test.it('should wait for loading first angular view', function () {
            client.wait(webdriver.until.elementLocated(webdriver.By.id('welcome-view')), 10000)
            .getAttribute('class')
            .then(function(attr){
                assert.equal(attr, 'txtstyle ng-scope');
            });
        });

    });


    test.describe('Mocha menu', function() {

          test.it('should slide with ng-click condition', function () {
              client.findElement(webdriver.By.id('mocha-link'))
                .getAttribute('ng-click')
                .then(function(attr){
                    assert(attr.length);
                });
          });

          test.it('should display submenu on click after toggle if necessary (small device)', function () {
              client.findElement(webdriver.By.className('navbar-toggle'))
                .isDisplayed()
                .then(function(displayed){
                    if(displayed){
                      client.findElement(webdriver.By.className('navbar-toggle')).click();
                    }
                });
              client.findElement(webdriver.By.id('mocha-link')).click();
              client.findElement(webdriver.By.className('nav-second-level'))
                .isDisplayed()
                .then(function(displayed){
                    assert(displayed);
                });
           });

        var repTestedElem;
        test.describe('Unit Test menu', function() {

            test.it('should display correct mocha-unit link', function () {
                client.findElement(webdriver.By.id('mocha-unit-link'))
                  .getAttribute('href')
                  .then(function(attr){
                      assert.equal(attr,  options.baseUrl + '/#mocha-unit');
                  });
            });

            test.it('should wait for loading mocha-unit view', function () {
                client.wait(webdriver.until.elementLocated(webdriver.By.id('mocha-unit-link')), 10000)
                  .click()
                  .then( function() {
                    repTestedElem = client.wait(webdriver.until.elementLocated(webdriver.By.css('section')), 10000);
                    repTestedElem
                      .getAttribute('class')
                      .then(function(attr){
                          assert.equal(attr, 'suite ng-scope');
                      });
                  });
            });

        });

        test.describe('Route Test menu', function() {

            test.it('should display correct mocha-route link', function () {
                var btn = client.findElement(webdriver.By.id('mocha-route-link'));
                btn.getAttribute('href')
                  .then(function(attr){
                      assert.equal(attr,  options.baseUrl + '/#mocha-route');
                      btn.click();
                  });
            });

            test.it('should wait for loading mocha-route view', function () {
              //client.wait(webdriver.until.elementLocated(webdriver.By.id('mocha-route-link')), 10000).click();

              if(options.desiredCapabilities.browserName === 'android') {
                  //must find a solution to pass saucelabs android test
                  client.findElement(webdriver.By.css('section'))
                    .getAttribute('class')
                    .then(function(attr){
                        assert.equal(attr, 'suite ng-scope');
                    });
              } else {
                  client.wait(webdriver.until.stalenessOf(repTestedElem), 10000)
                      .then(function(el){
                        repTestedElem = client.findElement(webdriver.By.css('section'));
                        repTestedElem
                          .getAttribute('class')
                          .then(function(attr){
                              assert.equal(attr, 'suite ng-scope');
                          });
                      });
              }



            });

        });

        test.describe('End to End Test menu', function() {

            test.it('should display correct mocha-spec link', function () {
                var btn = client.findElement(webdriver.By.id('mocha-spec-link'));
                btn.getAttribute('href')
                  .then(function(attr){
                      assert.equal(attr,  options.baseUrl + '/#mocha-spec');
                      btn.click();
                  });
            });

            test.it('should wait for loading mocha-spec view', function () {
                //client.wait(webdriver.until.elementLocated(webdriver.By.id('mocha-spec-link')), 10000).click();
                if(options.desiredCapabilities.browserName === 'android') {
                    //must find a solution to pass saucelabs android test
                    client.findElement(webdriver.By.css('section'))
                      .getAttribute('class')
                      .then(function(attr){
                          assert.equal(attr, 'suite ng-scope');
                      });
                } else {
                    client.wait(webdriver.until.stalenessOf(repTestedElem), 10000)
                        .then(function(el){
                          client.findElement(webdriver.By.css('section'))
                            .getAttribute('class')
                            .then(function(attr){
                                assert.equal(attr, 'suite ng-scope');
                            });
                        });
                }
            });

        });

    });


    test.describe('Istanbul menu', function() {

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


    test.describe('Saucelabs dropdown and popup', function() {

        test.it('should popup saucelabs matrix when mouse hover sl-logo if present (large device)', function () {

          client.findElement(webdriver.By.className('navbar-toggle'))
            .isDisplayed()
            .then(function(displayed){
                if(displayed){
                  assert(true);
                } else {
                  new webdriver.ActionSequence(client)
                      .mouseMove(client.findElement(webdriver.By.css('#sl-logo[popover-placement]')))
                      .perform()
                      .then(function(){
                        client.wait(webdriver.until.elementLocated(webdriver.By.id('sl-img')), 3000)
                          .getAttribute('src')
                          .then(function(attr){
                              assert.equal(attr,  options.baseUrl + '/images/misterdevo.svg');
                          });
                      });
                }
            });
        });

        test.it('should display saucelabs matrix when click on sl-link present only in mocha-spec view', function () {
            client.findElement(webdriver.By.id('mocha-spec-link')).click();
            client.findElement(webdriver.By.id('sl-link')).click();
            client.wait(webdriver.until.elementLocated(webdriver.By.id('sl-img')), 3000)
              .getAttribute('src')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl +  '/images/misterdevo.svg');
              });
         });

    });


    test.describe('Mail Me feature', function() {

      var mailmeForm
      test.it('should display mailme directive when click on mailme-link', function () {
          client.findElement(webdriver.By.id('mailme-link')).click();
          client.findElement(webdriver.By.css('mailme'))
            .isDisplayed()
            .then(function(displayed){
                mailmeForm = client.findElement(webdriver.By.css('mailme'))
                                       .findElement(webdriver.By.css('form'));
                assert(displayed);
            });
       });

       test.it('should return response if message is send', function () {
          //  var mailmeForm = client.findElement(webdriver.By.css('mailme'))
          //                           .findElement(webdriver.By.css('form'));
           mailmeForm.findElement(webdriver.By.css('textarea'))
                        .sendKeys("hello from selenium test");
           mailmeForm.findElement(webdriver.By.css('input[type=submit]'))
                        .click();
           client.wait(webdriver.until.elementTextContains(mailmeForm.findElement(webdriver.By.className('txtstyle')),' '), 3000)
                   .getInnerHtml()
                   .then(function(html){
                       assert(html.length);
                   });
        });

       test.it('should return error if empty message is send', function () {
            // var mailmeForm = client.findElement(webdriver.By.css('mailme'))
            //                           .findElement(webdriver.By.css('form'));
            mailmeForm.findElement(webdriver.By.css('input[type=submit]'))
                      .click();
            client.wait(webdriver.until.elementTextContains(mailmeForm.findElement(webdriver.By.className('txtstyle')),' '), 3000)
                 .getInnerHtml()
                 .then(function(html){
                     assert.equal(html, 'An error occurs.');
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
