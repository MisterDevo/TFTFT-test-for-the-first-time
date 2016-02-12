var assert = require('assert');
var webdriverio = require('webdriverio');
var options = {
        desiredCapabilities: {
          browserName: 'chrome',
            //browserName: 'firefox',
            version: '27',
            platform: 'XP',
            tags: ['TFTFT Pages'],
            name: 'TFTFT',
            build: 'build-1.0',
            passed: 'true',

        //
        //     // If using Open Sauce (https://saucelabs.com/opensauce/),
        //     // capabilities must be tagged as "public" for the jobs's status
        //     // to update (failed/passed). If omitted on Open Sauce, the job's
        //     // status will only be marked "Finished." This property can be
        //     // be omitted for commerical (private) Sauce Labs accounts.
        //     // Also see https://support.saucelabs.com/customer/portal/articles/2005331-why-do-my-tests-say-%22finished%22-instead-of-%22passed%22-or-%22failed%22-how-do-i-set-the-status-
             'public': true
        },
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: 'silent'
    }
    
describe('TFTFT page', function() {

    this.timeout(60000);
    var client = {};
    
    before(function(done){
          client = webdriverio.remote(options).init();
          client.url('https://tftft.herokuapp.com').call(done);
    });
    it('should have the right title - the fancy generator way', function (done) {
        client
          .url('/')
          .getTitle(function(err, title) {
                assert(err === undefined);
                assert(title === 'TFTFT - Test For The First Time');
          })
          .call(done);
    });

    after(function(done) {
        client.end().call(done);
    });
});
