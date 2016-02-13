var assert = require('assert');
var webdriverio = require('webdriverio');

var options = require('/wdio-opt');
//var options = {};

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
